import React from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockBlogs';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  BookOpen, 
  Briefcase, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const BlogPostView: React.FC = () => {
  const { selectedBlogId, navigateTo, showToast, allJobs } = useApp();

  const post = BLOG_POSTS.find(p => p.id === selectedBlogId) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Article link copied to clipboard!', 'info');
  };

  // Find 2 related jobs for sidebar
  const matchingJobs = allJobs.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={() => navigateTo('blog')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 shadow-2xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Guide</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 pt-2 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
            />
            <div>
              <span className="font-bold text-slate-900 block">{post.author.name}</span>
              <span className="text-[11px] text-slate-500">{post.author.role}</span>
            </div>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.publishedDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/8] bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Main Article Body */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Executive Takeaways Box */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Core Takeaways & Executive Summary</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Render markdown-style paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl font-heading font-bold text-slate-900 pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={index} className="p-4 my-3 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-slate-800 italic text-sm">
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }
              return (
                <p key={index} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Filed under:</span>
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Sidebar: Author Box & Matching Vacancies */}
        <div className="lg:col-span-4 space-y-6">
          {/* Author Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              About the Author
            </h4>
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <span className="font-bold text-slate-900 text-sm block">
                  {post.author.name}
                </span>
                <span className="text-xs text-slate-500">
                  {post.author.role}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides executive compensation advisory and talent acquisition consulting for Fortune 500 tech firms and civic administrative boards.
            </p>
          </div>

          {/* Relevant Vacancies */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Related Openings</span>
            </h4>
            <div className="space-y-3">
              {matchingJobs.map(j => (
                <div
                  key={j.id}
                  onClick={() => navigateTo('job-detail', j.id)}
                  className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-slate-50 transition-all cursor-pointer group"
                >
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 line-clamp-1">
                    {j.title}
                  </h5>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span>{j.company}</span>
                    <span className="font-semibold text-slate-700">${(j.salaryMin / 1000).toFixed(0)}k+</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigateTo('jobs')}
              className="w-full py-2 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50/60 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1"
            >
              <span>Explore All Vacancies</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
