"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export function ProductPreview() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        })

        tl.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
            .fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.95, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.4"
            )
    }, [])

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div ref={contentRef} className="mb-16 text-center opacity-0">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-foreground uppercase italic leading-none">
                        Minimal. <span className="text-primary">Powerful.</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        A clean, performance-first interface designed to give you full control over your system's output. No bloat, just power.
                    </p>
                </div>

                <div
                    ref={imageRef}
                    className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-secondary/20 p-2 md:p-4 shadow-2xl backdrop-blur-sm opacity-0 group overflow-hidden"
                >
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

                    <div className="relative rounded-2xl overflow-hidden border border-white/5">
                        <Image
                            src="/interface-preview.png"
                            alt="HawlTweaks Interface"
                            width={1920}
                            height={1080}
                            className="w-full h-auto brightness-90 group-hover:brightness-100 transition-all duration-700"
                        />

                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-[0.03]" />
                    </div>

                    {/* Glass Reflection */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30" />
                </div>
            </div>
        </section>
    )
}
