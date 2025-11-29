import { Layers, Brain, Focus, Sparkles, BarChart3, Repeat } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Unified Command Center",
    description:
      "All tasks, notes, and goals in one view. No more switching between apps or losing track of what matters.",
  },
  {
    icon: Brain,
    title: "AI Planning Copilot",
    description: "Generate weekly plans based on your energy levels and priorities. Let AI handle the scheduling.",
  },
  {
    icon: Focus,
    title: "Deep Focus Mode",
    description: "Sessions with time blocking, distraction tracking, and reflection. Build momentum that compounds.",
  },
  {
    icon: Sparkles,
    title: "Smart Capture",
    description: "Capture ideas, tasks, and notes instantly. FluxMind automatically categorizes and connects them.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Visual insights into your productivity patterns. Understand when you're at your best.",
  },
  {
    icon: Repeat,
    title: "Habit Streaks",
    description: "Build consistency with streak tracking and gentle reminders. Never break the chain.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything You Need to Run Your Life Like a Pro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful features designed to help ambitious people organize their chaos and achieve more with less stress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-500 hover:ring-1 hover:ring-cyan-500/40"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
