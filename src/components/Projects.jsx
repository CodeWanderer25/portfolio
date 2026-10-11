import React from 'react';
import { Sparkles, FolderGit2, Info } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-[#080C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>&lt;Projects /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects I've Built
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            A selection of practical web applications highlighting React component design, full-stack REST API development, and generative AI integration.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Featured Projects Grid (3 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>


      </div>
    </section>
  );
}
