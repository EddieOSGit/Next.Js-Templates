"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ContactFormValues } from "@/lib/validations/contact";
import { sendContact } from "@/app/(main)/contact/actions";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContact(formValues);

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "success",
        });
        // Reset form
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
          Name
        </label>
        <Input 
          id="name" 
          name="name"
          placeholder="Your name" 
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
          Email
        </label>
        <Input 
          id="email" 
          name="email"
          type="email" 
          placeholder="Your email" 
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="subject">
          Subject
        </label>
        <Input 
          id="subject" 
          name="subject"
          placeholder="How can we help?" 
          value={formValues.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="min-h-[150px] resize-none"
          value={formValues.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
} 