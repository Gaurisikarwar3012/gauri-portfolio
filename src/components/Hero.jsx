import React from 'react';
import { ArrowRight, Send, Github, Linkedin, Mail, Sparkles, MapPin, GraduationCap, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/15 dark:bg-brand-600/20 light:bg-brand-400/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-500/20 light:bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/15 dark:bg-indigo-500/20 light:bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob [animation-delay:5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/30 text-brand-400 dark:text-brand-300 light:text-brand-700 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Projects & Tech Collaborations</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-slate-400 light:text-slate-600">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.1]">
                {personalInfo.name}
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient pt-1">
                {personalInfo.roleTitle}
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.shortIntro}
            </p>

            {/* Location & College Quick Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 light:text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/50 light:border-slate-300">
                <GraduationCap size={16} className="text-brand-400" />
                <span>{personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/50 light:border-slate-300">
                <MapPin size={15} className="text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons: View Projects & Contact Me */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-xl shadow-brand-600/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-900/80 light:bg-white border border-slate-700/80 dark:border-slate-700 light:border-slate-300 hover:border-brand-500 hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-black/10"
              >
                <Send size={16} className="text-brand-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400 light:text-slate-600">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect with me:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-brand-600/20 hover:text-brand-400 hover:border-brand-500/50 border border-slate-800 light:border-slate-300 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-brand-600/20 hover:text-brand-400 hover:border-brand-500/50 border border-slate-800 light:border-slate-300 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-brand-600/20 hover:text-brand-400 hover:border-brand-500/50 border border-slate-800 light:border-slate-300 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gradient border container */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-brand-500 via-cyan-500 to-indigo-600 shadow-2xl shadow-brand-500/20">
                <div className="bg-slate-900/90 dark:bg-slate-950/95 light:bg-white/95 rounded-[22px] p-6 sm:p-7 backdrop-blur-xl border border-white/10 space-y-6">
                  
                  {/* Card Header (Mac OS style controls) */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Terminal size={14} className="text-brand-400" />
                      <span>gauri.profile.py</span>
                    </div>
                  </div>

                  {/* Profile Spotlight Box */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-brand-600/30">
                        GS
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white light:text-slate-900">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-brand-400 light:text-brand-600 font-medium">
                        Computer Science & Engineering
                      </p>
                      <p className="text-xs text-slate-400 light:text-slate-500 flex items-center gap-1 mt-0.5">
                        <GraduationCap size={13} />
                        {personalInfo.college}
                      </p>
                    </div>
                  </div>

                  {/* Interactive code-like snippet */}
                  <div className="bg-slate-950/70 dark:bg-slate-900/60 light:bg-slate-100 p-4 rounded-xl border border-slate-800/80 light:border-slate-200 font-mono text-xs space-y-1.5 leading-relaxed text-slate-300 light:text-slate-700">
                    <p className="text-slate-500">// Student & Developer Profile</p>
                    <p><span className="text-brand-400">const</span> developer = &#123;</p>
                    <p className="pl-4">name: <span className="text-emerald-400">"{personalInfo.name}"</span>,</p>
                    <p className="pl-4">college: <span className="text-emerald-400">"JECRC University"</span>,</p>
                    <p className="pl-4">focus: [<span className="text-cyan-400">"AI"</span>, <span className="text-cyan-400">"GenAI"</span>, <span className="text-cyan-400">"Web"</span>],</p>
                    <p className="pl-4">learning: <span className="text-amber-400">true</span>,</p>
                    <p className="pl-4">goal: <span className="text-emerald-400">"Build impactful solutions"</span></p>
                    <p>&#125;;</p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-800/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-center">
                      <div className="text-xs text-slate-400 light:text-slate-500">Core Interest</div>
                      <div className="text-sm font-bold text-white light:text-slate-900 mt-0.5">AI & Machine Learning</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-center">
                      <div className="text-xs text-slate-400 light:text-slate-500">Specialty</div>
                      <div className="text-sm font-bold text-white light:text-slate-900 mt-0.5">Modern Web & Tools</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
