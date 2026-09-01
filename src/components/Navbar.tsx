"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "glass-panel border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-1 group">
          <span className="text-foreground transition-colors group-hover:text-accent-1">TD</span>
          <span className="text-accent-1">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href={portfolioData.profile.resume}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-foreground"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 glass-panel flex flex-col pt-20 px-6 pb-6 h-screen"
          >
            <button 
              className="absolute top-5 right-6 text-foreground p-1"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-muted hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
              <a 
                href={portfolioData.profile.resume}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent-1 text-white font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
