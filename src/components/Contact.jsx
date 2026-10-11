import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        state: 'error',
        message: 'Please fill in your name, email, and message.',
      });
      return;
    }

    // Construct mailto link cleanly with encoded components
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

    // Open user's email client
    window.location.href = mailtoUrl;

    setFormStatus({
      state: 'success',
      message: 'Draft opened in your email client! If it did not open, you can email me directly at ' + PERSONAL_INFO.email,
    });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-[#090D18]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>&lt;Contact /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            I'm open to discussing frontend development, React.js, and MERN stack opportunities. Feel free to reach out.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact Channels
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" /> Direct Email
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-300 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-white hover:text-sky-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    GitHub
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-800/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-sky-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Looking for full-time opportunities</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Open to Frontend Developer, React Developer, and Full Stack MERN junior/associate roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Mailto Flow & Validation (7 cols) */}
          {/* <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] text-slate-400 font-mono">
                  Mailto Integration
                </span>
              </div>

              {formStatus.state === 'error' && (
                <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                  {formStatus.message}
                </div>
              )}

              {formStatus.state === 'success' && (
                <div className="mb-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-200 placeholder-slate-500 transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-200 placeholder-slate-500 transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Developer Role Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-200 placeholder-slate-500 transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Priyanshu, we would like to speak regarding an opening on our team..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-200 placeholder-slate-500 transition-colors outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-sky-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <span>Send via Email Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Info className="w-3.5 h-3.5" />
                    <span>No backend needed; triggers your default mail app</span>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
