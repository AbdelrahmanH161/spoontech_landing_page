"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const tiers = [
    {
      name: "FOOD Truck Tier",
      monthlyPrice: "800",
      yearlyPrice: "8,000",
      popular: false,
      description: "Essential tools for food trucks and small, agile setups.",
      features: [
        "QR Ordering (add to cart, split bills)",
        "Live order tracking for customers",
        "Live orders kitchen dashboard",
        "Cashier active bills & shift history",
        "Admin Menu & QR Management",
        "Sales & Orders API integrations",
        "Basic Inventory dashboard (4 metrics)"
      ]
    },
    {
      name: "Smart Restaurant Tier",
      monthlyPrice: "1,650",
      yearlyPrice: "16,500",
      popular: true,
      description: "Advanced management and analytics for growing restaurants.",
      features: [
        "Everything in FOOD Truck Tier",
        "Advanced Order Management (search, filter)",
        "Table status overview & waiter calling",
        "Full Inventory (Reorder alerts, waste prevention)",
        "Stock movement logs & Excel export",
        "Customer Feedback tracking",
        "Analytics (Peak hours, best dish pairings)"
      ]
    },
    {
      name: "AI Pro Restaurant Tier",
      monthlyPrice: "2,550",
      yearlyPrice: "25,500",
      popular: false,
      description: "The ultimate AI-powered operating system for maximum efficiency.",
      features: [
        "Everything in Smart Restaurant Tier",
        "CRM (Customer profiles & history)",
        "Loyalty programs & rewards",
        "Staff management (roles, contacts)",
        "Multi-Branch support",
        "AI Analytics & Revenue forecasting",
        "Stock duration prediction"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Choose the perfect plan for your operation. Upgrade anytime as you grow.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-st-primary transition-colors focus:outline-none"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="ml-1.5 inline-block rounded-full bg-st-primary/10 px-2 py-0.5 text-[10px] font-bold text-st-primary uppercase tracking-wider">2 Months Free</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl bg-background border p-8 flex flex-col h-full shadow-sm ${tier.popular ? "border-st-primary shadow-xl shadow-st-primary/10 md:-translate-y-4" : "border-border"}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-st-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground h-10">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">{isYearly ? tier.yearlyPrice : tier.monthlyPrice}</span>
                <span className="text-muted-foreground font-medium ml-1">EGP / {isYearly ? "yr" : "mo"}</span>
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full mb-8 h-12 rounded-xl text-sm font-semibold ${tier.popular ? "bg-st-primary hover:bg-st-primary-hover text-white" : "border-border"}`}
              >
                Get Started
              </Button>

              <div className="space-y-4 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What's included</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                      <Check size={16} className="text-st-primary mt-0.5 shrink-0" />
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
