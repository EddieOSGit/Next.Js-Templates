import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services",
    description: "Explore our comprehensive range of services designed to help your business grow. From business consulting to digital marketing, software solutions, and data analytics.",
    keywords: ["business consulting", "digital marketing", "software solutions", "data analytics", "cloud solutions", "customer support"],
    openGraph: {
      title: "Our Services - Comprehensive Business Solutions",
      description: "Explore our range of services designed to help your business grow and succeed in the digital age.",
      type: "website",
    },
  };
}

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
            Comprehensive solutions tailored to meet your business needs.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Business Consulting</CardTitle>
              <CardDescription>Strategic guidance for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Business strategy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Process optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Growth planning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Boost your online presence</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Social media management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Content marketing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Software Solutions</CardTitle>
              <CardDescription>Custom software for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Mobile app development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>API integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Analytics</CardTitle>
              <CardDescription>Turn your data into insights</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Business intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Data visualization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cloud Solutions</CardTitle>
              <CardDescription>Scalable infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Cloud migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>DevOps implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Managed cloud services</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>24/7 assistance for your team</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Onboarding assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                  <span>Training programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 