import { render, screen } from '@testing-library/react';
import HomePage from '@/app/(main)/page';

describe('HomePage', () => {
  it('renders the landing page with CTA visible', () => {
    render(<HomePage />);
    
    // Check for the main heading
    const heading = screen.getByRole('heading', {
      name: /Transform Your Business with Our Solution/i
    });
    expect(heading).toBeInTheDocument();
    
    // Check for the CTA button
    const ctaButton = screen.getByRole('link', { name: /Get Started/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toBeVisible();
    
    // Check for the secondary CTA button
    const learnMoreButton = screen.getByRole('link', { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toBeVisible();
    
    // Check for the hero description
    const description = screen.getByText(/Streamline operations, boost productivity, and drive growth/i);
    expect(description).toBeInTheDocument();
  });

  it('renders key features section', () => {
    render(<HomePage />);
    
    // Check for features section heading
    const featuresHeading = screen.getByRole('heading', { name: /Key Features/i });
    expect(featuresHeading).toBeInTheDocument();
    
    // Check for feature cards
    expect(screen.getByText(/Smart Insights/i)).toBeInTheDocument();
    expect(screen.getByText(/Performance Tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/Team Collaboration/i)).toBeInTheDocument();
    expect(screen.getByText(/Fast Implementation/i)).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<HomePage />);
    
    // Check for FAQ heading
    const faqHeading = screen.getByRole('heading', { name: /Frequently Asked Questions/i });
    expect(faqHeading).toBeInTheDocument();
    
    // Check for FAQ items
    expect(screen.getByText(/How do I get started\?/i)).toBeInTheDocument();
    expect(screen.getByText(/What integrations do you support\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Is my data secure\?/i)).toBeInTheDocument();
  });
}); 