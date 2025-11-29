import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "FluxMind OS completely changed how I manage my startup. I went from drowning in tasks to actually shipping features consistently.",
    name: "Sarah Chen",
    role: "Founder, EdTech Startup",
    rating: 5,
  },
  {
    quote:
      "As a product manager juggling multiple projects, this is the first tool that actually understands my workflow. The AI suggestions are scarily accurate.",
    name: "Marcus Rivera",
    role: "Senior Product Manager",
    rating: 5,
  },
  {
    quote:
      "Med school is chaos, but FluxMind helps me balance studying, rotations, and actually having a life. The focus mode is a game-changer.",
    name: "Priya Patel",
    role: "Medical Student",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Loved by Builders and High-Performers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join thousands of ambitious people who&apos;ve transformed their productivity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 ease-out hover:border-cyan-500/60 hover:bg-white/5 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
