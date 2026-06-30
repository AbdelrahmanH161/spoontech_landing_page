"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()

  const navKeys = ["features", "solutions", "pricing", "resources"] as const
  const navLabels = [
    t.nav.features,
    t.nav.solutions,
    t.nav.pricing,
    t.nav.resources,
  ]
  const navAnchors = ["features", "solutions", "pricing", "resources"]

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en")

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 px-6 py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-6 py-3 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SpoonTech Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            SpoonTech
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLabels.map((label, i) => (
            <a
              key={navKeys[i]}
              href={`#${navAnchors[i]}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle — desktop */}
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="hidden items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-border hover:text-foreground md:flex"
          >
            <Globe size={13} />
            {language === "en" ? "العربية" : "English"}
          </button>

          {/* <Button variant="ghost" className="hidden md:flex text-sm font-medium">
            {t.nav.login}
          </Button>
          <Button className="bg-st-primary hover:bg-st-primary-hover text-white rounded-xl shadow-lg shadow-st-primary/20 transition-all text-sm">
            {t.nav.startTrial}
          </Button> */}

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1 rounded-full border border-border/60 px-2 py-1.5 text-xs font-semibold text-muted-foreground"
            >
              <Globe size={13} />
              {language === "en" ? "ع" : "EN"}
            </button>
            <Button variant="ghost" size="icon">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
