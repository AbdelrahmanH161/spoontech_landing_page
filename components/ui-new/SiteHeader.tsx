"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SpoonTech Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-foreground">SpoonTech</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex text-sm font-medium">Log in</Button>
          <Button className="bg-st-primary hover:bg-st-primary-hover text-white rounded-xl shadow-lg shadow-st-primary/20 transition-all">
            Start Free Trial
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
