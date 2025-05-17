import { Button } from "@/components/ui/button"

export default function IntegrationSection() {
  const integrations = [
    { name: "HubSpot", logo: "/images/hubspot-logo.png" },
    { name: "Zapier", logo: "/images/zapier-logo.png" },
    { name: "Twilio", logo: "/images/twilio-logo.png" },
    { name: "SendGrid", logo: "/images/sendgrid-logo.png" },
    { name: "DocuSign", logo: "/images/docusign-logo.png" },
    { name: "Stripe", logo: "/images/stripe-logo.png" },
    { name: "Auth0", logo: "/images/auth0-logo.png" },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Integration Partners</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Seamlessly connects with the tools you already use
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-7">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-background p-4 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  {integration.name}
                </div>
              </div>
              <p className="text-sm font-medium">{integration.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="outline">View All Integrations</Button>
        </div>
      </div>
    </section>
  )
}
