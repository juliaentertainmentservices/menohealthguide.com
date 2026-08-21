import React, { useState } from 'react';
import { Menu, X, Search, Heart, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenArticle: (id: string) => void;
  onViewChange: (view: 'home' | 'article' | 'adsense' | 'css' | 'tokens') => void;
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onViewChange,
  activeView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'All Articles', category: 'All' },
    { label: 'Perimenopause', category: 'Perimenopause' },
    { label: 'Hormone Therapy', category: 'Hormone Therapy' },
    { label: 'Nutrition & Gut', category: 'Nutrition & Gut' },
    { label: 'Sleep & Mind', category: 'Sleep & Mind' },
    { label: 'Bone & Heart', category: 'Bone & Heart Health' },
  ];

  const handleNavClick = (cat: string) => {
    onSelectCategory(cat);
    onViewChange('home');
    setMobileMenuOpen(false);
  };

  return (
    <header className="meno-navbar" id="meno-site-header">
      <div className="meno-container">
        <div className="meno-nav-inner">
          {/* Brand Identity */}
          <a
            href="#home"
            className="meno-brand"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('home');
              onSelectCategory('All');
            }}
          >
            <div className="meno-brand-icon">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="meno-brand-text">
              <span className="meno-brand-title">
                Meno<span>Health</span>Guide
              </span>
              <span className="meno-brand-tagline">Evidence-Based Midlife Wellness</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="meno-nav-menu" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeView === 'home' && currentCategory === item.category;
              return (
                <button
                  key={item.category}
                  className={`meno-nav-link bg-transparent border-0 cursor-pointer ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.category)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Navigation Actions */}
          <div className="meno-nav-actions">
            {/* Search Input Popover or Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-white border border-[#E8E4DF] rounded-full px-3 py-1 shadow-sm">
                  <Search className="w-4 h-4 text-[#64748B] mr-2" />
                  <input
                    type="text"
                    placeholder="Search symptoms, HRT..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-xs bg-transparent border-none outline-none w-36 sm:w-48 text-[#2D3748]"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-[#64748B] hover:text-[#2D3748] ml-1 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  className="p-2 rounded-full text-[#64748B] hover:text-[#9D7B8C] hover:bg-[#FAF5F8] transition-colors"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search articles"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* CTA Button */}
            <button
              className="meno-btn meno-btn-primary hidden sm:inline-flex"
              onClick={() => {
                onViewChange('article');
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Guide</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="meno-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`meno-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <ul className="meno-mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.category}>
              <button
                className="meno-mobile-nav-link w-full text-left bg-transparent border-0 cursor-pointer"
                onClick={() => handleNavClick(item.category)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              className="meno-btn meno-btn-primary w-full"
              onClick={() => {
                onViewChange('article');
                setMobileMenuOpen(false);
              }}
            >
              <Heart className="w-4 h-4 mr-2" /> Read Featured Guide
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
