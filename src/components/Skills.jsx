import React from 'react';
import { Code2, Brain, Sparkles, Layout, Zap, Cpu, Terminal, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Helper to render matching icon
const renderSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="text-amber-400" size={28} />;
    case 'Brain':
      return <Brain className="text-rose-400" size={28} />;
    case 'Sparkles':
      return <Sparkles className="text-purple-400" size={28} />;
    case 'Layout':
      return <Layout className="text-cyan-400" size={28} />;
    case 'Zap':
      return <Zap className="text-emerald-400" size={28} />;
    default:
      return <Cpu className="text-brand-400" size={28} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 dark:text-brand-300 light:text-brand-600 text-xs font-semibold uppercase tracking-wider">
            <Layers size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Skills & Modern Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            A targeted repertoire of programming languages, AI concepts, web technologies, and productivity workflows.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-brand-500/50 relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle card corner ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 group-hover:bg-brand-500/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-200 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {renderSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/50 light:border-slate-300 text-slate-300 light:text-slate-700">
                    {skill.badge}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                  {skill.category}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Tags list */}
              <div className="pt-6 relative z-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2.5">
                  Key Concepts & Tools:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/50 dark:bg-slate-900/70 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/40 light:border-slate-300/80 group-hover:border-brand-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
