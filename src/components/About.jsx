import React from 'react';
import {
  Code,
  Layers,
  Network,
  Database,
  Bot,
  Sparkles,
  BrainCircuit,
  Boxes,
  GraduationCap,
  CheckCheck,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL_INFO, WHAT_I_BRING } from '../data/portfolioData';

// Icon mapping helper
const ICON_MAP = {
  BrainCircuit: BrainCircuit,
  Boxes: Boxes,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
  CheckCheck: CheckCheck,
};

const INTERESTS = [
  {
    icon: Layers,
    title: 'Responsive & Reusable Interfaces',
    desc: 'Crafting modular, design-system-aligned components with Tailwind CSS and React.',
  },
  {
    icon: Code,
    title: 'Practical Web Applications',
    desc: 'Transforming real-world requirements into clean, purposeful software that solves user problems.',
  },
  {
    icon: Network,
    title: 'API Integration & Networking',
    desc: 'Connecting React frontends seamlessly to RESTful backend endpoints with robust error handling.',
  },
  {
    icon: Database,
    title: 'State & Data Flow Management',
    desc: 'Structuring application state using React hooks and Redux Toolkit with predictable unidirectionality.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Features',
    desc: 'Embedding OpenAI and LLM completions into workflows to create genuinely smart user experiences.',
  },
  {
    icon: Sparkles,
    title: 'Code Quality & UX Polish',
    desc: 'Focusing on clean Git history, accessibility, keyboard navigation, and delightful responsiveness.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#090D18]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <span>&lt;About /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Narrative & High Level Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className="text-white font-semibold">Computer Engineering graduate</strong> with a strong foundation in software engineering principles, algorithms, and modern web application development.
            </p>
            <p>
              My primary passion centers around building responsive, performant user interfaces with{' '}
              <span className="text-sky-300 font-medium">React.js</span> and combining them with{' '}
              <span className="text-slate-100 font-medium">Node.js, Express, MongoDB, and Tailwind CSS</span> to create end-to-end solutions that look great and perform reliably.
            </p>
            {/* <p className="text-slate-400 text-base">
              Rather than building superficial demos, I focus on understanding real-world problem domains, structuring maintainable component hierarchies, managing state cleanly, and integrating practical modern features like generative AI APIs.
            </p> */}
          </div>

          {/* Quick Highlight Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-[#0F172A] border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Fast Facts
            </h3>
            <dl className="space-y-3.5 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-800/80">
                <dt className="text-slate-400">Degree</dt>
                <dd className="font-medium text-slate-200">B.E. in Computer Engineering</dd>
              </div>
              {/* <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-800/80">
                <dt className="text-slate-400">Institution</dt>
                <dd className="font-medium text-slate-200 text-right sm:text-right">St. John College of Engineering</dd>
              </div> */}
              <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-800/80">
                <dt className="text-slate-400">Focus</dt>
                <dd className="font-medium text-sky-300">Frontend / MERN Stack</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-1.5">
                <dt className="text-slate-400">Availability</dt>
                <dd className="font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Ready for Full-Time Roles
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* What I Enjoy Doing (6 cards) */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>What I Focus On &amp; Enjoy Building</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERESTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-sky-500/20 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-200 group-hover:text-white mb-1.5 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What I Bring Section */}
        {/* <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              What I Bring to an Engineering Team
            </h3>
            <p className="text-slate-400 text-sm">
              Core traits and engineering habits that shape how I approach projects, communicate with teammates, and write production-ready code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_I_BRING.map((trait, idx) => {
              const IconComponent = ICON_MAP[trait.icon] || CheckCheck;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B1120] border border-slate-800/90 hover:border-slate-700 transition-colors"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-1">
                      {trait.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
