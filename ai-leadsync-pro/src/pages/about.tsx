import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About AI LeadSync Pro
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Transforming lead management with artificial intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At AI LeadSync Pro, we're on a mission to revolutionize how businesses handle their sales leads. We believe that every business, regardless of size, deserves access to enterprise-grade AI tools that can transform their lead management process.
              </p>
              <p className="text-muted-foreground">
                Our platform was built with a singular focus: to help businesses convert more leads with less effort. By combining cutting-edge AI technology with intuitive design, we've created a solution that streamlines the entire lead engagement pipeline—from scoring to contract—so you can focus on closing deals, not managing data.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                AI LeadSync Pro was founded in 2023 by a team of sales professionals and AI engineers who were frustrated with the limitations of existing lead management tools. After years of watching sales teams waste time on low-quality leads and manual processes, we decided to build the solution we wished we had.
              </p>
              <p className="text-muted-foreground">
                What started as an internal tool quickly gained attention from other businesses facing similar challenges. Today, AI LeadSync Pro serves hundreds of growing companies across industries, helping them optimize their lead management processes and close more deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
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
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We're constantly pushing the boundaries of what's possible with AI in sales and lead management.
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customer Success</h3>
              <p className="text-sm text-muted-foreground">
                Your success is our success. We're committed to helping you achieve your sales goals.
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Trust & Security</h3>
              <p className="text-sm text-muted-foreground">
                We take the security of your data seriously and are committed to being a trustworthy partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the people behind AI LeadSync Pro
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
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
                  className="h-full w-full text-muted-foreground/20"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
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
                  className="h-full w-full text-muted-foreground/20"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
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
                  className="h-full w-full text-muted-foreground/20"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Alex Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Head of Product</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our mission
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/contact">
                <Button size="lg">View Open Positions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
