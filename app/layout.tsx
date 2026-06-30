import { Geist, Geist_Mono, Cairo } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://spoontech.io"),
  title: "SpoonTech | The Future of Restaurant Management",
  description: "An all-in-one POS and operations platform built for the modern F&B industry. From QR-first ordering to AI forecasting.",
  openGraph: {
    title: "SpoonTech | Restaurant Management Software",
    description: "AI-powered F&B management for smarter, faster operations.",
    url: "https://spoontech.io",
    siteName: "SpoonTech",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontMono.variable, "font-sans", geist.variable, cairo.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
