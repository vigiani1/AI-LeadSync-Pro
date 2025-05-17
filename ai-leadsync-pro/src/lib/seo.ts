// This file contains SEO metadata and optimization utilities for the AI LeadSync Pro website

// Meta tags for the homepage
export const homePageMeta = {
  title: "AI LeadSync Pro | AI-Powered Lead Management Platform",
  description: "Transform your leads into loyal customers with AI LeadSync Pro. Our platform streamlines your entire lead engagement pipeline—from scoring to contract—so you can focus on closing deals.",
  keywords: "AI lead management, lead scoring, sales automation, AI sales platform, lead conversion, contract automation, dynamic pricing",
  canonicalUrl: "https://aileadsyncpro.com",
  ogTitle: "AI LeadSync Pro | Transform Your Lead Management with AI",
  ogDescription: "AI-powered lead scoring, automated responses, dynamic pricing, and contract generation in one seamless platform.",
  ogImage: "/images/og-image.png",
  twitterTitle: "AI LeadSync Pro | AI-Powered Lead Management",
  twitterDescription: "Convert more leads with less effort using our AI-powered platform.",
  twitterImage: "/images/twitter-image.png"
};

// Meta tags for the features page
export const featuresPageMeta = {
  title: "Features | AI LeadSync Pro",
  description: "Explore AI LeadSync Pro's powerful features: AI lead scoring, intelligent responses, dynamic pricing, and automated contract generation.",
  keywords: "AI lead scoring, automated responses, dynamic pricing, contract automation, lead management features",
  canonicalUrl: "https://aileadsyncpro.com/features",
  ogTitle: "AI LeadSync Pro Features | Intelligent Lead Management",
  ogDescription: "Discover how our AI-powered features can transform your lead management process.",
  ogImage: "/images/features-og-image.png",
  twitterTitle: "AI LeadSync Pro Features",
  twitterDescription: "AI-powered tools to streamline your entire lead engagement pipeline.",
  twitterImage: "/images/features-twitter-image.png"
};

// Meta tags for the pricing page
export const pricingPageMeta = {
  title: "Pricing | AI LeadSync Pro",
  description: "Choose the perfect AI LeadSync Pro plan for your business. Flexible pricing options for businesses of all sizes.",
  keywords: "AI lead management pricing, sales automation cost, lead scoring software pricing, SaaS pricing",
  canonicalUrl: "https://aileadsyncpro.com/pricing",
  ogTitle: "AI LeadSync Pro Pricing | Plans for Every Business",
  ogDescription: "Affordable plans designed to help businesses of all sizes convert more leads with less effort.",
  ogImage: "/images/pricing-og-image.png",
  twitterTitle: "AI LeadSync Pro Pricing Plans",
  twitterDescription: "Find the perfect plan for your business needs.",
  twitterImage: "/images/pricing-twitter-image.png"
};

// Structured data for the homepage (JSON-LD)
export const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI LeadSync Pro",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "527"
  },
  "description": "AI LeadSync Pro is a SaaS platform that uses AI to score incoming sales leads, auto-respond across communication channels, calculate dynamic pricing, and automate contract generation."
};

// Structured data for organization (JSON-LD)
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI LeadSync Pro",
  "url": "https://aileadsyncpro.com",
  "logo": "https://aileadsyncpro.com/images/primary_logo.png",
  "sameAs": [
    "https://twitter.com/aileadsyncpro",
    "https://www.facebook.com/aileadsyncpro",
    "https://www.linkedin.com/company/aileadsyncpro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
};

// Helper function to generate SEO-friendly URLs
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Helper function to add structured data to a page
export function addStructuredData(data: Record<string, any>): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// Campaign UTM parameter generator
export function generateUTMUrl(baseUrl: string, source: string, medium: string, campaign: string, content?: string) {
  const url = new URL(baseUrl);
  url.searchParams.append('utm_source', source);
  url.searchParams.append('utm_medium', medium);
  url.searchParams.append('utm_campaign', campaign);
  if (content) {
    url.searchParams.append('utm_content', content);
  }
  return url.toString();
}

// Sample campaign URLs for marketing
export const marketingCampaigns = {
  googleAds: generateUTMUrl('https://aileadsyncpro.com', 'google', 'cpc', 'lead_management_2025', 'homepage'),
  facebookAds: generateUTMUrl('https://aileadsyncpro.com', 'facebook', 'social', 'ai_sales_tools', 'homepage'),
  emailNewsletter: generateUTMUrl('https://aileadsyncpro.com', 'email', 'newsletter', 'monthly_update', 'homepage'),
  linkedInSponsored: generateUTMUrl('https://aileadsyncpro.com', 'linkedin', 'social', 'b2b_saas_leaders', 'homepage'),
  partnerReferral: generateUTMUrl('https://aileadsyncpro.com', 'partner', 'referral', 'integration_partners', 'homepage')
};

// SEO-optimized content snippets for key pages
export const seoContentSnippets = {
  homeHero: "Transform your leads into loyal customers with AI-powered precision. AI LeadSync Pro streamlines your entire lead engagement pipeline—from scoring to contract—so you can focus on closing deals, not managing data.",
  featuresIntro: "AI LeadSync Pro's powerful features help businesses of all sizes convert more leads with less effort. Our AI-powered platform automates lead scoring, response management, pricing optimization, and contract generation.",
  pricingIntro: "Choose the perfect AI LeadSync Pro plan for your business. Our flexible pricing options are designed to help businesses of all sizes harness the power of AI for lead management.",
  aboutIntro: "AI LeadSync Pro was born from a simple observation: sales teams spend too much time managing leads and not enough time closing deals. Our mission is to help businesses harness the power of AI to create more efficient, effective, and profitable sales operations."
};
