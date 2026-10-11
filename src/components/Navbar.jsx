import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Approach', href: '#approach' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C15]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <span>PG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight">
                Frontend / MERN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/20"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
