import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description: "Get in touch with our team. We're here to help with any questions you have about our services and solutions.",
    keywords: ["contact", "get in touch", "support", "business inquiries", "customer service"],
    openGraph: {
      title: "Contact Us - Get in Touch",
      description: "Get in touch with our team. We're here to help with any questions you have.",
      type: "website",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
            Have questions? We&apos;re here to help. Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@businesstemplate.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">123 Business Street</p>
                  <p className="text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 