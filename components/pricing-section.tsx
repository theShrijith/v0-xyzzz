import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    subtitle: "For individuals just getting organized",
    price: "$0",
    period: "forever",
    features: ["Unlimited tasks & notes", "Basic AI suggestions", "Daily focus view", "Mobile app access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "For founders, creators, high-performers",
    price: "$15",
    period: "/month",
    features: [
      "Everything in Starter",
      "Advanced AI planning",
      "Deep focus sessions",
      "Goal tracking & analytics",
      "Priority support",
      "Integrations (Calendar, Notion, etc.)",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    subtitle: "For small teams or studios",
    price: "$29",
    period: "/user/month",
    features: [
      "Everything in Pro",
      "Team dashboards",
      "Shared goals & projects",
      "Admin controls",
      "SSO & advanced security",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Start free, upgrade only when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 transition-all duration-300 ease-out ${
                plan.highlighted
                  ? "scale-[1.02] border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent hover:scale-[1.05] hover:shadow-cyan-500/30 hover:ring-1 hover:ring-cyan-500/60"
                  : "border border-border hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full transition-all duration-300 ease-out ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
