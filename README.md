# Next.js Business Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX Blog with gray-matter
- ✅ Contact Form with Email & Rate Limiting
- ✅ Toast Notifications
- ✅ SEO Optimized
- ✅ Responsive Design

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

## Contact Form Setup

The contact form is fully implemented with email sending and rate limiting. To enable it, you need to set up the following environment variables:

### Required Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# Contact Form Configuration
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@yourdomain.com

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

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

### Contact Form Features

- ✅ Form validation with Zod
- ✅ Rate limiting (5 submissions per hour per IP)
- ✅ Email notifications via Resend
- ✅ Toast notifications for user feedback
- ✅ Server-side form processing
- ✅ Error handling and user-friendly messages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
