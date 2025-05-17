import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Leads into Loyal Customers with AI-Powered Precision
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                AI LeadSync Pro streamlines your entire lead engagement pipeline—from scoring to contract—so you can focus on closing deals, not managing data.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started Free</Button>
              <Button size="lg" variant="outline">See How It Works</Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
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
                  className="mr-1 h-4 w-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Trusted by 500+ growing businesses</span>
              </div>
              <div className="flex items-center">
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
                  className="mr-1 h-4 w-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>30-day free trial, no credit card required</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
              <img
                src="/images/hero-dashboard.png"
                alt="AI LeadSync Pro Dashboard"
                className="object-cover w-full h-full rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
