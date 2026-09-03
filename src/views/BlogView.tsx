import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockBlogs';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  User, 
  Search, 
  Bookmark, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const BlogView: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const CATEGORIES = [
    'All',
    'Career Advice',
    'Resume & CV',
    'Interviews',
    'Public Sector',
    'Negotiation'
  ];

  const featuredPost = BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter(post => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Editorial & Strategy
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
          Career Insights & Executive Playbooks
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
          Tactical guides on technical interviews, total compensation modeling, ATS resume optimization, and federal civil service competitions.
        </p>
      </div>

      {/* Featured Top Article */}
      <div 
        onClick={() => navigateTo('blog-post', featuredPost.id)}
        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100">
          <img
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-200">
                Featured Strategy
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{featuredPost.readTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            {/* Key takeaways teaser */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-slate-900 block">Executive Takeaway:</span>
              <p className="line-clamp-2">{featuredPost.keyTakeaways[0]}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <span className="text-xs font-bold text-slate-900 block">{featuredPost.author.name}</span>
                <span className="text-[11px] text-slate-500">{featuredPost.author.role}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Category Tabs & Search Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-slate-100 rounded-xl">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-white text-slate-900 shadow-2xs font-bold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides & advice..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            onClick={() => navigateTo('blog-post', post.id)}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur-xs text-slate-900 shadow-2xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.publishedDate}</span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-semibold text-slate-900 truncate max-w-[120px]">
                  {post.author.name}
                </span>
              </div>

              <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Read Article <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
