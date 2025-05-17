import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

// Placeholder pages for footer links that don't have full implementations yet
export function IntegrationsPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Integrations
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Connect AI LeadSync Pro with your favorite tools
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/contact">
                <Button size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function RoadmapPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Product Roadmap
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See what's coming next for AI LeadSync Pro
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/contact">
                <Button size="lg">Request a Feature</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function CareersPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Careers
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join our team and help transform lead management with AI
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

export function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Privacy Policy
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                How we protect and manage your data
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function TermsPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Terms of Service
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Terms and conditions for using AI LeadSync Pro
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function SecurityPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Security
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                How we keep your data safe and secure
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
