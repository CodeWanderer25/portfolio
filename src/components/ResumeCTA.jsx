import React, { useState } from 'react';
import {
  FileText,
  FileDown,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 relative border-t border-slate-800/60 bg-[#070B14]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-b from-slate-900/90 to-[#0B1120] border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>


          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Want to Know More About My Background?
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore my technical skills, projects, and experience in more detail. Download my verified resume or view the full profile.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Priyanshu_Goyal_Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/25 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium text-sm transition-all"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>

          {/* Clear Setup Guide for User's Actual PDF File */}
          {/* <div className="inline-flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400 bg-slate-950/80 border border-slate-800/80 px-4 py-2.5 rounded-xl max-w-xl mx-auto">
            <div className="flex items-center gap-1.5 text-slate-300">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Resume File Location:</span>
            </div>
            <code className="text-sky-300 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              public/resume.pdf
            </code>
            <button
              type="button"
              onClick={handleCopyPath}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              title="Copy path"
              aria-label="Copy file path"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
            <span className="text-[11px] text-slate-500">
              (Simply drop your actual PDF here)
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
