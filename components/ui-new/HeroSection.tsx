"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-st-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-st-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-st-light border border-st-primary/20 text-st-primary-hover text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-st-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-st-primary"></span>
            </span>
            SpoonTech V2.0 is Live
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            The intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-st-primary to-st-primary-hover">
              operating system
            </span><br />
            for modern F&B.
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Unify your front-of-house operations, automate backend inventory, and drive customer retention with AI-powered analytics designed specifically for restaurants and dark kitchens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-base bg-st-primary hover:bg-st-primary-hover text-white rounded-xl shadow-xl shadow-st-primary/20 transition-all gap-2">
              Get Started Now <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl border-border hover:bg-secondary gap-2">
              <PlayCircle size={18} className="text-st-primary" /> Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Main Display Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src="/hero_pos_ui.png" 
              alt="SpoonTech Platform" 
              className="w-full h-full object-cover object-center"
            />
            {/* Glassmorphism overlay element */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary font-bold text-xl">
                  +40%
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Efficiency Boost</div>
                  <div className="text-xs text-muted-foreground">Average increase in table turnover</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
