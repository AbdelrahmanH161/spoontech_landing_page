"use client"

import React from "react"
import { motion } from "framer-motion"
import { QrCode, Package, LineChart, BrainCircuit } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function FeatureGrid() {
  const { t } = useLanguage()
  const f = t.features

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {f.sectionTitle1} <br />
            <span className="text-st-primary">{f.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{f.sectionDesc}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Bento Item 1: Large */}
          <motion.div variants={item} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-background border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-st-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            <div className="w-12 h-12 bg-st-light rounded-2xl flex items-center justify-center mb-6">
              <QrCode size={24} className="text-st-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{f.qr.title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">{f.qr.desc}</p>
          </motion.div>

          {/* Bento Item 2: Small */}
          <motion.div variants={item} className="relative overflow-hidden rounded-3xl bg-background border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-st-light rounded-2xl flex items-center justify-center mb-6">
              <Package size={24} className="text-st-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{f.inventory.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.inventory.desc}</p>
          </motion.div>

          {/* Bento Item 3: Small */}
          <motion.div variants={item} className="relative overflow-hidden rounded-3xl bg-background border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-st-light rounded-2xl flex items-center justify-center mb-6">
              <LineChart size={24} className="text-st-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{f.analytics.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.analytics.desc}</p>
          </motion.div>

          {/* Bento Item 4: Large */}
          <motion.div variants={item} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#0F172A] text-white border border-slate-800 p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-st-primary/20 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
            <div className="w-12 h-12 bg-st-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <BrainCircuit size={24} className="text-st-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{f.ai.title}</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">{f.ai.desc}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
