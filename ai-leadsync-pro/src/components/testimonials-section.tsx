// Testimonials section component for AI LeadSync Pro website

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses that have transformed their lead management with AI LeadSync Pro
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "AI LeadSync Pro transformed our sales process. We've increased our close rate by 37% while our sales team handles 3x more leads without adding headcount."
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-muted"></div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">VP of Sales, TechGrowth Solutions</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "The AI lead scoring is uncanny. It consistently identifies our best opportunities, and the automated responses feel genuinely personal. Our customers have no idea they're talking to an AI."
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-muted"></div>
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-xs text-muted-foreground">Founder, Innovate Marketing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "The dynamic pricing engine alone paid for our subscription in the first month. We're now optimizing every deal for maximum revenue without sacrificing conversion."
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-muted"></div>
              <div>
                <p className="text-sm font-medium">David Rodriguez</p>
                <p className="text-xs text-muted-foreground">Sales Director, Enterprise Solutions Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
