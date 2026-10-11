import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  Bot,
  Wrench,
  CheckCircle,
  Filter,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  'AI & Integration': Bot,
  'Tools & Concepts': Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <span>&lt;Skills /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Technologies and concepts I have hands-on experience using and can speak to clearly in technical interviews.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-sky-400" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const IconComponent = CATEGORY_ICONS[group.category] || Code;
            return (
              <div
                key={group.category}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 flex-grow items-start">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/40 transition-all text-xs"
                    >
                      <span className="font-medium text-slate-200 group-hover/pill:text-sky-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Note / Confidence Banner */}
        {/* <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-center gap-3 text-xs text-slate-400">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-slate-300">Honest Skill Profile:</strong> No artificial percentage meters (e.g., "95% JavaScript"). All displayed skills reflect technologies used in built projects, coursework, or practical code implementations.
          </span>
        </div> */}
      </div>
    </section>
  );
}
