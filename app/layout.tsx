import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrolling } from "@/components/smooth-scrolling"
import { Background3D } from "@/components/background-3d"
import { SpotlightCursor } from "@/components/spotlight-cursor"

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const outcrop = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Hawl Tweaks — 2026 Edition',
  description: 'The definitive low-latency & input-lag toolkit for Fortnite and competitive gaming. Portable. Reversible. 100% Safe.',
}

export const viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${outcrop.variable}`}>
      <body className="font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <Background3D />
            <SpotlightCursor />
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  )
}
