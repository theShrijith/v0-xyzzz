"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-border p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Text */}
            <div className="lg:max-w-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">Not sure where to start?</h2>
              <p className="mt-2 text-muted-foreground">
                Get a personalized onboarding session with our team. We&apos;ll help you set up your perfect system.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground sm:w-64 transition-all duration-300 focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground gap-2 transition-all duration-300 ease-out hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Request a Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
