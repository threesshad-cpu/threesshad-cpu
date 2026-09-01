"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-1/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted">04</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-1">Next Steps</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s build something <br/>
            <span className="text-gradient-accent italic">useful.</span>
          </h2>
          
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            Open to opportunities in Software Engineering, AI Engineering, ML Engineering, and Full-Stack AI. If you have an exciting project or role, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${portfolioData.profile.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-white/90 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </a>
            <a 
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel text-foreground font-semibold hover:bg-white/10 transition-all border-white/10"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
