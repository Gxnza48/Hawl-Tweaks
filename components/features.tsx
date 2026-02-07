"use client"

import { useEffect, useRef } from "react"
import { Zap, Cpu, ShieldCheck, Rocket } from "lucide-react"
import gsap from "gsap"

const features = [
  {
    icon: Zap,
    title: "Zero Latency",
    description:
      "TCP No Delay, Nagle's Algorithm disabled, and MMCSS optimizations to eliminate every millisecond of input lag.",
  },
  {
    icon: Cpu,
    title: "System Tuning",
    description:
      "Ultimate Power Plan activation, CPU priority boosting, and GPU scheduling tweaks for peak frame delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Clean",
    description:
      "100% reversible adjustments with zero game file modification. No bans, no risk, just raw performance.",
  },
  {
    icon: Rocket,
    title: "2026 Meta",
    description:
      "Built and tested for the latest Windows 11 builds and current Fortnite competitive updates.",
  },
]

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    })

    tl.fromTo(headerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="mb-20 text-center opacity-0">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground uppercase italic leading-none">
            Engineered for <span className="text-primary">Advantage.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Every tweak is battle-tested across thousands of competitive sessions by top-tier pros.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl border border-white/5 bg-secondary/30 p-8 md:p-10 transition-all hover:bg-secondary/50 hover:border-primary/20 opacity-0"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black text-foreground uppercase italic tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
