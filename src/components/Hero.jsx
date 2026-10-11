import React from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  Terminal,
  Code2,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
         

            {/* Intro Greeting */}
            <p className="text-slate-400 font-mono text-sm sm:text-base mb-3 flex items-center gap-2">
              <span className="text-sky-400 font-semibold">&gt;</span>
              <span>Hi, I'm <strong className="text-slate-100 font-semibold">{PERSONAL_INFO.name}</strong></span>
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Building Modern Web Experiences with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
                React &amp; the MERN Stack.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* Buttons: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 w-full sm:w-auto"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Priyanshu_Goyal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 w-full sm:w-auto"
                title="Download Priyanshu Goyal's Resume"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Connect Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-300 transition-colors"
                  aria-label="GitHub Profile"
                  title="Visit GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-300 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="Visit LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-300 transition-colors"
                  aria-label="Send Email"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Terminal & Code Visual Element (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-[#0D1322] border border-slate-800 shadow-2xl shadow-sky-950/40 overflow-hidden relative">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090D18] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>priyanshu.config.js</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Body Code */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-2.5">
                <p className="text-slate-500 italic">// Engineering Profile</p>
                <div>
                  <span className="text-sky-400 font-semibold">const</span>{' '}
                  <span className="text-indigo-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">degree:</span>{' '}
                  <span className="text-emerald-300">"B.E. Computer Engineering"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreFocus:</span> [
                  <span className="text-sky-300">"React.js"</span>,{' '}
                  <span className="text-sky-300">"MERN"</span>,{' '}
                  <span className="text-sky-300">"Tailwind"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">aiIntegration:</span>{' '}
                  <span className="text-purple-300">["OpenAI API", "Generative AI"]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400 font-medium">"Ready to contribute"</span>
                </div>
                <div>&#125;;</div>

                {/* Simulated build status */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-xs">✔</span>
                    <span>Ready for Frontend &amp; MERN opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-xs">⚡</span>
                    <span>Component architecture &amp; clean code advocate</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="bg-[#090D18]/90 px-4 py-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>3 Featured Projects</span>
                </span>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>MERN &amp; AI Stack</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <button
            type="button"
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-sky-400">
              Scroll down
            </span>
            <div className="p-1.5 rounded-full border border-slate-800 group-hover:border-sky-500/40 bg-slate-900/60 transition-all">
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
