"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const players = [
    { name: "Peterbot", img: "https://specs.gg/assets/include/upload/image.php?name=Peterbot&t=2026-02-01%2012:44:36" },
    { name: "k1ng", img: "https://specs.gg/assets/include/upload/image.php?name=k1nG" },
    { name: "pollo", img: "https://specs.gg/assets/include/upload/image.php?name=pollo" },
    { name: "Fazer", img: "https://specs.gg/assets/include/upload/image.php?name=Fazer" },
    { name: "Tisco", img: "https://specs.gg/assets/include/upload/image.php?name=Tisco" },
    { name: "VicterV", img: "https://specs.gg/assets/include/upload/image.php?name=VicterV&t=2026-02-07%2019:30:54" },
]

export function ProPlayers() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cards = cardsRef.current?.children
        if (!cards) return

        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        )
    }, [])

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 px-6">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-foreground uppercase italic">
                        Trusted by the <span className="text-primary">Elite.</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        The world's best competitive players rely on HawlTweaks for every single millisecond of advantage.
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                >
                    {players.map((player) => (
                        <div
                            key={player.name}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-card transition-all hover:border-primary/20"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0">
                                <img
                                    src={player.img}
                                    alt={player.name}
                                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Spotlight effect on hover */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    style={{
                                        background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
                                    }}
                                />
                            </div>

                            {/* Player Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="flex items-end justify-between">
                                    <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                                        <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-1">
                                            Pro Player
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-display font-black text-white italic tracking-tighter uppercase">
                                            {player.name}
                                        </h3>
                                    </div>

                                    <div className="h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-12" />
                                </div>
                            </div>

                            {/* Glow Border */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-primary/40 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
