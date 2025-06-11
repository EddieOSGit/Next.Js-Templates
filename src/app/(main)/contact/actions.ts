"use server";

import { z } from "zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export async function sendContact(formData: ContactFormValues) {
  try {
    // Validate the form data
    const validatedFields = contactFormSchema.parse(formData);

    // Call the API
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          message: "Rate limit exceeded. Please try again later.",
        };
      }

      return {
        success: false,
        message: data.error || "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you for your message. We'll be in touch soon!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
        errors: error.flatten().fieldErrors,
      };
    }

    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
} 