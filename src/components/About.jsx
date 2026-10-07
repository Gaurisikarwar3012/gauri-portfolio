import React from 'react';
import { User, Sparkles, BookOpen, Rocket, Heart, CheckCircle2, Laptop } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Sparkles className="text-brand-400" size={24} />,
      title: "AI & Innovation",
      desc: "Deeply interested in Artificial Intelligence and Generative AI, constantly exploring prompt engineering and smart API integrations."
    },
    {
      icon: <Laptop className="text-cyan-400" size={24} />,
      title: "Web Engineering",
      desc: "Creating clean, responsive, and accessible digital products with modern technologies like React, Vite, and Tailwind CSS."
    },
    {
      icon: <Rocket className="text-emerald-400" size={24} />,
      title: "Digital Productivity",
      desc: "Optimizing developer workflows with structured Notion systems, Git version control, and digital productivity habits."
    },
    {
      icon: <BookOpen className="text-amber-400" size={24} />,
      title: "Continuous Learning",
      desc: "Translating engineering concepts learned at JECRC University into practical hands-on projects and open-source explorations."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 dark:text-brand-300 light:text-brand-600 text-xs font-semibold uppercase tracking-wider">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Passionate About Tech, AI & Practical Problem Solving
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            A student-friendly and professional look at my background, aspirations, and what drives my journey in technology.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5">
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Hi, I'm <span className="text-brand-400">{personalInfo.name}</span>
              </h3>
              
              {personalInfo.extendedAbout.map((paragraph, index) => (
                <p key={index} className="text-slate-300 light:text-slate-600 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}

              {/* Quick Checklist / Highlights */}
              <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-400 shrink-0" />
                  <span>Enthusiastic B.Tech Student</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
                  <span>Hands-on Project Builder</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>Modern Tech & AI Focus</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                  <span>Collaborative Team Player</span>
                </div>
              </div>

            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-2xl text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-white light:text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 light:text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:border-brand-500/40 transition-all">
                <div className="p-3 rounded-xl bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/50 light:border-slate-200 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white light:text-slate-900 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
