import { CheckCircle2, Calendar, Brain, Target, Zap } from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />

      <div className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">FluxMind OS Dashboard</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {/* Tasks Card */}
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Today&apos;s Tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border border-primary bg-primary/20" />
                <span className="text-xs text-muted-foreground">Review Q4 goals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border border-border" />
                <span className="text-xs text-muted-foreground">Team sync call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border border-border" />
                <span className="text-xs text-muted-foreground">Ship feature v2</span>
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Schedule</span>
            </div>
            <div className="space-y-2">
              <div className="bg-primary/10 rounded-lg p-2">
                <span className="text-xs text-primary font-medium">9:00 AM</span>
                <p className="text-xs text-muted-foreground">Deep Work Block</p>
              </div>
              <div className="bg-secondary rounded-lg p-2">
                <span className="text-xs text-muted-foreground font-medium">2:00 PM</span>
                <p className="text-xs text-muted-foreground">Strategy Review</p>
              </div>
            </div>
          </div>

          {/* AI Suggestions Card */}
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">AI Suggestions</span>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-2">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">Tip:</span> Schedule creative tasks for morning based on your energy
                patterns.
              </p>
            </div>
          </div>

          {/* Goals Card */}
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Goals</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Launch MVP</span>
                  <span className="text-primary">78%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full">
                  <div className="h-full w-[78%] bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Mode Banner */}
        <div className="mt-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl p-3 flex items-center gap-3">
          <Zap className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs font-medium text-foreground">Focus Mode Available</p>
            <p className="text-xs text-muted-foreground">Start a 90-min deep work session</p>
          </div>
        </div>
      </div>
    </div>
  )
}
