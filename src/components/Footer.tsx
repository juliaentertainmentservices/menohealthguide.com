import React, { useState } from 'react';
import { Sparkles, Heart, ShieldCheck, Mail, ArrowUp, Shield, Scale, AlertTriangle, X } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal?: (modal: 'privacy' | 'terms' | 'disclaimer' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const [localModal, setLocalModal] = useState<'privacy' | 'terms' | 'disclaimer' | 'contact' | null>(null);

  const handleOpen = (type: 'privacy' | 'terms' | 'disclaimer' | 'contact', e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenLegalModal) {
      onOpenLegalModal(type);
    } else {
      setLocalModal(type);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="meno-footer" id="site-footer">
        <div className="meno-container">
          <div className="meno-footer-grid">
            {/* Col 1: Brand Info */}
            <div className="meno-footer-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D7B8C] to-[#4A6B82] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  Meno<span className="text-[#C8A2B5]">Health</span>Guide
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mb-4">
                MenoHealthGuide delivers compassionate, clinical-grade medical journalism and evidence-based strategies to empower women navigating perimenopause, menopause, and healthy longevity.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <ShieldCheck className="w-4 h-4 text-[#C8A2B5]" />
                <span>Adherent to HONcode Principles of Health Web Publishing</span>
              </div>
            </div>

            {/* Col 2: Clinical Topics */}
            <div className="meno-footer-col">
              <h4>Health Topics</h4>
              <ul className="meno-footer-links">
                <li><a href="#peri">Perimenopause Symptoms</a></li>
                <li><a href="#hrt">Hormone Therapy (HRT)</a></li>
                <li><a href="#gut">Estrobolome & Gut Care</a></li>
                <li><a href="#sleep">Vasomotor & Sleep Support</a></li>
                <li><a href="#bone">Bone & Heart Longevity</a></li>
              </ul>
            </div>

            {/* Col 3: Medical Ethics & Company */}
            <div className="meno-footer-col">
              <h4>Company & Editorial</h4>
              <ul className="meno-footer-links">
                <li><a href="#about">About MenoHealthGuide</a></li>
                <li><a href="#advisory">Medical Advisory Board</a></li>
                <li><a href="#editorial">Editorial Standards & Review</a></li>
                <li><a href="#ads">Advertising & Sponsorship Policy</a></li>
              </ul>
            </div>

            {/* Col 4: Required Legal & Trust Links */}
            <div className="meno-footer-col">
              <h4>Trust & Legal</h4>
              <ul className="meno-footer-links">
                <li>
                  <a
                    href="/privacy-policy"
                    id="link-privacy-policy"
                    onClick={(e) => handleOpen('privacy', e)}
                    className="flex items-center gap-1.5 hover:text-[#C8A2B5] transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    id="link-terms-of-service"
                    onClick={(e) => handleOpen('terms', e)}
                    className="flex items-center gap-1.5 hover:text-[#C8A2B5] transition-colors"
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/medical-disclaimer"
                    id="link-medical-disclaimer"
                    onClick={(e) => handleOpen('disclaimer', e)}
                    className="flex items-center gap-1.5 hover:text-[#C8A2B5] transition-colors"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Medical Disclaimer</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    id="link-contact-us"
                    onClick={(e) => handleOpen('contact', e)}
                    className="flex items-center gap-1.5 hover:text-[#C8A2B5] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Bottom Bar */}
          <div className="meno-footer-legal-bar">
            <div>
              &copy; {new Date().getFullYear()} MenoHealthGuide.com. All rights reserved. Content on this site is for educational purposes only.
            </div>

            <nav className="meno-footer-legal-nav" aria-label="Footer Legal Links">
              <a href="/privacy-policy" onClick={(e) => handleOpen('privacy', e)}>Privacy Policy</a>
              <span>&bull;</span>
              <a href="/terms-of-service" onClick={(e) => handleOpen('terms', e)}>Terms</a>
              <span>&bull;</span>
              <a href="/medical-disclaimer" onClick={(e) => handleOpen('disclaimer', e)}>Medical Disclaimer</a>
              <span>&bull;</span>
              <a href="/contact-us" onClick={(e) => handleOpen('contact', e)}>Contact Us</a>
            </nav>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors ml-auto sm:ml-0"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Standalone Legal Modal if local */}
      {localModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-[#E8E4DF]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DF] mb-4">
              <h3 className="font-serif text-lg font-bold text-[#1E293B]">
                {localModal === 'privacy' && 'Privacy Policy'}
                {localModal === 'terms' && 'Terms of Service'}
                {localModal === 'disclaimer' && 'Medical Disclaimer'}
                {localModal === 'contact' && 'Contact Us'}
              </h3>
              <button onClick={() => setLocalModal(null)} className="p-1 rounded text-gray-500 hover:text-gray-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-[#475569] leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto">
              {localModal === 'privacy' && (
                <p>MenoHealthGuide respects your personal privacy. We do not sell or monetize personal patient data. Google AdSense cookies may be used to serve personalized and non-personalized advertisements.</p>
              )}
              {localModal === 'terms' && (
                <p>By using MenoHealthGuide.com, you agree to access content for personal, non-commercial health education. All editorial copy is protected by copyright.</p>
              )}
              {localModal === 'disclaimer' && (
                <p>The information on this website is for educational and informational purposes only. It is not intended as medical advice. Always consult with a qualified healthcare provider regarding your symptoms.</p>
              )}
              {localModal === 'contact' && (
                <p>Reach our editorial desk directly at: <strong>editor@menohealthguide.com</strong>. We aim to respond within 24–48 hours.</p>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E4DF] flex justify-end">
              <button onClick={() => setLocalModal(null)} className="meno-btn meno-btn-secondary text-xs py-1.5 px-4">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

