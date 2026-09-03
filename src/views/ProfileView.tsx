import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobCard } from '../components/JobCard';
import { 
  User, 
  FileText, 
  Bookmark, 
  Send, 
  Settings, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  Trash2, 
  ExternalLink,
  Edit3,
  Check,
  Building2
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { 
    candidate, 
    allJobs, 
    navigateTo, 
    toggleSaveJob, 
    openApplyModal, 
    updateCandidateProfile, 
    uploadCandidateResume,
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'saved' | 'applied' | 'resume' | 'preferences'>('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Editable local form state
  const [name, setName] = useState(candidate.name);
  const [title, setTitle] = useState(candidate.title);
  const [location, setLocation] = useState(candidate.location);
  const [bio, setBio] = useState(candidate.bio);
  const [phone, setPhone] = useState(candidate.phone);
  const [targetSalary, setTargetSalary] = useState(candidate.targetSalary);
  const [preferredWorkMode, setPreferredWorkMode] = useState(candidate.preferredWorkMode);

  // Saved jobs list
  const savedJobs = allJobs.filter(j => candidate.savedJobIds.includes(j.id));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateCandidateProfile({
      name,
      title,
      location,
      bio,
      phone,
      targetSalary,
      preferredWorkMode
    });
    setIsEditing(false);
  };

  const handleResumeFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeStr = `${(file.size / 1024).toFixed(0)} KB`;
      uploadCandidateResume({ name: file.name, size: sizeStr });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Candidate Profile Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src={candidate.avatarUrl}
                alt={candidate.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-slate-100 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-600 text-white rounded-full ring-2 ring-white" title="Verified Profile">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
                  {candidate.name}
                </h1>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  Verified Candidate
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-700">
                {candidate.title}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {candidate.location}
                </span>
                <span>•</span>
                <span>{candidate.experienceYears} Years Track Record</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">{candidate.targetSalary}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Editing' : 'Edit Profile'}</span>
            </button>
            <button
              onClick={() => navigateTo('jobs')}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
            >
              Search Openings
            </button>
          </div>
        </div>

        {/* Profile Strength Meter */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">Profile Strength:</span>
            <div className="w-48 bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[90%]"></div>
            </div>
            <span className="font-bold text-emerald-700">90% (All Clear)</span>
          </div>

          <span className="text-slate-500">
            Resume parsed • Contact verified • Target preferences active
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'overview'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <User className="w-4 h-4" />
          Overview & Credentials
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'saved'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          Saved Bookmarks
          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
            {savedJobs.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('applied')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'applied'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Send className="w-4 h-4" />
          Applied Positions
          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
            {candidate.appliedJobs.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('resume')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'resume'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          Curriculum Vitae
        </button>

        <button
          onClick={() => setActiveTab('preferences')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'preferences'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Settings className="w-4 h-4" />
          Alert Preferences
        </button>
      </div>

      {/* Tab 1: Overview & Editable Details */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-heading font-bold text-slate-900">
                Update Candidate Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Current Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Annual Compensation</label>
                  <input
                    type="text"
                    value={targetSalary}
                    onChange={(e) => setTargetSalary(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Work Mode</label>
                  <input
                    type="text"
                    value={preferredWorkMode}
                    onChange={(e) => setPreferredWorkMode(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Professional Bio & Career Objective</label>
                <textarea
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  Save Profile Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                <div>
                  <h3 className="text-base font-heading font-bold text-slate-900 mb-2">
                    Executive Biography
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {candidate.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-base font-heading font-bold text-slate-900 mb-3">
                    Validated Technical Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-sm font-heading font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Candidate Credentials
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Email:</span>
                    <span className="text-slate-800 font-semibold">{candidate.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Phone:</span>
                    <span className="text-slate-800 font-semibold">{candidate.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Target Work Mode:</span>
                    <span className="text-slate-800 font-semibold">{candidate.preferredWorkMode}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Compensation Range:</span>
                    <span className="text-emerald-700 font-bold">{candidate.targetSalary}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Saved Jobs */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Bookmarked Opportunities ({savedJobs.length})
            </h2>
            <span className="text-xs text-slate-500">
              Saved listings remain available until application deadlines expire
            </span>
          </div>

          {savedJobs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No Saved Jobs Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the bookmark icon on any job card to save it here for fast review and application.
              </p>
              <button
                onClick={() => navigateTo('jobs')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
              >
                Browse Vacancies
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {savedJobs.map(job => (
                <JobCard key={job.id} job={job} variant="grid" />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Applied Jobs Track Record */}
      {activeTab === 'applied' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Application Tracker ({candidate.appliedJobs.length})
            </h2>
            <span className="text-xs text-slate-500">
              Real-time submission pipeline and HR review status
            </span>
          </div>

          {candidate.appliedJobs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <Send className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No Active Applications</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                When you submit applications, your tracking history, timestamps, and hiring stages appear here.
              </p>
              <button
                onClick={() => navigateTo('jobs')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
              >
                Apply for Openings
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {candidate.appliedJobs.map((appRecord, idx) => {
                const job = allJobs.find(j => j.id === appRecord.jobId);
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      {job ? (
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                          <Building2 className="w-6 h-6 text-slate-400" />
                        </div>
                      )}

                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Applied: {appRecord.appliedDate}
                        </span>
                        <h4 
                          onClick={() => job && navigateTo('job-detail', job.id)}
                          className="text-base font-heading font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                        >
                          {job ? job.title : 'Corporate Position'}
                        </h4>
                        <div className="text-xs text-slate-600 flex items-center gap-2">
                          <span className="font-semibold text-slate-800">{job?.company}</span>
                          <span>•</span>
                          <span>{job?.location}</span>
                        </div>
                        {appRecord.resumeName && (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                            <FileText className="w-3 h-3 text-slate-400" />
                            <span>Submitted CV: {appRecord.resumeName}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end justify-between w-full sm:w-auto shrink-0 gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        {appRecord.status}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        HR Response SLA: 48-72 hrs
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: CV / Resume Management */}
      {activeTab === 'resume' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-heading font-bold text-slate-900">
                Active Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Automatically pre-filled and verified across your corporate and public sector applications.
              </p>
            </div>

            <label className="cursor-pointer px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-2 shadow-xs shrink-0">
              <UploadCloud className="w-4 h-4" />
              <span>Upload New Version</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeFileSelect}
                className="hidden"
              />
            </label>
          </div>

          {/* Active File Card */}
          <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {candidate.resumeFileName}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                  <span>Size: {candidate.resumeFileSize}</span>
                  <span>•</span>
                  <span>Updated: {candidate.resumeLastUpdated}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> ATS Parsed (100% Score)
                  </span>
                </div>
              </div>
            </div>

            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white border border-blue-200 text-blue-700">
              Primary Active CV
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h5 className="font-bold text-slate-800">
              ATS Compatibility Assessment:
            </h5>
            <p>
              Your current resume uses clean semantic headings, standard bullet structures, and includes 14 high-value technology keywords. Compatible with Greenhouse, Workday, Taleo, and USAJOBS parsers.
            </p>
          </div>
        </div>
      )}

      {/* Tab 5: Alert Preferences */}
      {activeTab === 'preferences' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <h3 className="text-base font-heading font-bold text-slate-900 pb-3 border-b border-slate-100">
            Notification & Career Match Settings
          </h3>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Weekly Executive Digest
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Receive a curated Sunday summary of senior openings matching your target compensation.
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked={candidate.emailAlerts.weeklyDigest}
                onChange={() => showToast('Weekly digest preference updated', 'info')}
                className="w-5 h-5 rounded text-blue-600 mt-1"
              />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Instant Match Alerts
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get notified within 15 minutes when verified Fortune 500 employers post roles in your stack.
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked={candidate.emailAlerts.instantMatches}
                onChange={() => showToast('Instant match preference updated', 'info')}
                className="w-5 h-5 rounded text-blue-600 mt-1"
              />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Civil Service & Government Gazette Notifications
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Alerts for federal grade openings (GS-13+) and specialized defense intelligence postings.
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked={candidate.emailAlerts.governmentNotices}
                onChange={() => showToast('Government notice alert updated', 'info')}
                className="w-5 h-5 rounded text-blue-600 mt-1"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
