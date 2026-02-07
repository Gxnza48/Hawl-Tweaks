import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProPlayers } from "@/components/pro-players"
import { ProductPreview } from "@/components/product-preview"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Top edge glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 h-px z-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,0,0.4), transparent)",
        }}
      />

      <Hero />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border/50" />
      </div>

      <Features />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border/50" />
      </div>

      <ProPlayers />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border/50" />
      </div>

      <ProductPreview />

      <Footer />
    </main>
  )
}
