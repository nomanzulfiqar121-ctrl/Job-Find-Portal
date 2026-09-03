import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { JobCard } from '../components/JobCard';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  LayoutGrid, 
  List, 
  Briefcase, 
  Landmark, 
  Check, 
  ChevronDown,
  Building2,
  DollarSign
} from 'lucide-react';
import { EmploymentType, ExperienceLevel, WorkMode } from '../types';

export const JobsView: React.FC = () => {
  const { allJobs, filters, updateFilter, resetFilters } = useApp();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter options constants
  const JOB_TYPES: EmploymentType[] = ['Full-Time', 'Part-Time', 'Contract', 'Internship'];
  const WORK_MODES: WorkMode[] = ['Remote', 'Hybrid', 'On-Site'];
  const EXP_LEVELS: ExperienceLevel[] = ['Entry-Level', 'Mid-Level', 'Senior', 'Lead / Principal', 'Executive'];
  const CATEGORIES = [
    'All',
    'Software & Technology',
    'Finance & Banking',
    'Healthcare & Life Sciences',
    'Government & Public Sector',
    'Design & Creative',
    'Human Resources',
    'Marketing & Communications',
    'Supply Chain & Logistics'
  ];

  // Helper toggle multi-select
  const toggleArrayFilter = <T extends string>(
    currentArray: T[], 
    value: T, 
    filterKey: 'workMode' | 'employmentType' | 'experienceLevel'
  ) => {
    const updated = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(filterKey, updated);
  };

  // Memoized Filtered & Sorted Jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      // Keyword search
      if (filters.keyword.trim()) {
        const query = filters.keyword.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(query);
        const matchCompany = job.company.toLowerCase().includes(query);
        const matchSkills = job.skills.some(s => s.toLowerCase().includes(query));
        const matchDesc = job.description.toLowerCase().includes(query);
        if (!matchTitle && !matchCompany && !matchSkills && !matchDesc) return false;
      }

      // Location search
      if (filters.location.trim()) {
        const loc = filters.location.toLowerCase();
        const matchLoc = job.location.toLowerCase().includes(loc) || job.country.toLowerCase().includes(loc);
        if (!matchLoc) return false;
      }

      // Category
      if (filters.category && filters.category !== 'All') {
        if (job.category !== filters.category) return false;
      }

      // Work Mode
      if (filters.workMode.length > 0) {
        if (!filters.workMode.includes(job.workMode)) return false;
      }

      // Employment Type
      if (filters.employmentType.length > 0) {
        if (!filters.employmentType.includes(job.employmentType)) return false;
      }

      // Experience Level
      if (filters.experienceLevel.length > 0) {
        if (!filters.experienceLevel.includes(job.experienceLevel)) return false;
      }

      // Salary Range
      if (job.salaryMax < filters.salaryRange[0]) return false;
      if (filters.salaryRange[1] > 0 && job.salaryMin > filters.salaryRange[1]) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'salary-high') {
        return b.salaryMax - a.salaryMax;
      }
      if (filters.sortBy === 'applicants-low') {
        return a.applicantsCount - b.applicantsCount;
      }
      // 'relevant' or 'newest'
      return 0;
    });
  }, [allJobs, filters]);

  const activeFilterCount = 
    (filters.keyword ? 1 : 0) +
    (filters.location ? 1 : 0) +
    (filters.category !== 'All' ? 1 : 0) +
    filters.workMode.length +
    filters.employmentType.length +
    filters.experienceLevel.length +
    (filters.salaryRange[0] > 0 || filters.salaryRange[1] < 300000 ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header & Search Area */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Explore Careers
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-1">
            Search Open Positions
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Filter through verified enterprise and public sector opportunities across the globe.
          </p>
        </div>

        {/* Large Multi-Field Search Bar (Reference 3 architecture) */}
        <div className="bg-white p-3 rounded-2xl border border-slate-300 shadow-md shadow-slate-200/50 flex flex-col md:flex-row items-stretch gap-3">
          {/* Keyword */}
          <div className="flex-1 flex items-center gap-2.5 px-3 py-1.5 border-b md:border-b-0 md:border-r border-slate-200">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => updateFilter('keyword', e.target.value)}
              placeholder="Search job title, tech stack or keywords..."
              className="w-full text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {filters.keyword && (
              <button 
                onClick={() => updateFilter('keyword', '')} 
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center gap-2.5 px-3 py-1.5 border-b md:border-b-0 md:border-r border-slate-200">
            <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={filters.location}
              onChange={(e) => updateFilter('location', e.target.value)}
              placeholder="Location, city or 'Remote'..."
              className="w-full text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {filters.location && (
              <button 
                onClick={() => updateFilter('location', '')} 
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="w-full md:w-56 px-3 py-1.5 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-slate-400 shrink-0" />
            <select
              value={filters.category}
              onChange={(e) => updateFilter('category', e.target.value)}
              className="w-full text-sm bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer"
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Left Sidebar + Right Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Panel (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs sticky top-24">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-700" />
              <h3 className="font-heading font-bold text-base text-slate-900">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  {activeFilterCount}
                </span>
              )}
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          {/* Salary Min / Max Range */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Salary Minimum (USD/yr)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800">
                ${(filters.salaryRange[0] / 1000).toFixed(0)}k+
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="220000"
              step="10000"
              value={filters.salaryRange[0]}
              onChange={(e) => updateFilter('salaryRange', [Number(e.target.value), filters.salaryRange[1]])}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Job Type Checkboxes */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Employment Type
            </label>
            <div className="space-y-2">
              {JOB_TYPES.map(type => {
                const checked = filters.employmentType.includes(type);
                return (
                  <label 
                    key={type} 
                    className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer hover:text-slate-950 select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleArrayFilter(filters.employmentType, type, 'employmentType')}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Work Mode Checkboxes */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Work Mode
            </label>
            <div className="space-y-2">
              {WORK_MODES.map(mode => {
                const checked = filters.workMode.includes(mode);
                return (
                  <label 
                    key={mode} 
                    className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer hover:text-slate-950 select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleArrayFilter(filters.workMode, mode, 'workMode')}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span>{mode}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Experience Level Checkboxes */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Experience Level
            </label>
            <div className="space-y-2">
              {EXP_LEVELS.map(exp => {
                const checked = filters.experienceLevel.includes(exp);
                return (
                  <label 
                    key={exp} 
                    className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer hover:text-slate-950 select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleArrayFilter(filters.experienceLevel, exp, 'experienceLevel')}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span>{exp}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Job Results Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-5">
          
          {/* Controls Bar: Count, Sort, View Switcher & Mobile Filter Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                All Openings ({filteredJobs.length})
              </h2>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg flex items-center gap-1.5 shadow-2xs"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-medium text-slate-500 hidden sm:inline">Sort:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter('sortBy', e.target.value as any)}
                  className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="newest">Recently Posted</option>
                  <option value="salary-high">Highest Compensation</option>
                  <option value="applicants-low">Fewest Applicants</option>
                </select>
              </div>

              {/* Grid / List Layout Switcher */}
              <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  aria-label="Grid layout"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  aria-label="List layout"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Pills Bar */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-400">Active filters:</span>
              {filters.keyword && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  Keyword: {filters.keyword}
                  <button onClick={() => updateFilter('keyword', '')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              )}
              {filters.location && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  Location: {filters.location}
                  <button onClick={() => updateFilter('location', '')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              )}
              {filters.category !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200">
                  {filters.category}
                  <button onClick={() => updateFilter('category', 'All')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              )}
              {filters.workMode.map(m => (
                <span key={m} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  {m}
                  <button onClick={() => toggleArrayFilter(filters.workMode, m, 'workMode')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.employmentType.map(t => (
                <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  {t}
                  <button onClick={() => toggleArrayFilter(filters.employmentType, t, 'employmentType')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.experienceLevel.map(e => (
                <span key={e} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  {e}
                  <button onClick={() => toggleArrayFilter(filters.experienceLevel, e, 'experienceLevel')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.salaryRange[0] > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ${(filters.salaryRange[0] / 1000).toFixed(0)}k+ min
                  <button onClick={() => updateFilter('salaryRange', [0, filters.salaryRange[1]])} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>
          )}

          {/* Job Results List / Grid */}
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800">
                No positions match your search criteria
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Try widening your search terms, removing location filters, or resetting all search filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-5' : 'space-y-4'}>
              {filteredJobs.slice(0, visibleCount).map(job => (
                <JobCard key={job.id} job={job} variant={viewMode} />
              ))}
            </div>
          )}

          {/* Pagination / Load More */}
          {filteredJobs.length > visibleCount && (
            <div className="text-center pt-6">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-6 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl shadow-2xs transition-colors"
              >
                Load More Openings ({filteredJobs.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Slide Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-xs lg:hidden animate-in fade-in duration-150">
          <div className="w-full max-w-xs sm:max-w-sm bg-white h-full p-6 overflow-y-auto space-y-6 shadow-2xl animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Filter Vacancies
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Salary Range */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Min Salary: ${(filters.salaryRange[0] / 1000).toFixed(0)}k/yr
              </label>
              <input
                type="range"
                min="0"
                max="220000"
                step="10000"
                value={filters.salaryRange[0]}
                onChange={(e) => updateFilter('salaryRange', [Number(e.target.value), filters.salaryRange[1]])}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Employment Type */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Employment Type
              </label>
              {JOB_TYPES.map(type => (
                <label key={type} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={filters.employmentType.includes(type)}
                    onChange={() => toggleArrayFilter(filters.employmentType, type, 'employmentType')}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Work Mode */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Work Mode
              </label>
              {WORK_MODES.map(mode => (
                <label key={mode} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={filters.workMode.includes(mode)}
                    onChange={() => toggleArrayFilter(filters.workMode, mode, 'workMode')}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span>{mode}</span>
                </label>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
