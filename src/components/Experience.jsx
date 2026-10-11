import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { EXPERIENCE_ITEMS, EDUCATION } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/60 bg-[#090D18]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>&lt;ExperienceEducation /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Learning
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Verified internship experience and academic foundation in Computer Engineering.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Work & Internship Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Briefcase className="w-4 h-4" />
              </span>
              <span>Practical Development Experience</span>
            </h3>

            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 relative transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80"
              >
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.role}
                    </h4>
                    <div className="text-sky-400 font-semibold text-sm">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {item.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-slate-800 text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </span>
                </div>

                {/* Accurate Responsibilities */}
                <ul className="space-y-2 mb-5">
                  {item.description.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech applied */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0B1120] text-slate-400 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Educational Background (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span>Academic Education</span>
            </h3>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 relative transition-all duration-200 hover:border-slate-700">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{EDUCATION.status}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1.5">
                {EDUCATION.degree}
              </h4>
              <p className="text-sm font-medium text-slate-300 mb-4">
                {EDUCATION.institution}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Coursework &amp; Foundations:</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {EDUCATION.focus.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-[#0B1120] border border-slate-800/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
