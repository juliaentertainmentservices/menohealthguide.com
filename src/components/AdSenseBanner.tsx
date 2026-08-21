import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface AdSenseBannerProps {
  type: 'leaderboard' | 'in-article' | 'sidebar-mrec' | 'sidebar-skyscraper';
  simulated?: boolean;
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  type,
  simulated = false,
  className = '',
}) => {
  if (type === 'leaderboard') {
    return (
      <div className={`meno-ad-wrapper meno-ad-leaderboard ${className}`} id="meno-header-ad-placement">
        <div className="meno-container">
          <div className="meno-ad-card">
            <span className="meno-ad-disclosure">
              <ShieldCheck className="w-3 h-3 text-[#9D7B8C]" /> Advertisement &bull; Google AdSense (728&times;90 / 320&times;50)
            </span>
            <div className="meno-ad-content">
              {simulated ? (
                <div className="meno-ad-mock-creative flex-row justify-between px-6 py-2 bg-gradient-to-r from-[#FAF5F8] to-[#EDF3F7] text-[#2D3748] border border-[#E2DED8]">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-[#9D7B8C] text-white flex items-center justify-center font-bold text-xs">
                      CLINICAL
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm text-[#1E293B]">
                        Midlife Women's Sleep & Hormone Study 2026
                      </div>
                      <div className="text-xs text-[#64748B] hidden sm:block">
                        FDA-regulated non-hormonal clinical trial enrolling eligible participants.
                      </div>
                    </div>
                  </div>
                  <a
                    href="#sponsor"
                    className="meno-btn meno-btn-primary text-xs py-1.5 px-3 whitespace-nowrap"
                    onClick={(e) => e.preventDefault()}
                  >
                    Check Eligibility <ExternalLink className="w-3 h-3 ml-1 inline" />
                  </a>
                </div>
              ) : (
                <div className="meno-ad-mock-creative flex flex-col items-center justify-center p-2 text-center">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7A5C6C] font-semibold">
                    <span>Google AdSense Header Leaderboard</span>
                    <span className="px-2 py-0.5 rounded bg-[#EAE6DF] text-[#4A6B82] text-[10px]">
                      data-ad-format="horizontal"
                    </span>
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    Responsive Dimensions: 728&times;90 (Desktop) | 320&times;50 (Mobile)
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'in-article') {
    return (
      <div className={`meno-ad-wrapper meno-ad-in-article ${className}`} id="meno-in-article-ad">
        <div className="meno-ad-card">
          <span className="meno-ad-disclosure">
            <Sparkles className="w-3 h-3 text-[#4A6B82]" /> Sponsored Resource &bull; AdSense In-Article
          </span>
          <div className="meno-ad-content">
            {simulated ? (
              <div className="meno-ad-mock-creative flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white border border-[#E8E4DF] text-left">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#EDF3F7] text-[#4A6B82] flex items-center justify-center font-serif text-lg font-bold flex-shrink-0">
                    MH
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-base text-[#1E293B] mb-1">
                      Doctor-Designed Perimenopause Daily Tracker App
                    </h5>
                    <p className="text-xs text-[#64748B] m-0 max-w-md">
                      Log hot flashes, sleep cycles, mood shifts, and export verified symptom graphs for your next OB/GYN appointment.
                    </p>
                  </div>
                </div>
                <button
                  className="meno-btn meno-btn-secondary text-xs px-4 py-2 flex-shrink-0"
                  onClick={(e) => e.preventDefault()}
                >
                  Download Free Guide
                </button>
              </div>
            ) : (
              <div className="meno-ad-mock-creative flex flex-col items-center justify-center p-6 text-center">
                <div className="font-mono text-xs text-[#4A6B82] font-semibold flex items-center gap-2">
                  <span>Google AdSense Responsive In-Article Unit</span>
                  <span className="px-2 py-0.5 rounded bg-[#F4ECF0] text-[#7A5C6C] text-[10px]">
                    data-ad-layout="in-article"
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-1 mb-0">
                  Fluid width matching content margin &bull; Recommended between 2nd & 3rd heading
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sidebar Ad (300x250 or 300x600)
  const isSky = type === 'sidebar-skyscraper';
  return (
    <div className={`meno-ad-wrapper meno-ad-sidebar ${isSky ? 'meno-ad-sidebar-skyscraper' : 'meno-ad-sidebar-mrec'} ${className}`} id={`meno-sidebar-${type}`}>
      <div className="meno-ad-card">
        <span className="meno-ad-disclosure">
          <ShieldCheck className="w-3 h-3 text-[#9D7B8C]" /> Advertisement &bull; Google AdSense
        </span>
        <div className="meno-ad-content">
          {simulated ? (
            <div className={`meno-ad-mock-creative flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-[#FAF5F8] to-[#FFFFFF] border border-[#E8E4DF] ${isSky ? 'h-[480px]' : 'h-[250px]'}`}>
              <div className="w-12 h-12 rounded-full bg-[#9D7B8C]/15 text-[#7A5C6C] flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="font-serif font-bold text-base text-[#1E293B] mb-1">
                Pure Transdermal Magnesium Spray
              </div>
              <div className="text-xs text-[#64748B] mb-4 max-w-[240px]">
                High-absorption topical magnesium formulated for calm nights and muscle relaxation.
              </div>
              <div className="text-xs font-semibold text-[#9D7B8C] mb-3">
                Verified 100% USP Grade
              </div>
              <button
                className="meno-btn meno-btn-primary text-xs px-4 py-2 w-full max-w-[200px]"
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </button>
            </div>
          ) : (
            <div className={`meno-ad-mock-creative flex flex-col items-center justify-center p-4 text-center ${isSky ? 'h-[480px]' : 'h-[250px]'}`}>
              <div className="font-mono text-xs text-[#7A5C6C] font-semibold mb-1">
                Google AdSense {isSky ? '300×600 Half Page' : '300×250 Medium Rectangle'}
              </div>
              <div className="text-[11px] text-[#64748B] max-w-[220px]">
                Fixed width 300px sidebar unit &bull; slot ID placement for high-engagement sticky or inline sidebar
              </div>
              <div className="mt-3 px-2 py-1 rounded bg-[#EDF3F7] text-[#344D5E] font-mono text-[10px]">
                data-ad-slot="1234567890"
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
