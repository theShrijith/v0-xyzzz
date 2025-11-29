import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { DashboardMockup } from "@/components/dashboard-mockup"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent animate-gradient opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Turn Your Chaos into a <span className="text-primary">Clarity-Driven</span> Life OS
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              FluxMind OS connects your tasks, goals, notes, and learning into a single AI-powered workspace. Designed
              for people who refuse to be average.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground gap-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-primary/90"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border text-foreground bg-transparent transition-all duration-300 ease-out hover:border-cyan-400 hover:text-cyan-300"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicator */}
            <p className="mt-8 text-sm text-muted-foreground">
              Trusted by founders, creators, and high-performers worldwide.
            </p>
          </div>

          <div className="relative animate-float">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
