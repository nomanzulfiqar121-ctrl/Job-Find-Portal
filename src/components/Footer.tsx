import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Landmark, 
  ArrowRight,
  Check
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, updateFilter, showToast } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      showToast('Please enter a valid business or personal email', 'warning');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to CareerVantage executive job alerts!', 'success');
  };

  const handleCategoryClick = (cat: string) => {
    updateFilter('category', cat);
    navigateTo('jobs');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Career<span className="text-blue-400">Vantage</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The verified recruitment gateway connecting senior corporate professionals and civic talent with global enterprise leaders and public sector ministries.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Executive Desk: +1 (800) 492-7480</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@careervantage.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>555 Mission Street, Suite 2800, San Francisco, CA</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Equal Opportunity & Civil Service Merit Compliant</span>
            </div>
          </div>

          {/* Col 2: For Job Seekers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Job Seekers
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => navigateTo('jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Explore All Openings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { updateFilter('workMode', ['Remote']); navigateTo('jobs'); }} 
                  className="hover:text-white transition-colors"
                >
                  Remote Positions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('Software & Technology')} 
                  className="hover:text-white transition-colors"
                >
                  Engineering & Tech
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('Finance & Banking')} 
                  className="hover:text-white transition-colors"
                >
                  Finance & Investment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('profile')} 
                  className="hover:text-white transition-colors"
                >
                  Candidate Dashboard & CV
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('blog')} 
                  className="hover:text-white transition-colors"
                >
                  Salary & Career Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Public Sector & Gov */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-indigo-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Public Sector
              </h4>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => navigateTo('gov-jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Federal & Civil Vacancies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('gov-jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Defense & Cyber Security
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('gov-jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Public Healthcare & NHS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('gov-jobs')} 
                  className="hover:text-white transition-colors"
                >
                  State & Provincial Roads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('gov-jobs')} 
                  className="hover:text-white transition-colors"
                >
                  Official Gazette Notices
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Alerts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Executive Alerts
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive curated weekly senior openings, salary telemetry, and public sector recruitment windows.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscribed! Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-800/90 text-white placeholder-slate-500 text-xs rounded-lg px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-blue-500 pr-9"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-500">
                  Zero spam. Unsubscribe anytime with 1-click.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CareerVantage Platform Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security & Compliance</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
