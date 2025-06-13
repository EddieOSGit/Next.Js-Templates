import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, BarChart, Users, Zap } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Transform your business with our comprehensive platform. Streamline operations, boost productivity, and drive growth with smart insights and team collaboration tools.",
    keywords: ["business platform", "productivity", "analytics", "team collaboration", "business growth"],
    openGraph: {
      title: "Transform Your Business with Our Solution",
      description: "Streamline operations, boost productivity, and drive growth with our comprehensive business platform.",
      type: "website",
    },
  };
}

export default function HomePage() {
  return (
    <div data-sb-object-id="home">
      {/* Hero Section */}
      <section className="bg-background py-12 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 data-sb-field-path="hero.title" className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Business with Our Solution
            </h1>
            <p data-sb-field-path="hero.subtitle" className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Streamline operations, boost productivity, and drive growth with our comprehensive business platform.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/40 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 data-sb-field-path="features.title" className="text-3xl font-bold tracking-tighter md:text-4xl">
              Key Features
            </h2>
            <p data-sb-field-path="features.subtitle" className="mx-auto max-w-[700px] text-muted-foreground">
              Discover the tools that will revolutionize how your business operates.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div data-sb-field-path="features.items[0]" className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Lightbulb className="h-12 w-12 text-brand-600" />
            <h3 className="text-xl font-bold">Smart Insights</h3>
            <p className="text-center text-muted-foreground">
              AI-powered analytics to help you make data-driven decisions.
            </p>
          </div>
          <div data-sb-field-path="features.items[1]" className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BarChart className="h-12 w-12 text-brand-600" />
            <h3 className="text-xl font-bold">Performance Tracking</h3>
            <p className="text-center text-muted-foreground">
              Monitor all aspects of your business with intuitive dashboards.
            </p>
          </div>
          <div data-sb-field-path="features.items[2]" className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Users className="h-12 w-12 text-brand-600" />
            <h3 className="text-xl font-bold">Team Collaboration</h3>
            <p className="text-center text-muted-foreground">
              Seamless tools for your team to work together efficiently.
            </p>
          </div>
          <div data-sb-field-path="features.items[3]" className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-brand-600" />
            <h3 className="text-xl font-bold">Fast Implementation</h3>
            <p className="text-center text-muted-foreground">
              Quick setup process to get you up and running in no time.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-background py-12 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 data-sb-field-path="socialProof.title" className="text-3xl font-bold tracking-tighter md:text-4xl">
              Trusted by Leading Companies
            </h2>
            <p data-sb-field-path="socialProof.subtitle" className="mx-auto max-w-[700px] text-muted-foreground">
              Join hundreds of businesses that rely on our platform every day.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 py-8">
            <div data-sb-field-path="socialProof.companies[0]" className="flex h-16 w-32 items-center justify-center rounded-lg border bg-muted/30 p-4">
              <span className="text-lg font-semibold text-muted-foreground">Company A</span>
            </div>
            <div data-sb-field-path="socialProof.companies[1]" className="flex h-16 w-32 items-center justify-center rounded-lg border bg-muted/30 p-4">
              <span className="text-lg font-semibold text-muted-foreground">Company B</span>
            </div>
            <div data-sb-field-path="socialProof.companies[2]" className="flex h-16 w-32 items-center justify-center rounded-lg border bg-muted/30 p-4">
              <span className="text-lg font-semibold text-muted-foreground">Company C</span>
            </div>
            <div data-sb-field-path="socialProof.companies[3]" className="flex h-16 w-32 items-center justify-center rounded-lg border bg-muted/30 p-4">
              <span className="text-lg font-semibold text-muted-foreground">Company D</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/40 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 data-sb-field-path="faq.title" className="text-3xl font-bold tracking-tighter md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p data-sb-field-path="faq.subtitle" className="mx-auto max-w-[700px] text-muted-foreground">
              Find answers to common questions about our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem data-sb-field-path="faq.items[0]" value="item-1">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent>
                Getting started is easy! Simply sign up for an account, and our onboarding team will guide you through the setup process. We offer a 14-day free trial with no credit card required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-sb-field-path="faq.items[1]" value="item-2">
              <AccordionTrigger>What integrations do you support?</AccordionTrigger>
              <AccordionContent>
                Our platform integrates with most popular business tools including Salesforce, HubSpot, QuickBooks, Slack, Microsoft 365, and many more. We also offer an API for custom integrations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-sb-field-path="faq.items[2]" value="item-3">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use enterprise-grade encryption and security protocols to ensure your data is always protected. We are SOC 2 compliant and regularly undergo security audits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-sb-field-path="faq.items[3]" value="item-4">
              <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
              <AccordionContent>
                We provide 24/7 customer support via chat, email, and phone. Our dedicated support team ensures you get quick responses to any questions or issues you might encounter.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
} 