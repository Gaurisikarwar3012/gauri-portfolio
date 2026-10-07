import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 dark:text-cyan-300 light:text-cyan-600 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & Learning Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Building a strong theoretical and practical computer science foundation at JECRC University.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-slate-800/80 light:border-slate-200"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-brand-500 via-cyan-500 to-indigo-600" />

              <div className="space-y-6 pl-2 sm:pl-4">
                
                {/* Header row: Degree, Status, and Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 dark:text-brand-300 light:text-brand-600 text-xs font-semibold mb-2">
                      {edu.status}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="text-lg font-bold text-cyan-400 dark:text-cyan-300 light:text-cyan-600 mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-slate-400 light:text-slate-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar size={15} className="text-brand-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin size={15} className="text-rose-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Description */}
                <p className="text-slate-300 light:text-slate-600 leading-relaxed text-base">
                  {edu.description}
                </p>

                {/* Relevant Learning Areas */}
                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-white light:text-slate-800 uppercase tracking-wider">
                    <BookOpen size={16} className="text-brand-400" />
                    <span>Relevant Learning Areas & Core Coursework</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {edu.relevantAreas.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 dark:bg-slate-900/50 light:bg-slate-100 border border-slate-700/40 light:border-slate-200"
                      >
                        <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
