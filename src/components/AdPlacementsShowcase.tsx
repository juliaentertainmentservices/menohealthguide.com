import React, { useState } from 'react';
import { AdSenseBanner } from './AdSenseBanner';
import { Code, Copy, Check, ShieldCheck, Layout, Info, CheckCircle2 } from 'lucide-react';

interface AdPlacementsShowcaseProps {
  simulatedAds: boolean;
  onToggleSimulatedAds: () => void;
}

export const AdPlacementsShowcase: React.FC<AdPlacementsShowcaseProps> = ({
  simulatedAds,
  onToggleSimulatedAds,
}) => {
  const [copiedSlot, setCopiedSlot] = useState<string | null>(null);

  const copyCode = (codeText: string, slotId: string) => {
    navigator.clipboard?.writeText(codeText);
    setCopiedSlot(slotId);
    setTimeout(() => setCopiedSlot(null), 2200);
  };

  const leaderboardCode = `<!-- MenoHealthGuide: Header Leaderboard Banner (728x90 Desktop / 320x50 Mobile) -->
<div class="meno-ad-wrapper meno-ad-leaderboard">
  <div class="meno-container">
    <div class="meno-ad-card">
      <span class="meno-ad-disclosure">Advertisement &bull; Google AdSense</span>
      <div class="meno-ad-content">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  </div>
</div>`;

  const inArticleCode = `<!-- MenoHealthGuide: Responsive In-Article Native Banner -->
<div class="meno-ad-wrapper meno-ad-in-article">
  <div class="meno-ad-card">
    <span class="meno-ad-disclosure">Sponsored Resource &bull; Google AdSense</span>
    <div class="meno-ad-content">
      <ins class="adsbygoogle"
           style="display:block; text-align:center;"
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="2345678901"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  </div>
</div>`;

  const sidebarCode = `<!-- MenoHealthGuide: Sidebar Banner (300x250 or 300x600) -->
<div class="meno-ad-wrapper meno-ad-sidebar meno-ad-sidebar-mrec">
  <div class="meno-ad-card">
    <span class="meno-ad-disclosure">Advertisement &bull; Google AdSense</span>
    <div class="meno-ad-content">
      <ins class="adsbygoogle"
           style="display:inline-block;width:300px;height:250px"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="3456789012"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  </div>
</div>`;

  return (
    <div className="meno-container py-10">
      <div className="max-w-4xl mx-auto">
        {/* Intro Header */}
        <div className="text-center mb-10">
          <span className="meno-badge meno-badge-mauve mb-3">
            <Layout className="w-3.5 h-3.5" /> Monetization Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1E293B] mb-3">
            Google AdSense Styled Placements
          </h1>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            Polished, compliant, non-intrusive AdSense banner placeholders styled specifically to harmonize with MenoHealthGuide's soft mauve and slate blue aesthetic.
          </p>

          <div className="mt-5 inline-flex items-center gap-3 bg-white p-2 rounded-full border border-[#E8E4DF] shadow-sm">
            <span className="text-xs font-semibold text-[#2D3748] pl-2">Display Mode:</span>
            <button
              onClick={onToggleSimulatedAds}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                !simulatedAds
                  ? 'bg-[#9D7B8C] text-white shadow-sm'
                  : 'bg-transparent text-[#64748B] hover:text-[#2D3748]'
              }`}
            >
              Wireframe Placeholders
            </button>
            <button
              onClick={onToggleSimulatedAds}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                simulatedAds
                  ? 'bg-[#4A6B82] text-white shadow-sm'
                  : 'bg-transparent text-[#64748B] hover:text-[#2D3748]'
              }`}
            >
              Simulated Sponsor Creatives
            </button>
          </div>
        </div>

        {/* Placement 1: Header Leaderboard */}
        <section className="bg-white rounded-2xl border border-[#E8E4DF] p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="meno-badge meno-badge-slate text-[10px]">Placement 01</span>
              <h2 className="text-xl font-serif text-[#1E293B] mt-1 mb-0">
                1. Header Leaderboard Banner
              </h2>
              <div className="text-xs text-[#64748B] mt-0.5">
                Standard Dimensions: 728&times;90 (Desktop) | 320&times;50 / 300&times;100 (Mobile)
              </div>
            </div>
            <button
              onClick={() => copyCode(leaderboardCode, 'leaderboard')}
              className="meno-btn meno-btn-secondary text-xs py-1.5 px-3"
            >
              {copiedSlot === 'leaderboard' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" /> Copied HTML
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Code
                </>
              )}
            </button>
          </div>

          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#F0EDE8] mb-4">
            <AdSenseBanner type="leaderboard" simulated={simulatedAds} />
          </div>

          <div className="bg-[#1E293B] text-[#E2E8F0] rounded-xl p-4 font-mono text-xs overflow-x-auto">
            <pre>{leaderboardCode}</pre>
          </div>
        </section>

        {/* Placement 2: Responsive In-Article Banner */}
        <section className="bg-white rounded-2xl border border-[#E8E4DF] p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="meno-badge meno-badge-mauve text-[10px]">Placement 02</span>
              <h2 className="text-xl font-serif text-[#1E293B] mt-1 mb-0">
                2. Responsive In-Article Native Banner
              </h2>
              <div className="text-xs text-[#64748B] mt-0.5">
                Fluid Width &bull; Automatically adapts to reading container with non-jarring soft gradient
              </div>
            </div>
            <button
              onClick={() => copyCode(inArticleCode, 'in-article')}
              className="meno-btn meno-btn-secondary text-xs py-1.5 px-3"
            >
              {copiedSlot === 'in-article' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" /> Copied HTML
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Code
                </>
              )}
            </button>
          </div>

          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#F0EDE8] mb-4">
            <AdSenseBanner type="in-article" simulated={simulatedAds} />
          </div>

          <div className="bg-[#1E293B] text-[#E2E8F0] rounded-xl p-4 font-mono text-xs overflow-x-auto">
            <pre>{inArticleCode}</pre>
          </div>
        </section>

        {/* Placement 3: Sidebar Banners */}
        <section className="bg-white rounded-2xl border border-[#E8E4DF] p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="meno-badge meno-badge-gold text-[10px]">Placement 03</span>
              <h2 className="text-xl font-serif text-[#1E293B] mt-1 mb-0">
                3. Sidebar Medium Rectangle (300&times;250) & Skyscraper (300&times;600)
              </h2>
              <div className="text-xs text-[#64748B] mt-0.5">
                Fixed 300px width with optional sticky behavior on long-form articles
              </div>
            </div>
            <button
              onClick={() => copyCode(sidebarCode, 'sidebar')}
              className="meno-btn meno-btn-secondary text-xs py-1.5 px-3"
            >
              {copiedSlot === 'sidebar' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" /> Copied HTML
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Code
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF9F6] p-6 rounded-xl border border-[#F0EDE8] mb-4 items-start">
            <div>
              <div className="text-center text-xs font-semibold text-[#4A6B82] mb-2">
                Medium Rectangle (300&times;250)
              </div>
              <AdSenseBanner type="sidebar-mrec" simulated={simulatedAds} />
            </div>

            <div>
              <div className="text-center text-xs font-semibold text-[#9D7B8C] mb-2">
                Half Page Skyscraper (300&times;600)
              </div>
              <AdSenseBanner type="sidebar-skyscraper" simulated={simulatedAds} />
            </div>
          </div>

          <div className="bg-[#1E293B] text-[#E2E8F0] rounded-xl p-4 font-mono text-xs overflow-x-auto">
            <pre>{sidebarCode}</pre>
          </div>
        </section>

        {/* AdSense Best Practice Guidelines */}
        <div className="bg-[#EDF3F7] rounded-2xl border border-[#7092AA]/30 p-6">
          <div className="flex items-center gap-2 text-base font-bold text-[#344D5E] mb-3">
            <ShieldCheck className="w-5 h-5 text-[#4A6B82]" />
            AdSense Compliance & Health Blog UX Best Practices
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#475569]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6B8E76] flex-shrink-0 mt-0.5" />
              <span><strong>Clear Disclosure:</strong> Every placement includes an uppercase "ADVERTISEMENT" badge to comply with Google policies.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6B8E76] flex-shrink-0 mt-0.5" />
              <span><strong>Cumulative Layout Shift (CLS) Protection:</strong> Placeholders have predefined `min-height` values so content doesn't jump when ads load.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6B8E76] flex-shrink-0 mt-0.5" />
              <span><strong>Gentle Color Grading:</strong> Soft mauve and slate borders keep clinical content authoritative while preventing visual clutter.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6B8E76] flex-shrink-0 mt-0.5" />
              <span><strong>Mobile Responsive:</strong> Automatically switches from 728px leaderboard down to 320x50 banner on mobile screens.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
