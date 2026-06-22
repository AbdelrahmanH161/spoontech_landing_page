import { SiteHeader } from "@/components/ui-new/SiteHeader"
import { HeroSection } from "@/components/ui-new/HeroSection"
import { FeatureGrid } from "@/components/ui-new/FeatureGrid"
import { ImageShowcase } from "@/components/ui-new/ImageShowcase"
import { PricingSection } from "@/components/ui-new/PricingSection"
import { SiteFooter } from "@/components/ui-new/SiteFooter"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-st-primary/30">
      <SiteHeader />
      <HeroSection />
      <FeatureGrid />
      <ImageShowcase />
      <PricingSection />
      <SiteFooter />
    </main>
  )
}
