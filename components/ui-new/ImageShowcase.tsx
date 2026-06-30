"use client"

import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n"

export function ImageShowcase() {
  const { t } = useLanguage()
  const s = t.showcase

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-background shadow-2xl">
              <img
                src="/showcase_kitchen_analytics.jpeg"
                alt="SpoonTech POS Interface"
                className="h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative Floating Card */}
            <div className="absolute -right-8 -bottom-8 hidden max-w-60 rounded-2xl border border-border bg-background p-6 shadow-xl md:block">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-st-primary-hover" />
                <span className="text-sm font-semibold text-foreground">
                  {s.statusTitle}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{s.statusDesc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="mb-6 text-3xl leading-tight font-bold text-foreground md:text-4xl">
              {s.title1} <br className="hidden md:block" />
              {s.title2}{" "}
              <span className="text-st-primary">{s.titleHighlight}</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {s.desc}
            </p>

            <ul className="space-y-4">
              {s.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-medium text-foreground"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-st-light">
                    <div className="h-2 w-2 rounded-full bg-st-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
