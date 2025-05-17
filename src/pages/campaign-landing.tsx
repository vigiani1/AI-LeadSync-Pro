// Campaign landing page component for marketing campaigns
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/seo-marketing";

export default function CampaignLandingPage() {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('utm_source') || 'direct';
  const medium = searchParams.get('utm_medium') || 'none';
  const campaign = searchParams.get('utm_campaign') || 'none';
  const content = searchParams.get('utm_content') || 'none';

  useEffect(() => {
    // Track page view with campaign data
    trackEvent(
      'campaign_landing', 
      'page_view', 
      `${source}/${medium}/${campaign}`, 
      1
    );
    
    // Add campaign-specific meta tags
    document.title = "Transform Your Lead Management | AI LeadSync Pro";
    
    // Update meta description based on campaign
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Streamline your entire lead engagement pipeline with AI-powered lead scoring, ' +
        'automated responses, dynamic pricing, and contract generation.'
      );
    }
  }, [source, medium, campaign, content]);

  // Determine headline and CTA based on campaign source
  let headline = "Transform Your Lead Management with AI";
  let subheadline = "Convert more leads with less effort using our AI-powered platform.";
  let ctaText = "Start Your Free Trial";
  
  if (source === 'google' && medium === 'cpc') {
    headline = "AI-Powered Lead Scoring & Management";
    subheadline = "Stop wasting time on low-quality leads. Let AI identify your best opportunities.";
    ctaText = "Start 14-Day Free Trial";
  } else if (source === 'linkedin') {
    headline = "Enterprise-Grade Lead Management for Growing Teams";
    subheadline = "Join hundreds of B2B companies already using AI LeadSync Pro to close more deals.";
    ctaText = "Schedule a Demo";
  } else if (source === 'email') {
    headline = "Welcome Back to AI LeadSync Pro";
    subheadline = "Ready to transform your lead management process? Your free trial is waiting.";
    ctaText = "Activate Your Trial";
  }

  const handleCtaClick = () => {
    // Track CTA click
    trackEvent(
      'campaign_landing',
      'cta_click',
      `${source}/${medium}/${campaign}`,
      1
    );
  };

  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {headline}
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                {subheadline}
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Work Email"
                  type="email"
                  required
                />
                <Link to="/signup" onClick={handleCtaClick}>
                  <Button className="w-full" size="lg">
                    {ctaText}
                  </Button>
                </Link>
              </form>
              <p className="text-xs text-muted-foreground text-center">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI Lead Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Automatically identify your most promising leads with uncanny accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Auto-Response System</h3>
              <p className="text-sm text-muted-foreground">
                Craft contextually relevant messages that feel personal, not automated.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.62a1.93 1.93 0 0 0 .97 1.68l3.65 1.89" />
                  <path d="m22 17.92-3.37-1.75a1.77 1.77 0 0 0-1.63 0l-4.72 2.45a1.77 1.77 0 0 1-1.63 0l-3.28-1.7a1.77 1.77 0 0 0-1.63 0L2 18.54" />
                  <path d="M14.92 8.92 18.4 7.6a1.77 1.77 0 0 0 0-3.2l-4.42-2.3a1.77 1.77 0 0 0-1.63 0l-4.42 2.3a1.77 1.77 0 0 0 0 3.2l3.48 1.81" />
                  <path d="m8.24 22 4.72-2.45a1.77 1.77 0 0 1 1.63 0l4.74 2.45" />
                  <path d="M18.86 15.5 12.1 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Dynamic Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Calculate optimal pricing based on lead quality and business rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Lead Management?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of growing businesses already using AI LeadSync Pro to convert more leads with less effort.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup" onClick={handleCtaClick}>
                <Button size="lg">{ctaText}</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Schedule a Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
