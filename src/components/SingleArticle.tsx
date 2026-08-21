import React from 'react';
import { Article, ARTICLES, POPULAR_POSTS } from '../data/blogData';
import { AdSenseBanner } from './AdSenseBanner';
import { Clock, Calendar, ShieldCheck, AlertCircle, ArrowLeft, Share2, Bookmark, Check, Sparkles } from 'lucide-react';

interface SingleArticleProps {
  articleId: string;
  onBack: () => void;
  onOpenArticle: (id: string) => void;
  simulatedAds: boolean;
}

export const SingleArticle: React.FC<SingleArticleProps> = ({
  articleId,
  onBack,
  onOpenArticle,
  simulatedAds,
}) => {
  const article = ARTICLES.find((a) => a.id === articleId) || ARTICLES[0];
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="meno-main-content">
      {/* 1. Header Leaderboard AdSense */}
      <AdSenseBanner type="leaderboard" simulated={simulatedAds} />

      <div className="meno-container">
        {/* Breadcrumb & Navigation */}
        <div className="pt-6 pb-2 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A6B82] hover:text-[#9D7B8C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Guides
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-[#E8E4DF] bg-white text-[#64748B] hover:text-[#2D3748]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              {copied ? 'Link Copied' : 'Share'}
            </button>
          </div>
        </div>

        <div className="meno-main-grid">
          {/* Main Article Content */}
          <main>
            <article className="bg-white rounded-2xl border border-[#E8E4DF] p-6 sm:p-10 shadow-sm">
              <header className="meno-article-header">
                <div className="meno-badge-group">
                  <span className={`meno-badge meno-badge-${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="meno-badge meno-badge-gold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Medically Reviewed
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-serif text-[#1E293B] leading-tight mb-4">
                  {article.title}
                </h1>

                <p className="text-lg text-[#64748B] leading-relaxed mb-6 font-medium">
                  {article.excerpt}
                </p>

                {/* Author & Reviewer Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#F0EDE8]">
                  <div className="flex items-center gap-3">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-sm text-[#1E293B]">
                        Written by {article.author.name}
                      </div>
                      <div className="text-xs text-[#64748B]">{article.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9D7B8C]" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#4A6B82]" />
                      {article.publishDate}
                    </span>
                  </div>
                </div>
              </header>

              {/* Hero Image */}
              <img
                src={article.imageUrl}
                alt={article.title}
                className="meno-article-hero-img"
              />

              {/* Medical Disclaimer Box */}
              <div className="meno-medical-disclaimer">
                <AlertCircle className="meno-disclaimer-icon w-5 h-5" />
                <div>
                  <strong className="block text-[#785A1A] font-semibold mb-0.5">
                    Medical & Clinical Disclaimer
                  </strong>
                  This guide is intended for educational purposes only and does not substitute for professional medical advice, clinical diagnosis, or personalized treatment. Always consult your OB/GYN, endocrinologist, or qualified healthcare provider regarding specific symptoms or treatment options.
                </div>
              </div>

              {/* Article Prose Body */}
              <div className="meno-prose">
                <p className="text-lg leading-relaxed text-[#334155]">
                  During perimenopause and menopause, dramatic fluctuations in ovarian hormones—specifically <strong>17&beta;-estradiol</strong> and <strong>progesterone</strong>—fundamentally reshape neuro-metabolic pathways, circadian rhythms, and cellular repair across the female body.
                </p>

                <h2>Understanding the Neuro-Endocrine Shift</h2>
                <p>
                  Estrogen is far more than a reproductive hormone: it serves as a master neuroprotective regulator. Estrogen receptors (ER&alpha; and ER&beta;) are heavily concentrated in the hippocampus (memory consolidation), amygdala (emotional processing), and hypothalamus (thermoregulation and sleep pacing).
                </p>

                <blockquote>
                  "When estradiol levels plunge unpredictably, the brain temporarily experiences a bioenergetic deficit. This is not mental decline—it is an active neural remodeling phase that can be clinically supported."
                </blockquote>

                <p>
                  As ovarian output transitions, the brain must adapt by shifting glucose utilization pathways. Understanding this neuro-biological mechanism validates that symptoms like brain fog, verbal recall lag, and nighttime arousal are biochemical—not psychological weaknesses.
                </p>

                {/* 2. Responsive In-Article Google AdSense Placement */}
                <AdSenseBanner type="in-article" simulated={simulatedAds} />

                <h2>Key Clinical Interventions & Lifestyle Protocols</h2>
                <p>
                  Leading menopause societies, including the Menopause Society (formerly NAMS) and the International Menopause Society (IMS), highlight a multi-modal approach combining lifestyle foundations with targeted medical therapies:
                </p>

                <ul>
                  <li>
                    <strong>Transdermal Hormone Therapy:</strong> Bioidentical transdermal estradiol patches or gels bypass liver first-pass metabolism, significantly minimizing thrombosis risk while restoring hormonal equilibrium.
                  </li>
                  <li>
                    <strong>Micronized Progesterone for Sleep Architecture:</strong> Oral micronized progesterone metabolizes into allopregnanolone, a potent positive modulator of GABA-A receptors that directly restores restorative deep slow-wave sleep.
                  </li>
                  <li>
                    <strong>Targeted Micronutrient Synergy:</strong> Combining Magnesium Glycinate (300-400 mg) with Vitamin D3/K2 and anti-inflammatory Omega-3 fatty acids supports neuronal membranes and vasomotor stability.
                  </li>
                </ul>

                {/* Key Takeaway Callout Box */}
                <div className="meno-callout-box">
                  <h4>Clinical Takeaway for Your Next Appointment</h4>
                  <p className="text-sm text-[#475569] mb-0">
                    Keep a structured 14-day log tracking symptom timing, hot flash frequency, sleep onset latency, and cycle irregularity. Bring this objective data to your healthcare provider to discuss individualized hormone or non-hormonal treatment pathways.
                  </p>
                </div>

                <h3>When to Seek Immediate Consultation</h3>
                <p>
                  Always schedule an evaluation if you experience abnormal uterine bleeding (postmenopausal spotting or sudden heavy flooding), unexplained rapid weight shifts, persistent severe depressive episodes, or unmanaged palpitations.
                </p>
              </div>

              {/* Author Bio Card */}
              <div className="meno-author-bio-card">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="meno-author-bio-img"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-serif font-bold text-lg text-[#1E293B]">
                      {article.author.name}
                    </span>
                    <span className="meno-badge meno-badge-mauve text-[10px] py-0.5 px-2">
                      Author
                    </span>
                  </div>
                  <div className="text-xs text-[#9D7B8C] font-semibold mb-2">
                    {article.author.role}
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-0">
                    Dr. Vance is a recognized advocate for midlife women's health with over 18 years of clinical experience specializing in perimenopause management, integrative endocrinology, and evidence-based longevity medicine.
                  </p>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="meno-sidebar">
            <AdSenseBanner type="sidebar-mrec" simulated={simulatedAds} />

            <div className="meno-widget">
              <h3 className="meno-widget-title">Related Clinical Guides</h3>
              <div>
                {ARTICLES.filter((a) => a.id !== article.id).slice(0, 3).map((item) => (
                  <div key={item.id} className="meno-card-horizontal">
                    <div className="meno-card-horizontal-media">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="meno-card-horizontal-img"
                      />
                    </div>
                    <div className="meno-card-horizontal-content">
                      <h4 className="meno-card-horizontal-title">
                        <a
                          href={`#article-${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenArticle(item.id);
                          }}
                        >
                          {item.title}
                        </a>
                      </h4>
                      <div className="text-[11px] text-[#64748B]">
                        {item.readTime} &bull; {item.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="meno-ad-sticky-sidebar">
              <AdSenseBanner type="sidebar-skyscraper" simulated={simulatedAds} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
