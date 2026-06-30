"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-40 pb-20">
      {/* Abstract Background Shapes */}
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-12 rounded-full bg-st-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-st-light/30 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-st-primary/20 bg-st-light px-3 py-1.5 text-xs font-semibold tracking-wider text-st-primary-hover uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-st-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-st-primary"></span>
            </span>
            {h.badge}
          </div>

          <h1 className="mb-6 text-5xl leading-[1.1] font-bold tracking-tight text-foreground lg:text-7xl">
            {h.headline1} <br />
            <span className="bg-gradient-to-r from-st-primary to-st-primary-hover bg-clip-text text-transparent">
              {h.headline2}
            </span>
            <br />
            {h.headline3}
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {h.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 gap-2 rounded-xl bg-st-primary px-8 text-base text-white shadow-xl shadow-st-primary/20 transition-all hover:bg-st-primary-hover"
            >
              {h.cta} <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 gap-2 rounded-xl border-border px-8 text-base hover:bg-secondary"
            >
              <PlayCircle size={18} className="text-st-primary" /> {h.watchDemo}
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex w-full items-center justify-center lg:h-[600px]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl lg:aspect-auto lg:h-full">
            <img
              src="/hero_pos_ui.jpeg"
              alt="SpoonTech Platform"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-border/50 bg-background/80 p-6 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-st-primary/10 text-xl font-bold text-st-primary">
                  +40%
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {h.statTitle}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {h.statDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
