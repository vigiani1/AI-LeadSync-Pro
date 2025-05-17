// SEO optimization utilities for AI LeadSync Pro website

// Define types for SEO-related data
interface MetaTagOptions {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

interface CampaignUrlOptions {
  baseUrl?: string;
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
}

interface SocialMediaTagsData {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  twitterCard?: string;
}

// Declare global window properties for analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Meta tag generator for consistent SEO across pages
export function generateMetaTags({
  title,
  description,
  keywords,
  ogImage = "/images/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image"
}: MetaTagOptions): { title: string; url: string } {
  // Base URL for canonical and OG URLs
  const baseUrl = "https://aileadsyncpro.com";
  const currentPath = window.location.pathname;
  const canonicalUrl = `${baseUrl}${currentPath}`;
  
  // Update document title
  document.title = `${title} | AI LeadSync Pro`;
  
  // Update meta tags
  const metaTags: Record<string, string> = {
    description: description,
    keywords: keywords,
    "og:title": `${title} | AI LeadSync Pro`,
    "og:description": description,
    "og:image": `${baseUrl}${ogImage}`,
    "og:url": canonicalUrl,
    "og:type": ogType,
    "twitter:card": twitterCard,
    "twitter:title": `${title} | AI LeadSync Pro`,
    "twitter:description": description,
    "twitter:image": `${baseUrl}${ogImage}`
  };
  
  // Update or create meta tags
  Object.entries(metaTags).forEach(([name, content]) => {
    let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  });
  
  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);
  
  return {
    title: `${title} | AI LeadSync Pro`,
    url: canonicalUrl
  };
}

// Schema.org structured data generator for rich results
export function generateStructuredData(pageType: string): Record<string, any> {
  const baseData = {
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
  
  // Page-specific structured data
  const pageData: Record<string, any> = {
    home: {
      "@type": "WebSite",
      "name": "AI LeadSync Pro | AI-Powered Lead Management Platform",
      "description": "Transform your leads into loyal customers with AI LeadSync Pro. Our platform streamlines your entire lead engagement pipeline—from scoring to contract—so you can focus on closing deals.",
      "url": "https://aileadsyncpro.com"
    },
    product: {
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
    },
    pricing: {
      "@type": "Product",
      "name": "AI LeadSync Pro",
      "description": "AI-powered lead management platform with lead scoring, auto-response, dynamic pricing, and contract automation.",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "99",
        "highPrice": "499",
        "priceCurrency": "USD",
        "offerCount": "3"
      }
    },
    blog: {
      "@type": "Blog",
      "name": "AI LeadSync Pro Blog",
      "description": "Insights, tips, and best practices for optimizing your lead management process."
    },
    contact: {
      "@type": "ContactPage",
      "name": "Contact AI LeadSync Pro",
      "description": "Get in touch with our team to learn more about AI LeadSync Pro."
    }
  };
  
  // Combine base data with page-specific data
  const structuredData = pageData[pageType] ? { ...baseData, ...pageData[pageType] } : baseData;
  
  // Add structured data to page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  return structuredData;
}

// Campaign URL generator with UTM parameters
export function generateCampaignUrl({
  baseUrl = "https://aileadsyncpro.com",
  source,
  medium,
  campaign,
  content,
  term
}: CampaignUrlOptions): string {
  const url = new URL(baseUrl);
  
  // Add UTM parameters
  if (source) url.searchParams.append('utm_source', source);
  if (medium) url.searchParams.append('utm_medium', medium);
  if (campaign) url.searchParams.append('utm_campaign', campaign);
  if (content) url.searchParams.append('utm_content', content);
  if (term) url.searchParams.append('utm_term', term);
  
  return url.toString();
}

// Pre-configured campaign URLs for marketing
export const marketingCampaigns = {
  googleAds: {
    leadGeneration: generateCampaignUrl({
      source: "google",
      medium: "cpc",
      campaign: "lead_management_2025",
      content: "lead_scoring"
    }),
    brandAwareness: generateCampaignUrl({
      source: "google",
      medium: "cpc",
      campaign: "brand_awareness_2025",
      content: "homepage"
    })
  },
  socialMedia: {
    facebook: generateCampaignUrl({
      source: "facebook",
      medium: "social",
      campaign: "ai_sales_tools",
      content: "video_ad"
    }),
    linkedin: generateCampaignUrl({
      source: "linkedin",
      medium: "social",
      campaign: "b2b_saas_leaders",
      content: "case_study"
    }),
    twitter: generateCampaignUrl({
      source: "twitter",
      medium: "social",
      campaign: "thought_leadership",
      content: "blog_promotion"
    })
  },
  email: {
    newsletter: generateCampaignUrl({
      source: "email",
      medium: "newsletter",
      campaign: "monthly_update",
      content: "feature_announcement"
    }),
    drip: generateCampaignUrl({
      source: "email",
      medium: "drip",
      campaign: "nurture_sequence",
      content: "day3_benefits"
    })
  },
  partner: {
    hubspot: generateCampaignUrl({
      source: "partner",
      medium: "referral",
      campaign: "integration_partners",
      content: "hubspot"
    }),
    zapier: generateCampaignUrl({
      source: "partner",
      medium: "referral",
      campaign: "integration_partners",
      content: "zapier"
    })
  }
};

// Analytics event tracking helper
export function trackEvent(
  category: string, 
  action: string, 
  label?: string, 
  value?: number
): Record<string, any> {
  // Check if Google Analytics exists
  if (window.gtag) {
    window.gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  }
  
  // This could be expanded to support other analytics platforms
  
  // Log event for debugging
  console.log(`Event tracked: ${category} - ${action} - ${label} - ${value}`);
  
  return {
    category,
    action,
    label,
    value,
    timestamp: new Date().toISOString()
  };
}

// SEO-friendly URL slug generator
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Initialize Google Analytics
export function initializeAnalytics(measurementId: string): { 
  trackEvent: typeof trackEvent; 
  measurementId: string;
} {
  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);
  
  // Make gtag available globally
  window.gtag = gtag;
  
  return {
    trackEvent,
    measurementId
  };
}

// Helper to add hreflang tags for international SEO
export function addHreflangTags(languages: Array<{ code: string; url: string }>): void {
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang.code;
    link.href = lang.url;
    document.head.appendChild(link);
  });
}

// Generate SEO-optimized page title
export function generatePageTitle(title: string, includeCompanyName = true): string {
  const companyName = "AI LeadSync Pro";
  return includeCompanyName ? `${title} | ${companyName}` : title;
}

// Add social media meta tags
export function addSocialMediaTags(data: SocialMediaTagsData): void {
  // Facebook Open Graph
  const ogTags: Record<string, string> = {
    "og:title": data.title,
    "og:description": data.description,
    "og:image": data.image,
    "og:url": data.url,
    "og:type": data.type || "website",
    "og:site_name": "AI LeadSync Pro"
  };
  
  // Twitter Card
  const twitterTags: Record<string, string> = {
    "twitter:card": data.twitterCard || "summary_large_image",
    "twitter:title": data.title,
    "twitter:description": data.description,
    "twitter:image": data.image,
    "twitter:site": "@aileadsyncpro"
  };
  
  // Add all tags
  const allTags = { ...ogTags, ...twitterTags };
  
  Object.entries(allTags).forEach(([name, content]) => {
    if (!content) return;
    
    const meta = document.createElement('meta');
    if (name.startsWith('og:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  });
}
