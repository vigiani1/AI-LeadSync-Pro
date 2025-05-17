import { useState } from "react"
import MainNav from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import type { NavItem } from "@/components/main-nav"
import { Link } from "react-router-dom"

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const items: NavItem[] = [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/primary_logo.png" alt="AI LeadSync Pro" className="h-8" />
          </Link>
          <nav className="hidden md:flex">
            <MainNav items={items} />
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button onClick={onLogout}>Log out</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
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
              className={mobileMenuOpen ? "hidden" : "block"}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
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
              className={mobileMenuOpen ? "block" : "hidden"}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="container py-4">
          <nav className="flex flex-col space-y-4">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
