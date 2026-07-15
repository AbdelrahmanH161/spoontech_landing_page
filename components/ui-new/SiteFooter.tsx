"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

const CONTACT_PHONE = "+201500588018"
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/spoontecheg/",
  facebook: "https://www.facebook.com/Spoontech.eg?locale=ar_AR",
  instagram: "https://www.instagram.com/spoontech.eg/",
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H7.898v-2.909h2.54V9.845c0-2.522 1.492-3.916 3.777-3.916 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.909h-2.33v7.03C18.343 21.245 22 17.083 22 12.061z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer

  const footerColumns = [
    {
      heading: f.company,
      links: f.companyLinks,
      hrefs: ["/about", "mailto:info@spoontech.net"],
    },
    {
      heading: f.legal,
      links: f.legalLinks,
      hrefs: ["/terms", "/privacy"],
    },
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
                window.open(
                  "https://wa.me/201500588018",
                  "_blank",
                  "noopener,noreferrer"
                )
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
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      href={col.hrefs[i]}
                      className="transition-colors hover:text-st-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>{f.copyright}</p>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {CONTACT_PHONE}
          </a>
          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.linkedin}
              className="transition-colors hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.facebook}
              className="transition-colors hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.instagram}
              className="transition-colors hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
