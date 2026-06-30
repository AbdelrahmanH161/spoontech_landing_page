"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

// Per-month prices for each billing period
const prices = [
  { quarterlyPrice: "800", yearlyPrice: "666", popular: false },
  { quarterlyPrice: "1,650", yearlyPrice: "1,375", popular: true },
  { quarterlyPrice: "2,550", yearlyPrice: "2,125", popular: false },
]

export function PricingSection() {
  const [billing, setBilling] = useState<"quarterly" | "yearly">("quarterly")
  const { t, language } = useLanguage()
  const p = t.pricing

  const isYearly = billing === "yearly"
  const tiers = p.tiers.map((tier, i) => ({ ...tier, ...prices[i] }))

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {p.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">{p.subtitle}</p>
          <div
            style={{
              flexDirection: language == "ar" ? "row-reverse" : "row",
            }}
            className="flex items-center justify-center gap-3"
          >
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              {p.quarterly}
            </span>
            <button
              onClick={() => setBilling(isYearly ? "quarterly" : "yearly")}
              dir="ltr"
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-st-primary transition-colors focus:outline-none"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              {p.yearly}{" "}
              <span className="ms-1.5 inline-block rounded-full bg-st-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-st-primary uppercase">
                {p.yearlyBadge}
              </span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex h-full flex-col rounded-3xl border bg-background p-8 shadow-sm ${tier.popular ? "border-st-primary shadow-xl shadow-st-primary/10 md:-translate-y-4" : "border-border"}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-st-primary px-4 py-1 text-xs font-bold tracking-widest text-white uppercase">
                  {p.mostPopular}
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="h-10 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div>
                  <span className="text-4xl font-extrabold text-foreground">
                    {isYearly ? tier.yearlyPrice : tier.quarterlyPrice}
                  </span>
                  <span className="ms-1 font-medium text-muted-foreground">
                    {p.currency} / {p.mo}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isYearly ? p.billedYearly : p.billedQuarterly}
                </p>
              </div>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className={`mb-8 h-12 w-full rounded-xl text-sm font-semibold ${tier.popular ? "bg-st-primary text-white hover:bg-st-primary-hover" : "border-border"}`}
              >
                {p.getStarted}
              </Button>

              <div className="flex-1 space-y-4">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {p.whatsIncluded}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-st-primary"
                      />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
