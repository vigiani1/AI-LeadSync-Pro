import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get in touch with our team to learn more about AI LeadSync Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about AI LeadSync Pro? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="space-y-1">
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div className="space-y-1">
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@aileadsyncpro.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="space-y-1">
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">123 Innovation Drive, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="h-32 w-full rounded-md border border-gray-300 p-2 text-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Schedule a Demo</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See AI LeadSync Pro in action with a personalized demo
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button size="lg">Book a Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
