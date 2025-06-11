import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Business Template",
  description: "Learn more about our company, our mission, and our team.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re on a mission to help businesses succeed in the digital age.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2020, our company began with a simple vision: to make powerful business tools accessible to companies of all sizes. What started as a small project has grown into a comprehensive platform trusted by organizations worldwide.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            We believe that every business deserves access to powerful tools that can help them grow and succeed. Our mission is to democratize enterprise-grade software and make it available to businesses of all sizes.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Innovation:</strong> We constantly push the boundaries of what&apos;s possible.</li>
            <li><strong>Quality:</strong> We are committed to delivering the highest quality products and services.</li>
            <li><strong>Customer Focus:</strong> Our customers are at the center of everything we do.</li>
            <li><strong>Integrity:</strong> We operate with honesty, transparency, and ethical principles.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 