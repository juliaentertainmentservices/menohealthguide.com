import React, { useState } from 'react';
import { Header } from './components/Header';
import { BlogHome } from './components/BlogHome';
import { SingleArticle } from './components/SingleArticle';
import { AdPlacementsShowcase } from './components/AdPlacementsShowcase';
import { CssInspector } from './components/CssInspector';
import { HtmlTemplateView } from './components/HtmlTemplateView';
import { Footer } from './components/Footer';
import { 
  FileCode, 
  Layout, 
  BookOpen, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Maximize2, 
  Copy, 
  Download, 
  Check, 
  Eye, 
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'article' | 'template' | 'adsense' | 'css'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('1');
  const [viewportMode, setViewportMode] = useState<'full' | 'desktop' | 'tablet' | 'mobile'>('full');
  const [simulatedAds, setSimulatedAds] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopyCss = async () => {
    try {
      const res = await fetch('/style.css');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      showToast('style.css copied to clipboard!');
    } catch {
      showToast('style.css ready in workspace');
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const res = await fetch('/template.html');
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'template.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('template.html downloaded successfully!');
    } catch {
      showToast('Downloading template.html...');
    }
  };

  const handleDownloadCss = async () => {
    try {
      const res = await fetch('/style.css');
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/css' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'style.css';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('style.css downloaded successfully!');
    } catch {
      showToast('Downloading style.css...');
    }
  };

  const handleOpenArticle = (id: string) => {
    setSelectedArticleId(id);
    setActiveView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Viewport Container Widths
  const getViewportWidthClass = () => {
    switch (viewportMode) {
      case 'mobile':
        return 'max-w-[390px] mx-auto border-x border-[#E8E4DF] shadow-2xl my-4 rounded-2xl overflow-hidden';
      case 'tablet':
        return 'max-w-[768px] mx-auto border-x border-[#E8E4DF] shadow-2xl my-4 rounded-xl overflow-hidden';
      case 'desktop':
        return 'max-w-[1200px] mx-auto border-x border-[#E8E4DF] shadow-xl my-4 rounded-lg overflow-hidden';
      case 'full':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8] flex flex-col font-sans text-[#2D3748] antialiased">
      {/* Top Workspace Control Bar */}
      <div className="sticky top-0 z-50 bg-[#1E293B] text-white border-b border-[#334155] px-4 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Brand & Theme Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8A2B5] inline-block animate-pulse" />
              MenoHealthGuide <span className="font-sans font-normal text-xs text-[#94A3B8] hidden sm:inline">| Layout &amp; CSS System</span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center bg-[#0F172A] rounded-lg p-1 border border-[#334155] overflow-x-auto">
              <button
                onClick={() => setActiveView('home')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                  activeView === 'home'
                    ? 'bg-[#9D7B8C] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Blog Home & Layout Grid"
              >
                <Layout className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Blog Home</span>
              </button>

              <button
                onClick={() => setActiveView('article')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                  activeView === 'article'
                    ? 'bg-[#9D7B8C] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Single Article Reading View"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Article View</span>
              </button>

              <button
                onClick={() => setActiveView('template')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                  activeView === 'template'
                    ? 'bg-[#344D5E] text-white shadow-sm ring-1 ring-[#C8A2B5]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Semantic HTML Layout Template (template.html)"
              >
                <FileCheck className="w-3.5 h-3.5 text-[#C8A2B5]" />
                <span>HTML Template</span>
              </button>

              <button
                onClick={() => setActiveView('adsense')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                  activeView === 'adsense'
                    ? 'bg-[#4A6B82] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Google AdSense Placements Showcase"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AdSense Slots</span>
              </button>

              <button
                onClick={() => setActiveView('css')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                  activeView === 'css'
                    ? 'bg-[#9D7B8C] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                title="View style.css source"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>style.css</span>
              </button>
            </div>
          </div>

          {/* Right Controls: Viewport simulator & Export */}
          <div className="flex items-center gap-2">
            {/* Ad Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#0F172A] rounded-lg p-0.5 border border-[#334155]">
              <button
                onClick={() => setSimulatedAds(false)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  !simulatedAds ? 'bg-[#334155] text-white' : 'text-[#94A3B8]'
                }`}
                title="Show Google AdSense Wireframe Placeholders"
              >
                Wireframe Ads
              </button>
              <button
                onClick={() => setSimulatedAds(true)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  simulatedAds ? 'bg-[#9D7B8C] text-white' : 'text-[#94A3B8]'
                }`}
                title="Show Simulated Health Sponsor Creatives"
              >
                Simulated Ads
              </button>
            </div>

            {/* Responsive Device Toggles */}
            <div className="hidden lg:flex items-center bg-[#0F172A] rounded-lg p-0.5 border border-[#334155]">
              <button
                onClick={() => setViewportMode('full')}
                className={`p-1.5 rounded transition-all ${
                  viewportMode === 'full' ? 'bg-[#334155] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Full Width Responsive (100%)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('desktop')}
                className={`p-1.5 rounded transition-all ${
                  viewportMode === 'desktop' ? 'bg-[#334155] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Desktop (1200px)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                className={`p-1.5 rounded transition-all ${
                  viewportMode === 'tablet' ? 'bg-[#334155] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Tablet (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded transition-all ${
                  viewportMode === 'mobile' ? 'bg-[#334155] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
                title="Mobile (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download Template button */}
            <button
              onClick={handleDownloadTemplate}
              className="flex items-center gap-1 bg-[#344D5E] hover:bg-[#4A6B82] text-white px-2.5 py-1.5 rounded-md font-medium transition-colors border border-[#7092AA]"
              title="Download HTML Layout Template"
            >
              <Download className="w-3.5 h-3.5 text-[#C8A2B5]" />
              <span className="hidden sm:inline">HTML</span>
            </button>

            {/* Direct Export CSS Buttons */}
            <button
              onClick={handleDownloadCss}
              className="flex items-center gap-1 bg-[#9D7B8C] hover:bg-[#7A5C6C] text-white px-2.5 py-1.5 rounded-md font-medium transition-colors shadow-sm"
              title="Download style.css file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CSS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E293B] text-white px-4 py-2.5 rounded-xl shadow-2xl border border-[#9D7B8C] flex items-center gap-2 text-xs font-semibold animate-fade-in">
          <Check className="w-4 h-4 text-[#C8A2B5]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area in Selected Viewport Frame */}
      <div className={`flex-1 transition-all duration-300 ${getViewportWidthClass()} bg-[#FAF9F6]`}>
        <div className="meno-page-wrapper">
          {/* Header Navigation */}
          <Header
            currentCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveView('home');
            }}
            onOpenArticle={handleOpenArticle}
            onViewChange={setActiveView}
            activeView={activeView}
          />

          {/* Active View Container */}
          {activeView === 'home' && (
            <BlogHome
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenArticle={handleOpenArticle}
              simulatedAds={simulatedAds}
            />
          )}

          {activeView === 'article' && (
            <SingleArticle
              articleId={selectedArticleId}
              onBack={() => setActiveView('home')}
              onOpenArticle={handleOpenArticle}
              simulatedAds={simulatedAds}
            />
          )}

          {activeView === 'template' && (
            <HtmlTemplateView
              simulatedAds={simulatedAds}
              onOpenArticle={handleOpenArticle}
            />
          )}

          {activeView === 'adsense' && (
            <AdPlacementsShowcase
              simulatedAds={simulatedAds}
              onToggleSimulatedAds={() => setSimulatedAds(!simulatedAds)}
            />
          )}

          {activeView === 'css' && (
            <CssInspector />
          )}

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

