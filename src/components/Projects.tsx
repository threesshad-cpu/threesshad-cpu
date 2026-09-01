"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="w-full py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-muted">01</span>
            <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-1">Proof of Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.article 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-6 md:p-8 rounded-2xl flex flex-col hover-glow transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-medium text-accent-2 bg-accent-2/10 px-2.5 py-1 rounded-full mb-4 inline-block">
                    {project.domain}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted hover:text-accent-1 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted mb-6 leading-relaxed flex-1">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent-1" />
                    Engineering Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent-1/50 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-muted bg-white/5 px-2.5 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
