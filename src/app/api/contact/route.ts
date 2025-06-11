import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

// Initialize Resend for email
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Redis and rate limiter
// 5 requests per hour
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
});

export async function POST(req: NextRequest) {
  try {
    // Get the client IP for rate limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    
    // Apply rate limiting
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          limit,
          remaining,
          reset,
        },
        { status: 429 }
      );
    }
    
    // Parse and validate the request body
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = result.data;
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Update with your domain once verified in Resend
      to: process.env.CONTACT_EMAIL || "contact@example.com", // Update with recipient email
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      replyTo: email,
    });
    
    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 