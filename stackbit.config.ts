import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  // 1️⃣  Tell VE where your Markdown/MDX lives
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      // folders relative to root containing your content
      contentDirs: ["content"],

      // 2️⃣  Declare the editable models INSIDE the source
      models: [
        {
          name: "Page",
          label: "Page",
          type: "page",                    // makes it appear in the page-editor
          filePath: "content/pages/{slug}.mdx",
          urlPath: "/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "layout", type: "enum", options: ["default", "blog"], default: "default" },
            { name: "template", type: "enum", options: ["page", "post"], default: "page" },
            { name: "sections", type: "list", items: { type: "model", models: ["Hero", "Feature"] } },
            { name: "body", type: "markdown" }
          ]
        },
        {
          name: "Post",
          label: "Blog Post",
          type: "page",
          filePath: "content/blog/{slug}.mdx",
          urlPath: "/blog/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "date", type: "date", required: true },
            { name: "author", type: "string", required: true },
            { name: "category", type: "string", required: true },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Hero",
          label: "Hero Section",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "subtitle", type: "string" },
            { name: "text", type: "markdown" },
            { name: "image", type: "image" },
            { name: "actions", type: "list", items: { type: "model", models: ["Button"] } }
          ]
        },
        {
          name: "Feature",
          label: "Feature Section",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "subtitle", type: "string" },
            { name: "features", type: "list", items: { type: "model", models: ["FeatureItem"] } }
          ]
        },
        {
          name: "FeatureItem",
          label: "Feature Item",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "text", type: "markdown" },
            { name: "icon", type: "string" }
          ]
        },
        {
          name: "Button",
          label: "Button",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "url", type: "string", required: true },
            { name: "style", type: "enum", options: ["primary", "secondary"], default: "primary" }
          ]
        }
      ]
    })
  ],

  // 3️⃣  Duplicate the page-level models at **root** scope
  //     – Visual Editor needs this when building the page tree.
  models: {
    Page: {
      type: "page",
      filePath: "content/pages/{slug}.mdx",
      urlPath: "/{slug}"
    },
    Post: {
      type: "page",
      filePath: "content/blog/{slug}.mdx",
      urlPath: "/blog/{slug}"
    }
  }
}); 