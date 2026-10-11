import React from 'react';
import {
  Target,
  LayoutTemplate,
  Code2,
  CheckCircle2,
  Workflow,
} from 'lucide-react';
import { DEVELOPMENT_APPROACH } from '../data/portfolioData';

const ICON_MAP = {
  Target: Target,
  LayoutTemplate: LayoutTemplate,
  Code2: Code2,
  CheckCircle2: CheckCircle2,
};

export default function Approach() {
  return (
    <section id="approach" className="py-24 relative border-t border-slate-800/60 bg-[#080C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>&lt;how-i-build /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Development Approach
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            A practical 4-step engineering workflow focused on clarity, user experience, and robust frontend implementation.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVELOPMENT_APPROACH.map((step) => {
            const IconComponent = ICON_MAP[step.icon] || Code2;
            return (
              <div
                key={step.step}
                className="group bg-slate-900/50 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between hover:bg-slate-900/80"
              >
                <div>
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-sky-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#0B1120] text-sky-400 border border-slate-800 group-hover:border-sky-500/30 group-hover:scale-105 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-400 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Step {step.step} of 04</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
