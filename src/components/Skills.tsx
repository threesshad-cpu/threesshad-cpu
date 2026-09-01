"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-muted">02</span>
            <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-1">Toolkit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-white/10">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={skill}
                    className="text-sm font-medium text-muted bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg hover:border-accent-1/50 hover:text-accent-1 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
