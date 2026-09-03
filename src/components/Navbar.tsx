import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Briefcase, 
  Landmark, 
  Bookmark, 
  Search, 
  Menu, 
  X, 
  BookOpen, 
  User, 
  PlusCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    screen, 
    navigateTo, 
    candidate, 
    setAuthModalOpen, 
    setPostJobModalOpen 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const savedCount = candidate.savedJobIds.length;

  const handleNavClick = (target: any) => {
    navigateTo(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:bg-blue-700 transition-colors">
              <Briefcase className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                  Career<span className="text-blue-600">Vantage</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  PRO
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Verified Global & Public Sector Careers
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                screen === 'home'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-link-jobs"
              onClick={() => handleNavClick('jobs')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                screen === 'jobs' || screen === 'job-detail'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4 text-slate-400" />
              Find Jobs
            </button>

            <button
              id="nav-link-gov-jobs"
              onClick={() => handleNavClick('gov-jobs')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                screen === 'gov-jobs'
                  ? 'bg-indigo-50 text-indigo-900 font-semibold border border-indigo-200/60'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Landmark className="w-4 h-4 text-indigo-600" />
              Government Jobs
              <span className="ml-1 w-2 h-2 rounded-full bg-indigo-600 inline-block animate-pulse"></span>
            </button>

            <button
              id="nav-link-blog"
              onClick={() => handleNavClick('blog')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                screen === 'blog' || screen === 'blog-post'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              Insights
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Bookmarks Quick Pill */}
            <button
              id="nav-saved-jobs"
              onClick={() => handleNavClick('profile')}
              className="relative p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="View Saved Jobs"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Post a Job button for recruiters */}
            <button
              id="btn-post-job-nav"
              onClick={() => setPostJobModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-colors shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5 text-slate-500" />
              Post a Job
            </button>

            <div className="h-6 w-px bg-slate-200"></div>

            {/* Candidate Profile Avatar / CTA */}
            <button
              id="btn-candidate-profile-nav"
              onClick={() => handleNavClick('profile')}
              className={`flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full border transition-all ${
                screen === 'profile'
                  ? 'border-blue-500 bg-blue-50/70 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <img
                src={candidate.avatarUrl}
                alt={candidate.name}
                className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
              />
              <div className="text-left leading-tight hidden lg:block">
                <span className="text-xs font-semibold text-slate-900 block max-w-[120px] truncate">
                  {candidate.name}
                </span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('profile')}
              className="relative p-2 text-slate-700"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                screen === 'home' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700'
              }`}
            >
              Home
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => handleNavClick('jobs')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                screen === 'jobs' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-500" />
                Find Jobs
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => handleNavClick('gov-jobs')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                screen === 'gov-jobs' ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-indigo-600" />
                Government Jobs
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                Official
              </span>
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                screen === 'blog' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-500" />
                Career Insights
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => handleNavClick('profile')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                screen === 'profile' ? 'bg-blue-50 text-blue-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                Candidate Dashboard & Saved Jobs
              </span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full font-bold">
                {savedCount}
              </span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setPostJobModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg text-center text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Post a Vacancy (Employers)
            </button>

            <button
              onClick={() => {
                setAuthModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
            >
              Sign In / Account Switcher
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
