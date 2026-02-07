"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function SpotlightCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: "power3.out",
            })
        }

        window.addEventListener("mousemove", onMouseMove)
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [])

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 select-none"
            style={{
                background: "radial-gradient(circle, rgba(255,75,0,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
            }}
        />
    )
}
