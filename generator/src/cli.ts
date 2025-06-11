#!/usr/bin/env node

import arg from 'arg';
import prompts from 'prompts';
import degit from 'degit';
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function main() {
  // Parse CLI arguments
  const args = arg({
    '--yes': Boolean,
    '-y': '--yes'
  });

  let projectName = args._[0];

  // If no project name provided and not using --yes, prompt for it
  if (!projectName && !args['--yes']) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'What is your project named?',
      initial: 'my-app'
    });
    projectName = response.projectName;
  }

  // Default to 'my-app' if still no name
  projectName = projectName || 'my-app';

  // Get template tag from environment or use default
  const templateTag = process.env.TEMPLATE_TAG || 'v1.0.0-template';
  
  console.log(`\n🚀 Creating a new business website in ${projectName}...\n`);

  try {
    // Check if directory already exists
    if (existsSync(projectName)) {
      console.error(`❌ Directory ${projectName} already exists!`);
      process.exit(1);
    }

    // Clone the template
    const emitter = degit(`EddieOSGit/Next.Js-Templates#${templateTag}`, {
      cache: false,
      force: true,
      verbose: true
    });

    await emitter.clone(projectName);

    // Remove .git directory if it exists
    execSync(`rm -rf ${join(projectName, '.git')}`, { stdio: 'ignore' });

    // Update package.json name
    const packageJsonPath = join(projectName, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    packageJson.name = projectName;
    delete packageJson.workspaces; // Remove workspaces from the cloned template
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Install dependencies
    console.log('\n📦 Installing dependencies...\n');
    execSync('npm install', { cwd: projectName, stdio: 'inherit' });

    console.log('\n✅ Success! Created', projectName, 'at', process.cwd() + '/' + projectName);
    console.log('\nInside that directory, you can run:');
    console.log('\n  npm run dev');
    console.log('    Starts the development server');
    console.log('\n  npm run build');
    console.log('    Builds the app for production');
    console.log('\n  npm test');
    console.log('    Runs the test suite');
    console.log('\n🎉 Happy coding!');
    console.log('\n📖 See CONTRIBUTING.md for customization guide\n');

  } catch (error) {
    console.error('❌ Error creating project:', error);
    process.exit(1);
  }
}

// Run the CLI
main().catch(console.error); 