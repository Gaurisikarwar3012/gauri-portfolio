import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, MessageSquare, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create a mailto URL with the prefilled data
    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name} via Portfolio`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 dark:text-brand-300 light:text-brand-600 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Have an opportunity, project collaboration idea, or question? Feel free to reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 light:border-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base sm:text-lg font-bold text-white light:text-slate-900 hover:text-brand-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white hover:bg-brand-600/30 border border-slate-700 light:border-slate-300 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                </button>
              </div>

              {copied && (
                <div className="mt-3 text-xs text-emerald-400 font-semibold flex items-center gap-1.5 animate-fade-in">
                  <Check size={14} />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-slate-800 light:border-slate-200 flex items-center justify-between group hover:border-brand-500/50 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                  <Linkedin size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    LinkedIn Profile
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    Gauri Sikarwar
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                Connect →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-slate-800 light:border-slate-200 flex items-center justify-between group hover:border-brand-500/50 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                  <Github size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    GitHub Profile
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    @gaurisikarwar
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                Explore →
              </span>
            </a>

            {/* Location Pill */}
            <div className="glass-card rounded-2xl p-4 border border-slate-800 light:border-slate-200 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/15 text-rose-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 light:text-slate-500">Current Base</div>
                <div className="text-sm font-bold text-white light:text-slate-900">
                  {personalInfo.location} • JECRC University
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 light:border-slate-200">
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-300 light:text-slate-600 mb-6">
                Fill out the form below to initiate an email directly with your details.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Collaboration / Mentorship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-xl shadow-brand-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={18} />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm text-center font-medium animate-fade-in">
                    Opening your mail client with your message... Thank you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
