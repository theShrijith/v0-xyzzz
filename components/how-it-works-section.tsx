"use client"

import { useState } from "react"
import { Inbox, Cpu, Rocket } from "lucide-react"

const steps = [
  {
    icon: Inbox,
    step: "01",
    title: "Capture everything",
    description:
      "Tasks, ideas, notes, and goals in one click. Use quick capture from anywhere—mobile, desktop, or browser extension.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Let the AI organize",
    description: "FluxMind groups and prioritizes automatically based on your goals, deadlines, and energy patterns.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute with clarity",
    description: "Daily focus views, reflective summaries, and streak tracking keep you moving forward with purpose.",
  },
]

export function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">How FluxMind OS Works</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Three simple steps to transform your productivity system.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-cyan-500 via-primary/50 to-transparent" />
              )}

              <div
                className={`text-center transition-all duration-300 ease-out ${
                  hoveredIndex !== null && hoveredIndex !== index ? "opacity-50" : "opacity-100"
                }`}
              >
                {/* Step number and icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-card border flex items-center justify-center transition-all duration-300 ease-out ${
                      hoveredIndex === index
                        ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                        : "border-border"
                    }`}
                  >
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
