"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm font-mono text-muted">03</span>
            <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-1">Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experience & Education</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          {/* Experience Item */}
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <div className="w-3 h-3 bg-accent-1 rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel ml-4 md:ml-0 hover-glow transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                  <span className="text-sm font-mono text-accent-1">{exp.date}</span>
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-4">{exp.organization}</div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-muted bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <div className="w-3 h-3 bg-accent-2 rounded-full group-hover:scale-150 transition-transform"></div>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel ml-4 md:ml-0 hover-glow transition-all border-accent-2/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-bold text-foreground text-lg">{portfolioData.education.degree}</h3>
                <span className="text-sm font-mono text-accent-2">Class of {portfolioData.education.graduation}</span>
              </div>
              <div className="text-sm font-medium text-foreground/80 mb-2">{portfolioData.education.institution}</div>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-xs font-bold">
                CGPA: {portfolioData.education.cgpa}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
