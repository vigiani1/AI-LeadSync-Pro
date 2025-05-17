import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI LeadSync Pro Blog
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Insights, tips, and best practices for optimizing your lead management
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">May 15, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">5 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">5 Ways AI is Transforming Lead Scoring</h3>
                <p className="mt-2 text-muted-foreground">
                  Discover how artificial intelligence is revolutionizing the way businesses qualify and prioritize their sales leads.
                </p>
                <div className="mt-4">
                  <Link to="/blog/ai-transforming-lead-scoring">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">May 8, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">7 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">The Psychology of Automated Responses</h3>
                <p className="mt-2 text-muted-foreground">
                  Learn how to craft AI-generated responses that feel personal and build trust with your prospects.
                </p>
                <div className="mt-4">
                  <Link to="/blog/psychology-automated-responses">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">May 1, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">4 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">Dynamic Pricing: Finding the Sweet Spot</h3>
                <p className="mt-2 text-muted-foreground">
                  How AI-powered dynamic pricing can help you maximize revenue without sacrificing customer satisfaction.
                </p>
                <div className="mt-4">
                  <Link to="/blog/dynamic-pricing-sweet-spot">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">April 24, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">6 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">Integrating AI LeadSync Pro with Your CRM</h3>
                <p className="mt-2 text-muted-foreground">
                  Step-by-step guide to seamlessly connecting AI LeadSync Pro with popular CRM platforms.
                </p>
                <div className="mt-4">
                  <Link to="/blog/integrating-with-crm">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">April 17, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">8 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">The Future of Contract Automation</h3>
                <p className="mt-2 text-muted-foreground">
                  Exploring how AI is streamlining the contract generation process and what's coming next.
                </p>
                <div className="mt-4">
                  <Link to="/blog/future-contract-automation">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-muted"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">April 10, 2025</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">5 min read</div>
                </div>
                <h3 className="mt-2 text-2xl font-bold">Case Study: How Company X Increased Conversions by 45%</h3>
                <p className="mt-2 text-muted-foreground">
                  Learn how a mid-sized B2B company transformed their lead management process with AI LeadSync Pro.
                </p>
                <div className="mt-4">
                  <Link to="/blog/case-study-company-x">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest insights and tips delivered straight to your inbox
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
