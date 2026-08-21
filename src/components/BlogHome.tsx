import React from 'react';
import { Article, ARTICLES, CATEGORIES, POPULAR_POSTS } from '../data/blogData';
import { AdSenseBanner } from './AdSenseBanner';
import { Clock, Calendar, ArrowRight, ShieldCheck, Bookmark, Share2, Mail, CheckCircle2, Sparkles } from 'lucide-react';

interface BlogHomeProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenArticle: (id: string) => void;
  simulatedAds: boolean;
}

export const BlogHome: React.FC<BlogHomeProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenArticle,
  simulatedAds,
}) => {
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES.filter((a) => !a.featured)
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="meno-main-content">
      {/* 1. Header Leaderboard Google AdSense Banner */}
      <AdSenseBanner type="leaderboard" simulated={simulatedAds} />

      <div className="meno-container">
        {/* 2. Responsive Hero Section (Featured Guide) */}
        <section className="meno-hero" aria-label="Featured Story">
          <div className="meno-hero-grid">
            <div className="meno-hero-content">
              <div className="meno-badge-group">
                <span className="meno-badge meno-badge-mauve">
                  <Sparkles className="w-3 h-3" /> Featured Clinical Guide
                </span>
                <span className="meno-badge meno-badge-slate">
                  {featuredArticle.category}
                </span>
                {featuredArticle.medicallyReviewedBy && (
                  <span className="meno-badge meno-badge-gold">
                    <ShieldCheck className="w-3 h-3" /> Medically Reviewed
                  </span>
                )}
              </div>

              <h1 className="meno-hero-title">
                <a
                  href={`#article-${featuredArticle.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenArticle(featuredArticle.id);
                  }}
                >
                  {featuredArticle.title}
                </a>
              </h1>

              <p className="meno-hero-excerpt">
                {featuredArticle.excerpt}
              </p>

              <div className="meno-meta-row">
                <div className="meno-author-meta">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="meno-author-avatar"
                  />
                  <div>
                    <div className="meno-author-name">{featuredArticle.author.name}</div>
                    <div className="text-xs text-[#64748B]">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <span className="meno-meta-divider" />

                <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                  <Clock className="w-3.5 h-3.5 text-[#9D7B8C]" />
                  <span>{featuredArticle.readTime}</span>
                </div>

                <span className="meno-meta-divider" />

                <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                  <Calendar className="w-3.5 h-3.5 text-[#4A6B82]" />
                  <span>{featuredArticle.publishDate}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  className="meno-btn meno-btn-primary"
                  onClick={() => onOpenArticle(featuredArticle.id)}
                >
                  Read Full Clinical Guide <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="meno-hero-image-wrapper">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="meno-hero-image"
              />
            </div>
          </div>
        </section>

        {/* 3. Main Content & Sidebar Grid */}
        <div className="meno-main-grid">
          {/* Primary Column: Latest Articles */}
          <main>
            <div className="meno-section-header">
              <div>
                <h2 className="meno-section-title">
                  {selectedCategory === 'All' ? 'Evidence-Based Articles' : `${selectedCategory} Guides`}
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="hidden md:flex items-center gap-1.5">
                <button
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                    selectedCategory === 'All'
                      ? 'bg-[#9D7B8C] text-white shadow-sm'
                      : 'bg-white text-[#64748B] hover:text-[#2D3748] border border-[#E8E4DF]'
                  }`}
                  onClick={() => onSelectCategory('All')}
                >
                  All Topics
                </button>
                {CATEGORIES.slice(0, 3).map((cat) => (
                  <button
                    key={cat.name}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                      selectedCategory === cat.name.split(' ')[0]
                        ? 'bg-[#9D7B8C] text-white shadow-sm'
                        : 'bg-white text-[#64748B] hover:text-[#2D3748] border border-[#E8E4DF]'
                    }`}
                    onClick={() => onSelectCategory(cat.name.split(' ')[0])}
                  >
                    {cat.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid (2 Column responsive) */}
            <div className="meno-cards-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="meno-card" id={`card-article-${article.id}`}>
                  <div className="meno-card-media">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="meno-card-img"
                    />
                    <div className="meno-card-category-overlay">
                      <span className={`meno-badge meno-badge-${article.categoryColor} shadow-sm backdrop-blur-sm bg-white/90`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="meno-card-body">
                    <h3 className="meno-card-title">
                      <a
                        href={`#article-${article.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenArticle(article.id);
                        }}
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p className="meno-card-excerpt">
                      {article.excerpt}
                    </p>

                    <div className="meno-card-footer">
                      <div className="flex items-center gap-2">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="font-semibold text-xs text-[#2D3748] truncate max-w-[120px]">
                          {article.author.name.split(',')[0]}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#9D7B8C]" />
                          {article.readTime}
                        </span>
                        <button
                          className="text-[#94A3B8] hover:text-[#9D7B8C] transition-colors p-1"
                          title="Bookmark"
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Article saved to your reading list!');
                          }}
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mid-Feed Responsive In-Article / Native Banner */}
            <div className="my-8">
              <AdSenseBanner type="in-article" simulated={simulatedAds} />
            </div>

            {/* Additional Articles Row */}
            <div className="meno-cards-grid mt-6">
              {ARTICLES.slice(0, 2).map((article) => (
                <article key={`more-${article.id}`} className="meno-card">
                  <div className="meno-card-media">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="meno-card-img"
                    />
                    <div className="meno-card-category-overlay">
                      <span className="meno-badge meno-badge-slate bg-white/90">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="meno-card-body">
                    <h3 className="meno-card-title">
                      <a
                        href={`#article-${article.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenArticle(article.id);
                        }}
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="meno-card-excerpt">
                      {article.excerpt}
                    </p>
                    <div className="meno-card-footer">
                      <span className="text-xs text-[#64748B]">{article.publishDate}</span>
                      <button
                        className="text-xs font-semibold text-[#9D7B8C] hover:text-[#7A5C6C] flex items-center gap-1"
                        onClick={() => onOpenArticle(article.id)}
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>

          {/* Secondary Column: Sidebar Widgets */}
          <aside className="meno-sidebar">
            {/* Widget 1: Medical Advisory Credential */}
            <div className="meno-credential-box">
              <img
                src="https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=240"
                alt="Dr. Elena Vance"
                className="meno-credential-avatar"
              />
              <div className="meno-credential-name">Dr. Elena Vance, MD</div>
              <div className="meno-credential-role">Chief Medical Reviewer &bull; OB/GYN</div>
              <p className="meno-credential-bio">
                "Every guide published on MenoHealthGuide is rigorously verified against peer-reviewed clinical literature to provide trusted, stigma-free guidance."
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-[#6B8E76] font-semibold bg-[#EDF5F0] py-1.5 px-3 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Physician Reviewed
              </div>
            </div>

            {/* Widget 2: Google AdSense Sidebar Medium Rectangle (300x250) */}
            <AdSenseBanner type="sidebar-mrec" simulated={simulatedAds} />

            {/* Widget 3: Categories Breakdown */}
            <div className="meno-widget">
              <h3 className="meno-widget-title">Browse by Topic</h3>
              <ul className="meno-category-list">
                {CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <a
                      href={`#${cat.name}`}
                      className="meno-category-item"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCategory(cat.name.split(' ')[0]);
                      }}
                    >
                      <span>{cat.name}</span>
                      <span className="meno-category-count">{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 4: Popular Posts Compact List */}
            <div className="meno-widget">
              <h3 className="meno-widget-title">Most Read This Week</h3>
              <div>
                {POPULAR_POSTS.map((post, idx) => (
                  <div key={idx} className="meno-card-horizontal">
                    <div className="meno-card-horizontal-media">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="meno-card-horizontal-img"
                      />
                    </div>
                    <div className="meno-card-horizontal-content">
                      <h4 className="meno-card-horizontal-title">
                        <a
                          href="#read"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenArticle('1');
                          }}
                        >
                          {post.title}
                        </a>
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                        <Clock className="w-3 h-3 text-[#9D7B8C]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 5: Newsletter Subscription */}
            <div className="meno-newsletter-box">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3>The Midlife Compass</h3>
              <p>
                Get weekly clinical insights, hormonal wellness updates, and meal plans delivered to your inbox.
              </p>
              <form
                className="meno-newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to MenoHealthGuide!');
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="meno-input"
                  required
                />
                <button type="submit" className="meno-btn meno-btn-primary w-full">
                  Subscribe Free
                </button>
              </form>
              <span className="text-[11px] text-[#A0C0D6] block mt-2">
                No spam. Unsubscribe anytime.
              </span>
            </div>

            {/* Widget 6: Sticky Skyscraper Google AdSense Banner (300x600) */}
            <div className="meno-ad-sticky-sidebar">
              <AdSenseBanner type="sidebar-skyscraper" simulated={simulatedAds} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
