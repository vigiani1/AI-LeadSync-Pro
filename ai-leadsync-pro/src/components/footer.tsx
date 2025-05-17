import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/primary_logo.png" alt="AI LeadSync Pro" className="h-8" />
            </Link>
            <p className="text-sm text-gray-500">
              Transform your leads into loyal customers with AI-powered precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/aileadsyncpro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/company/aileadsyncpro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/aileadsyncpro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-gray-500 hover:text-primary">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-500 hover:text-primary">Pricing</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-500 hover:text-primary">Integrations</Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-500 hover:text-primary">Roadmap</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-500 hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary">Terms of Service</Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-500 hover:text-primary">Security</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2025 AI LeadSync Pro. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/signup">
              <Button>Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
