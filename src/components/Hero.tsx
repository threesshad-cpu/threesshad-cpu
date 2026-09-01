"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BrainCircuit, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-1/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-start z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            {portfolioData.profile.role}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Building intelligent <br className="hidden md:block" />
          <span className="text-gradient-accent">systems that ship.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed"
        >
          I&apos;m <span className="text-foreground font-medium">{portfolioData.profile.name}</span>, {portfolioData.profile.about}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a 
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-white/90 transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href={portfolioData.profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground font-medium hover:bg-white/10 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Technical capability indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-2">
            <BrainCircuit className="w-5 h-5 text-accent-1" />
            <span className="text-sm font-medium text-foreground">AI Systems</span>
            <span className="text-xs text-muted">LLMs & Agents</span>
          </div>
          <div className="flex flex-col gap-2">
            <Terminal className="w-5 h-5 text-accent-2" />
            <span className="text-sm font-medium text-foreground">ML Pipelines</span>
            <span className="text-xs text-muted">Data & Modeling</span>
          </div>
          <div className="flex flex-col gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-foreground">Full-Stack AI</span>
            <span className="text-xs text-muted">Next.js & React</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-5 h-5 flex items-center justify-center font-bold text-emerald-400">{'{}'}</div>
            <span className="text-sm font-medium text-foreground">Production</span>
            <span className="text-xs text-muted">Deployment & APIs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
