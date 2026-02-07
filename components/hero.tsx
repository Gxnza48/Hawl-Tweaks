"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"
import gsap from "gsap"

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1 1h10.5v10.5H1V1zm11.5 0H23v10.5H12.5V1zM1 12.5h10.5V23H1V12.5zm11.5 0H23V23H12.5V12.5z" />
  </svg>
)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })

    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5 })
      .fromTo(logoRef.current, { opacity: 0, scale: 0.8, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)" }, "-=0.8")
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=1")
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=1")
      .fromTo(ctaRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.8")

    // Interactive logo tilt
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(logoRef.current, {
        rotationY: xPos,
        rotationX: -yPos,
        duration: 1,
        ease: "power2.out"
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden perspective-1000">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-md px-4 py-1.5 opacity-0">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-muted-foreground font-mono tracking-wide">
            2026 Edition
          </span>
        </div>

        {/* Brand Logo */}
        <div ref={logoRef} className="mb-4 select-none opacity-0 will-change-transform">
          <h2 className="font-display text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic bg-gradient-to-b from-[#ff4d00] to-[#ff9500] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,75,0,0.3)] leading-none">
            HAWL
          </h2>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground text-balance leading-[1.05] opacity-0">
          Beyond <span className="text-primary italic">Performance.</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance opacity-0">
          The definitive low-latency & input-lag toolkit for Fortnite and
          competitive gaming.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-4 opacity-0">
          <a
            href="https://download1589.mediafire.com/g5aotvju7eigMl-LW7ZJ4pR_xYfvibyvEu7jls2aWHWtnCsxtK2uITXkGS2od0J5fi-ALaOtbqbuz1BnTQC_ouJNtyn_2W_z3ygdj_LBp2iwPh_Oqf_dm6hGBPjwWOejeQWHCv7709cyuEcdWptH85sB4dfbA6kCC5faPuuze3IE/xso7mchwzogzqyi/HawlTweaks.exe"
            className="group relative inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-xl font-bold text-primary-foreground transition-all hover:scale-[1.05] hover:brightness-110 active:scale-[0.98] overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <WindowsIcon className="h-7 w-7" />
            Download
            <Download className="h-6 w-6" />
          </a>
        </div>

        {/* Small text */}
        <p className="text-sm text-muted-foreground mt-4">
          Portable. Reversible. 100% Safe.
        </p>
      </div>
    </section>
  )
}
