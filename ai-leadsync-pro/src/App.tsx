import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import IntegrationSection from "@/components/integration-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FeaturesPage from "@/pages/features"
import PricingPage from "@/pages/pricing"
import AboutPage from "@/pages/about"
import BlogPage from "@/pages/blog"
import ContactPage from "@/pages/contact"
import LoginPage from "@/pages/login"
import SignupPage from "@/pages/signup"
import { 
  IntegrationsPage, 
  RoadmapPage, 
  CareersPage, 
  PrivacyPage, 
  TermsPage, 
  SecurityPage 
} from "@/pages/placeholder-pages"

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={
            <main className="flex-1">
              <HeroSection />
              <FeaturesSection />
              <HowItWorksSection />
              <TestimonialsSection />
              <IntegrationSection />
              <CTASection />
            </main>
          } />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={
            isLoggedIn ? 
            <Navigate to="/dashboard" /> : 
            <LoginPage onLogin={handleLogin} />
          } />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Placeholder routes for footer links */}
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          
          {/* Dashboard placeholder - would be protected in a real app */}
          <Route path="/dashboard" element={
            isLoggedIn ? 
            <div className="container py-20">
              <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
              <p className="mt-4">This is a placeholder for the user dashboard.</p>
              <Button onClick={handleLogout} className="mt-4">Log out</Button>
            </div> : 
            <Navigate to="/login" />
          } />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={
            <div className="container py-20 text-center">
              <h1 className="text-3xl font-bold">Page Not Found</h1>
              <p className="mt-4">The page you're looking for doesn't exist.</p>
              <Link to="/" className="mt-4 inline-block">
                <Button onClick={() => {}} className="">Return Home</Button>
              </Link>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

// Button component for the dashboard page
function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}

// Link component for the 404 page
function Link({ to, children, className = "" }: LinkProps) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
