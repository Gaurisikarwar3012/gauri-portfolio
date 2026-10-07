import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/85 dark:bg-slate-950/85 light:bg-white/85 backdrop-blur-md shadow-lg shadow-black/5 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
              GS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-brand-400 dark:text-brand-400 light:text-brand-600 font-medium tracking-wide">
                B.Tech • AI & Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand-400 dark:text-brand-400 light:text-brand-600 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 light:border-slate-200 bg-slate-800/50 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-brand-400 hover:border-brand-500/50 transition-all duration-200"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            {/* Quick Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={15} />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-800 light:border-slate-200 bg-slate-800/50 light:bg-slate-100 text-slate-300 light:text-slate-700"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg border border-slate-800 light:border-slate-200 bg-slate-800/50 light:bg-slate-100 text-slate-300 light:text-slate-800 hover:text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 animate-slide-up shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-400 light:text-brand-600 font-semibold border-l-4 border-brand-500'
                      : 'text-slate-300 light:text-slate-700 hover:bg-slate-800/40 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-md shadow-brand-600/30"
              >
                <Send size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
