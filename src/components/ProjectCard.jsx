import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Receipt,
  Plane,
  Film,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

// Distinctive Project Mockup Graphics based on the project type
function ProjectPreviewGraphic({ projectId }) {
  if (projectId === 'invoice-ai') {
    return (
      <div className="w-full h-full bg-[#070B14] p-5 flex flex-col justify-between relative overflow-hidden font-mono select-none">
        {/* Background gradient shine */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
            <Receipt className="w-4 h-4 text-sky-400" />
            <span>InvoiceAI </span>
          </div>
          {/* <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            AI Engine: Online
          </span> */}
        </div>

        {/* Mock Data Cards */}
        <div className="grid grid-cols-3 gap-2 my-2 text-[10px]">
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
            <div className="text-slate-400">Total Invoiced</div>
            <div className="text-slate-100 font-bold mt-0.5">$14,250</div>
          </div>
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
            <div className="text-slate-400">Paid</div>
            <div className="text-emerald-400 font-bold mt-0.5">$11,800</div>
          </div>
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
            <div className="text-slate-400">Pending</div>
            <div className="text-amber-400 font-bold mt-0.5">$2,450</div>
          </div>
        </div>

        {/* Mock AI Analysis Prompt & Result Banner */}
        <div className="bg-sky-950/40 border border-sky-800/60 rounded-lg p-2.5 text-[11px] text-sky-300">
          <div className="flex items-center gap-1.5 font-semibold text-sky-200 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>OpenAI Financial Insights</span>
          </div>
          <p className="text-[10px] text-slate-300 line-clamp-2">
            "Automated summary: Cash flow positive. 3 invoices due this week flagged for smart follow-up."
          </p>
        </div>

        {/* Mock Table Rows */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-[10px]">
          <div className="flex items-center justify-between text-slate-400 px-1">
            <span>INV-2024-001</span>
            <span className="text-emerald-400">Paid</span>
            <span>$4,200</span>
          </div>
          <div className="flex items-center justify-between text-slate-400 px-1">
            <span>INV-2024-002</span>
            <span className="text-amber-400">Pending</span>
            <span>$1,750</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'budget-trip-plan') {
    return (
      <div className="w-full h-full bg-[#070D14] p-5 flex flex-col justify-between relative overflow-hidden font-mono select-none">
        <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
            <Plane className="w-4 h-4 text-cyan-400" />
            <span>BudgetTripPlan </span>
          </div>
          {/* <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Budget: $850 Max
          </span> */}
        </div>

        {/* Trip Summary Card */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 my-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-white font-bold">5-Day Kyoto &amp; Osaka Trip</span>
            <span className="text-emerald-400 text-[11px]">$780 Est.</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            Tailored for solo backpacker • Public transit optimized
          </div>
        </div>

        {/* Mock Itinerary Steps */}
        <div className="space-y-1.5 text-[10px]">
          <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded border border-slate-800/80">
            <span className="text-cyan-400 font-bold">D1</span>
            <span className="text-slate-300">Arrive &amp; Historic Gion Exploration</span>
            <span className="ml-auto text-slate-500">$35</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded border border-slate-800/80">
            <span className="text-cyan-400 font-bold">D2</span>
            <span className="text-slate-300">Fushimi Inari &amp; Street Food Route</span>
            <span className="ml-auto text-slate-500">$50</span>
          </div>
        </div>

        {/* AI Itinerary Generated Pill */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
          <span className="flex items-center gap-1 text-cyan-400">
            <Sparkles className="w-3 h-3" /> GenAI Itinerary Synthesizer
          </span>
          <span className="text-emerald-400">Within Budget (✓)</span>
        </div>
      </div>
    );
  }

  // PlayPrime Preview Graphic
  return (
    <div className="w-full h-full bg-[#0A0B17] p-5 flex flex-col justify-between relative overflow-hidden font-mono select-none">
      <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Mock Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2 text-xs text-indigo-400 font-semibold">
          <Film className="w-4 h-4 text-indigo-400" />
          <span>PlayPrime </span>
        </div>
        {/* <div className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
          Search: "Sci-Fi 2024"
        </div> */}
      </div>

      {/* Movie Mock Grid */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between h-20">
          <div className="w-full h-7 bg-indigo-950/60 rounded flex items-center justify-center text-[9px] text-indigo-300">
            ★ 8.8 / 10
          </div>
          <div className="text-[10px] text-slate-200 font-bold truncate">Interstellar II</div>
          <div className="text-[9px] text-slate-500">Sci-Fi • 2h 45m</div>
        </div>
        <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between h-20">
          <div className="w-full h-7 bg-indigo-950/60 rounded flex items-center justify-center text-[9px] text-indigo-300">
            ★ 8.4 / 10
          </div>
          <div className="text-[10px] text-slate-200 font-bold truncate">Cyber Genesis</div>
          <div className="text-[9px] text-slate-500">Action • 2h 10m</div>
        </div>
        <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between h-20">
          <div className="w-full h-7 bg-indigo-950/60 rounded flex items-center justify-center text-[9px] text-indigo-300">
            ★ 8.1 / 10
          </div>
          <div className="text-[10px] text-slate-200 font-bold truncate">Solaris Tide</div>
          <div className="text-[9px] text-slate-500">Drama • 1h 55m</div>
        </div>
      </div>

      {/* Filter state indicator */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span className="text-slate-300">Filtered: Genre = Sci-Fi, Rating &gt; 8.0</span>
        <span className="text-indigo-400 font-semibold">24 Results</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-sky-950/40">
      {/* Visual Application Preview / Mockup */}
      <div className="h-56 sm:h-64 w-full border-b border-slate-800/90 relative overflow-hidden bg-slate-950">
        <ProjectPreviewGraphic projectId={project.id} />

        {/* Badge Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {/* <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-sky-300 border border-slate-700 backdrop-blur-md">
            {project.badge}
          </span> */}
          {project.highlight && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
              {project.highlight}
            </span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features Bullet Points */}
        {/* <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Highlights:
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-7 mt-auto pt-4 border-t border-slate-800/80">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0B1120] text-slate-300 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-500/30 hover:border-sky-500 text-xs font-semibold transition-all duration-200"
            title={`View Live Demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-semibold transition-all duration-200"
            title={`View Source Code for ${project.title}`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}
