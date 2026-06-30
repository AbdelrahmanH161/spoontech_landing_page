"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer

  const footerColumns = [
    { heading: f.product, links: f.productLinks },
    { heading: f.company, links: f.companyLinks },
    { heading: f.legal, links: f.legalLinks },
  ]

  return (
    <footer className="bg-foreground text-background pt-24 pb-8 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-st-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
          >
            {f.cta}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button size="lg" className="h-14 px-10 text-lg bg-st-primary hover:bg-st-primary-hover text-white rounded-2xl shadow-xl shadow-st-primary/20">
              {f.ctaBtn}
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">{f.ctaNote}</p>
          </motion.div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 border-t border-border/10 pt-16 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SpoonTech Logo" className="w-8 h-8 object-contain brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight">SpoonTech</span>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">{f.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold mb-6">{col.heading}</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-st-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/10 text-sm text-muted-foreground">
          <p>{f.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{f.twitter}</a>
            <a href="#" className="hover:text-white transition-colors">{f.linkedin}</a>
            <a href="#" className="hover:text-white transition-colors">{f.instagram}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
