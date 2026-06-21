"use client"

import React from "react"
import { motion } from "framer-motion"

export function ImageShowcase() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* The image is used here with some floating aesthetic elements */}
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl">
              <img 
                src="/showcase_kitchen_analytics.png" 
                alt="SpoonTech POS Interface" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Floating Card */}
            <div className="absolute -right-8 -bottom-8 bg-background p-6 rounded-2xl shadow-xl border border-border max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-st-primary-hover" />
                <span className="text-sm font-semibold text-foreground">System Status</span>
              </div>
              <p className="text-xs text-muted-foreground">All locations synced. Inventory updated 2s ago.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              A visually stunning interface, <br className="hidden md:block"/>
              built for the <span className="text-st-primary">fast-paced kitchen.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We know that in a busy restaurant, every second counts. That's why we've designed SpoonTech with a dark-mode optimized, high-contrast interface that is incredibly intuitive. Your staff can master it in minutes, not days.
            </p>
            
            <ul className="space-y-4">
              {[
                "Arabic-first interface with full bilingual support",
                "Zero technical background required",
                "Dark mode to reduce eye strain during long shifts",
                "Scales effortlessly from a single food truck to a chain"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-6 h-6 rounded-full bg-st-light flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-st-primary" />
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
