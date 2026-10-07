import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/90 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200 items-center">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-base">
                GS
              </div>
              <span className="font-extrabold text-xl text-white light:text-slate-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 light:text-slate-600 max-w-sm">
              B.Tech Student at JECRC University, Jaipur. Exploring Artificial Intelligence, Web Development, and Digital Productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 light:text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 light:border-slate-300 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 light:border-slate-300 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 light:border-slate-300 transition-colors"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-500 shadow-md shadow-brand-600/30 transition-all hover:-translate-y-1"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 light:text-slate-600">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
            <span className="text-slate-600">•</span>
            <span>Optimized for Vercel</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
