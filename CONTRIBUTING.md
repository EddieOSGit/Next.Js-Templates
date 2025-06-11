# Contributing & Using This Template

Welcome to the Next.js Business Template! This guide will help you customize the template for your specific business needs.

## 🚀 Getting Started with the Template

### 1. Create Your Project

#### Using GitHub Template
1. Click "Use this template" button on GitHub
2. Name your new repository
3. Clone your new repository locally

#### Using Git Clone
```bash
git clone https://github.com/yourusername/next-js-business-template.git your-business-name
cd your-business-name
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

Configure your environment variables (see README.md for details).

## 🎨 Customizing for Your Business

### Business-Specific Branding to Update

#### 1. **Site Metadata** (`src/app/layout.tsx`)
```typescript
// Update these values:
export const metadata: Metadata = {
  title: {
    template: '%s | Your Business Name',
    default: 'Your Business Name - Your Tagline',
  },
  description: "Your business description",
  // ... update other metadata
};
```

#### 2. **SEO Configuration** (`next-seo.config.ts`)
- Update `titleTemplate` with your business name
- Change `defaultTitle` and `description`
- Update `canonical` URL
- Replace social media handles
- Update Open Graph images

#### 3. **Contact Information** (`src/app/(main)/contact/page.tsx`)
Replace placeholder contact details:
- Email: `info@businesstemplate.com`
- Phone: `+1 (555) 123-4567`
- Address: `123 Business Street`

#### 4. **Footer** (`src/components/site-footer.tsx`)
- Update company name
- Add your social media links
- Update copyright year
- Add relevant footer links

#### 5. **Header/Navigation** (`src/components/site-header.tsx`)
- Update logo/brand name
- Customize navigation items
- Add your business-specific pages

#### 6. **Home Page Content** (`src/app/(main)/page.tsx`)
- Hero section headline and description
- Feature cards content
- Company logos in social proof section
- FAQ questions and answers

#### 7. **About Page** (`src/app/(main)/about/page.tsx`)
- Company story
- Mission statement
- Values
- Team information

#### 8. **Services Page** (`src/app/(main)/services/page.tsx`)
- Update service offerings
- Customize service descriptions
- Add your specific pricing/packages

#### 9. **Blog Content** (`content/blog/`)
- Remove example blog post
- Add your own blog content
- Update categories

#### 10. **Styling & Branding**
- **Colors**: Update `tailwind.config.ts` brand colors
- **Fonts**: Update fonts in `src/lib/fonts.ts`
- **Logo**: Add your logo to `public/` directory
- **Favicon**: Replace `public/favicon.ico`

### Theme Customization

#### Colors (tailwind.config.ts)
```javascript
colors: {
  brand: {
    50: '#your-color',
    // ... update brand colors
  }
}
```

#### Typography
Update font imports in `src/lib/fonts.ts`:
```typescript
export const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

## 📁 Project Structure

```
├── src/
│   ├── app/              # App router pages
│   ├── components/       # Reusable components
│   ├── lib/             # Utilities and configurations
│   └── styles/          # Global styles
├── content/             # MDX blog content
├── public/              # Static assets
└── ...config files
```

## 🔧 Key Features to Leverage

### Contact Form
The contact form is pre-configured with:
- Email sending via Resend
- Rate limiting with Upstash Redis
- Form validation
- Toast notifications

### Blog System
- MDX support for rich content
- Syntax highlighting
- SEO optimization
- Categories and tags ready

### SEO
- Meta tags on all pages
- Open Graph support
- JSON-LD structured data
- Sitemap generation

### Analytics
- Vercel Analytics integration
- Plausible Analytics support
- Custom event tracking ready

## 🚦 Development Workflow

### Running Locally
```bash
npm run dev
```

### Testing
```bash
npm test
npm run test:watch
npm run test:coverage
```

### Building
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update all business-specific content
- [ ] Configure environment variables
- [ ] Update SEO metadata
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Test contact form
- [ ] Review and update legal pages
- [ ] Configure analytics
- [ ] Test all pages locally
- [ ] Run build without errors

## 🤝 Contributing to the Template

If you want to contribute improvements back to the template:

1. Fork the template repository
2. Create a feature branch
3. Make your improvements
4. Ensure changes are generic (not business-specific)
5. Submit a pull request

### Guidelines for Template Contributions

- Keep features generic and reusable
- Don't include business-specific content
- Maintain TypeScript strict mode
- Add tests for new features
- Update documentation
- Follow existing code style

## 📝 Adding New Features

### Adding a New Page

1. Create the page in `src/app/(main)/your-page/page.tsx`
2. Add navigation link in `src/components/site-header.tsx`
3. Add SEO metadata using `generateMetadata`
4. Create tests in `__tests__/`

### Adding a Component

1. Create component in `src/components/`
2. Use TypeScript interfaces
3. Follow naming conventions
4. Add Storybook story (if applicable)
5. Document props

### Adding a Blog Post

1. Create MDX file in `content/blog/`
2. Add frontmatter metadata
3. Use consistent categories
4. Optimize images
5. Preview locally

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Check environment variables
- Verify all dependencies installed
- Clear `.next` cache: `rm -rf .next`

**Contact Form Not Working**
- Verify Resend API key
- Check Upstash Redis credentials
- Test locally with console logs

**Styling Issues**
- Clear browser cache
- Check Tailwind config
- Verify CSS imports

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [MDX](https://mdxjs.com/)
- [Radix UI](https://www.radix-ui.com/)

## 💡 Tips

1. **Keep It Simple**: Don't over-engineer, the template is meant to be a starting point
2. **Stay Updated**: Regularly update dependencies for security
3. **Test Everything**: Write tests for your business logic
4. **Document Changes**: Keep README updated with your customizations
5. **Use TypeScript**: Leverage type safety for better development experience

---

Happy building! 🚀 If you create something awesome with this template, we'd love to hear about it! 