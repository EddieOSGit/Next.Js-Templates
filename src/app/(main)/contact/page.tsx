import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Business Template",
  description: "Get in touch with our team. We're here to help with any questions you have.",
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
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
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="subject">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] resize-none"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 