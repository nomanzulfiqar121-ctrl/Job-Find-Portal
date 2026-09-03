import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { PostJobModal } from './components/PostJobModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';

import { HomeView } from './views/HomeView';
import { JobsView } from './views/JobsView';
import { JobDetailView } from './views/JobDetailView';
import { GovJobsView } from './views/GovJobsView';
import { BlogView } from './views/BlogView';
import { BlogPostView } from './views/BlogPostView';
import { ProfileView } from './views/ProfileView';

const MainContent: React.FC = () => {
  const { screen } = useApp();
  const activeScreen = screen || 'home';

  return (
    <main className="flex-1">
      {activeScreen === 'home' && <HomeView />}
      {activeScreen === 'jobs' && <JobsView />}
      {activeScreen === 'job-detail' && <JobDetailView />}
      {activeScreen === 'gov-jobs' && <GovJobsView />}
      {activeScreen === 'blog' && <BlogView />}
      {activeScreen === 'blog-post' && <BlogPostView />}
      {activeScreen === 'profile' && <ProfileView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <MainContent />
        <Footer />

        {/* Global Action Modals & Feedback */}
        <ApplyModal />
        <PostJobModal />
        <AuthModal />
        <Toast />
      </div>
    </AppProvider>
  );
}
