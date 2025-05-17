import { Button } from "@/components/ui/button"

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AI LeadSync Pro simplifies your lead management process in four easy steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Connect Your Lead Sources</h3>
            <p className="text-center text-sm text-muted-foreground">
              Seamlessly integrate with HubSpot, web forms, or Zapier to bring all your leads into one centralized platform.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Let AI Score and Prioritize</h3>
            <p className="text-center text-sm text-muted-foreground">
              Our AI engine automatically evaluates each lead, assigning quality scores and prioritizing your sales pipeline.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Engage with Smart Automation</h3>
            <p className="text-center text-sm text-muted-foreground">
              Deploy intelligent responses across channels, with the perfect message at the perfect time.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              4
            </div>
            <h3 className="text-xl font-bold">Close Deals Effortlessly</h3>
            <p className="text-center text-sm text-muted-foreground">
              Generate custom-tailored proposals and contracts with a single click, then track the entire signing process.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="outline">Schedule a Demo</Button>
        </div>
      </div>
    </section>
  )
}
