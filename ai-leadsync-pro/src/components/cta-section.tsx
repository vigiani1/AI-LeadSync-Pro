import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Lead Management?</h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of growing businesses already using AI LeadSync Pro to convert more leads with less effort.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">Start Your Free Trial</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-foreground/10">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
