import React, { useState } from 'react';
import { Award, Flame, BookOpen, Trophy, PlusCircle, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards & Honors'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Certifications':
        return <Award size={18} className="text-brand-400" />;
      case 'Hackathons':
        return <Flame size={18} className="text-rose-400" />;
      case 'Courses':
        return <BookOpen size={18} className="text-cyan-400" />;
      case 'Awards & Honors':
        return <Trophy size={18} className="text-amber-400" />;
      default:
        return <Star size={18} className="text-emerald-400" />;
    }
  };

  // Filter items based on active tab
  const filteredCategories = activeTab === 'All'
    ? achievementsData
    : achievementsData.filter(cat => cat.category === activeTab);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 dark:text-amber-300 light:text-amber-600 text-xs font-semibold uppercase tracking-wider">
            <Trophy size={14} />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Achievements & Learning Tracks
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            A growing portfolio of certifications, hackathon participations, completed coursework, and recognitions.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-600/30'
                  : 'bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-700/50 light:border-slate-300'
              }`}
            >
              {tab !== 'All' && getCategoryIcon(tab)}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-800 dark:bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-200">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-brand-500/40 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500">
                        <span className="font-semibold px-2.5 py-0.5 rounded-md bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300">
                          {item.issuer}
                        </span>
                        <span className="font-mono">{item.year}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/60 dark:border-slate-800 light:border-slate-200 flex items-center gap-2 text-xs text-emerald-400 light:text-emerald-600 font-medium">
                      <CheckCircle2 size={14} />
                      <span>Verified Accomplishment</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Expandability Note */}
        <div className="mt-14 glass-card rounded-2xl p-6 text-center max-w-2xl mx-auto border-dashed border-2 border-slate-700/80 light:border-slate-300">
          <div className="inline-flex p-3 rounded-full bg-brand-500/10 text-brand-400 mb-3">
            <PlusCircle size={24} />
          </div>
          <h4 className="text-base font-bold text-white light:text-slate-900 mb-1">
            Always Expanding My Horizons
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed max-w-lg mx-auto">
            Actively participating in new hackathons, specialized certifications, and tech workshops. New milestones can be dynamically plugged in anytime!
          </p>
        </div>

      </div>
    </section>
  );
}
