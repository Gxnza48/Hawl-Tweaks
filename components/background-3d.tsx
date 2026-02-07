"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function Particles() {
    const ref = useRef<THREE.Points>(null)
    const [sphere] = useState(() => {
        const data = new Float32Array(5000 * 3)
        for (let i = 0; i < 5000; i++) {
            const r = 5
            const theta = 2 * Math.PI * Math.random()
            const phi = Math.acos(2 * Math.random() - 1)
            data[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            data[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            data[i * 3 + 2] = r * Math.cos(phi)
        }
        return data
    })

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ff4d00"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export function Background3D() {
    return (
        <div className="fixed inset-0 z-0 bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1.5] }}>
                <Particles />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </div>
    )
}
