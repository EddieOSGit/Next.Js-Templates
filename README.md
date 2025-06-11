# Next.js Business Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX Blog with gray-matter
- ✅ Contact Form with Email & Rate Limiting
- ✅ Toast Notifications
- ✅ SEO Optimized with next-seo
- ✅ JSON-LD Structured Data
- ✅ Analytics Integration (Vercel & Plausible)
- ✅ Responsive Design
- ✅ Jest & React Testing Library
- ✅ GitHub Actions CI/CD
- ✅ Deployment Ready (Vercel, Netlify)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required Environment Variables

```bash
# Contact Form Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxx

# Contact Form Recipient
CONTACT_EMAIL=contact@yourdomain.com

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://xxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxx

# Application URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Optional Environment Variables

```bash
# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Vercel Analytics (automatically enabled on Vercel)
# No configuration needed

# Development/Testing
NODE_ENV=development
```

### Environment Variables by Service

#### Resend (Email Service)
- `RESEND_API_KEY` - API key from [resend.com](https://resend.com)
- `CONTACT_EMAIL` - Email address to receive contact form submissions

#### Upstash Redis (Rate Limiting)
- `UPSTASH_REDIS_REST_URL` - Redis database URL from [upstash.com](https://upstash.com)
- `UPSTASH_REDIS_REST_TOKEN` - Redis authentication token

#### Analytics
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Your domain for Plausible Analytics (optional)

#### Application
- `NEXT_PUBLIC_APP_URL` - Your application's public URL (used for SEO and API calls)

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/next-js-business-template)

1. Click the button above or import your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy

The `vercel.json` configuration includes:
- Clean URLs (removes .html extensions)
- Security headers
- Optimized caching for static assets

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/next-js-business-template)

1. Click the button above or import your repository to Netlify
2. Configure environment variables in Netlify dashboard
3. Deploy

The `netlify.toml` configuration includes:
- Build settings optimized for Next.js
- Security headers
- Optimized caching for static assets
- Next.js plugin for enhanced support

### Manual Deployment

For other platforms, build the project and deploy the `.next` directory:

```bash
npm run build
# Deploy the .next directory to your hosting platform
```

## SEO & Analytics Setup

### SEO Configuration

The template includes comprehensive SEO optimization:

- **next-seo** for default SEO configuration
- **generateMetadata()** functions on all pages
- **JSON-LD structured data** for blog posts with breadcrumbs
- **Open Graph** and **Twitter Card** meta tags
- **Optimized meta descriptions** and keywords

### Analytics Integration

The template supports both Vercel Analytics and Plausible:

```bash
# Optional: For Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### SEO Features

- ✅ Automatic sitemap generation
- ✅ Structured data for articles
- ✅ Breadcrumb navigation (JSON-LD)
- ✅ Social media optimization
- ✅ Search engine friendly URLs
- ✅ Meta tags optimization

## Contact Form Setup

The contact form is fully implemented with email sending and rate limiting. To enable it, you need to set up the following environment variables:

### Setup Instructions

1. **Resend (Email Service)**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Add your domain and verify it (for production)
   - Set `RESEND_API_KEY` in your environment

2. **Upstash Redis (Rate Limiting)**
   - Sign up at [upstash.com](https://upstash.com)
   - Create a new Redis database
   - Copy the REST URL and Token
   - Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

3. **Contact Email**
   - Set `CONTACT_EMAIL` to the email address where you want to receive contact form submissions

4. **App URL**
   - For development: `http://localhost:3000`
   - For production: your actual domain

5. **Analytics (Optional)**
   - **Vercel Analytics**: Automatically enabled when deployed to Vercel
   - **Plausible**: Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your domain

### Contact Form Features

- ✅ Form validation with Zod
- ✅ Rate limiting (5 submissions per hour per IP)
- ✅ Email notifications via Resend
- ✅ Toast notifications for user feedback
- ✅ Server-side form processing
- ✅ Error handling and user-friendly messages

## Testing

Run the test suite:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
