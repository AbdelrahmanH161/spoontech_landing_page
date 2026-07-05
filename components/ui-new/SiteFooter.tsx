"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer

  const footerColumns = [
    { heading: f.company, links: f.companyLinks },
    { heading: f.legal, links: f.legalLinks },
  ]

  return (
    <footer className="relative overflow-hidden bg-foreground px-6 pt-24 pb-8 text-background">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-full max-w-3xl -translate-x-1/2 rounded-full bg-st-primary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CTA */}
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-4xl font-bold tracking-tight md:text-6xl"
          >
            {f.cta}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              size="lg"
              onClick={() => {
                window.location.href = "https://cp.spoontech.net/sign-in"
              }}
              className="h-14 rounded-2xl bg-st-primary px-10 text-lg text-white shadow-xl shadow-st-primary/20 hover:bg-st-primary-hover"
            >
              {f.ctaBtn}
            </Button>
          </motion.div>
        </div>

        {/* Footer Links Grid */}
        <div className="mb-16 grid grid-cols-2 gap-12 border-t border-border/10 pt-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SpoonTech Logo"
                className="h-8 w-8 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tight">
                SpoonTech
              </span>
            </div>
            <p className="max-w-xs leading-relaxed text-muted-foreground">
              {f.tagline}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-6 font-semibold">{col.heading}</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-st-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between border-t border-border/10 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>{f.copyright}</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              {f.twitter}
            </a>
            <a href="#" className="transition-colors hover:text-white">
              {f.linkedin}
            </a>
            <a href="#" className="transition-colors hover:text-white">
              {f.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
