import { LegalPageLayout } from "@/components/ui-new/LegalPageLayout"
import { aboutContent } from "@/lib/legal/about"

export const metadata = {
  title: "About Us | SpoonTech",
  description: "Learn about SpoonTech's mission, vision, and core values.",
}

export default function AboutPage() {
  return <LegalPageLayout content={aboutContent} />
}
