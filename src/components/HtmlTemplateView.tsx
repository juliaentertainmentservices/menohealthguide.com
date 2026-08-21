import React, { useState } from 'react';
import { 
  FileCode, 
  Copy, 
  Download, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  FileText,
  Mail,
  Scale,
  Shield,
  Layers,
  X
} from 'lucide-react';

interface HtmlTemplateViewProps {
  simulatedAds: boolean;
  onOpenArticle?: (id: string) => void;
}

export const HtmlTemplateView: React.FC<HtmlTemplateViewProps> = ({
  simulatedAds
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'specs'>('preview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | 'contact' | null>(null);

  const rawHtmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navigating Perimenopause: Evidence-Based Strategies for Sleep, Hormones &amp; Vitality | MenoHealthGuide</title>
  <meta name="description" content="Physician-reviewed guide to managing perimenopause symptoms, hormonal shifts, sleep disturbances, and vitality with evidence-backed lifestyle and medical protocols.">
  <link rel="canonical" href="https://menohealthguide.com/perimenopause-sleep-hormones-guide">
  
  <!-- Favicon / Brand Meta -->
  <meta name="theme-color" content="#9D7B8C">
  <meta property="og:site_name" content="MenoHealthGuide">
  <meta property="og:title" content="Navigating Perimenopause: Evidence-Based Strategies for Sleep, Hormones &amp; Vitality">
  <meta property="og:description" content="Physician-reviewed strategies to regain clarity, balance hormones, and improve sleep during the menopause transition.">
  <meta property="og:type" content="article">

  <!-- Google Fonts: Playfair Display & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Core Design System Stylesheet Linking to css/style.css -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Structured Data: MedicalWebPage & Article Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Navigating Perimenopause: Evidence-Based Strategies for Sleep, Hormones & Vitality",
    "description": "Comprehensive physician-reviewed guide to navigating perimenopause symptoms, hormonal fluctuation, and evidence-based clinical protocols.",
    "author": {
      "@type": "Person",
      "name": "Dr. Elena Vance, MD",
      "jobTitle": "Board-Certified OB/GYN & NAMS Certified Menopause Practitioner"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MenoHealthGuide",
      "url": "https://menohealthguide.com"
    },
    "datePublished": "2026-08-18",
    "dateModified": "2026-08-20"
  }
  </script>
</head>
<body>
  <div class="meno-page-wrapper">

    <!-- 1. Header with Logo and Navigation Links -->
    <header class="meno-navbar" id="site-header">
      <div class="meno-container">
        <div class="meno-nav-inner">
          
          <!-- Logo & Brand Identity -->
          <a href="/" class="meno-brand" aria-label="MenoHealthGuide Home">
            <div class="meno-brand-icon" aria-hidden="true">✦</div>
            <div class="meno-brand-text">
              <span class="meno-brand-title">Meno<span>Health</span>Guide</span>
              <span class="meno-brand-tagline">Evidence-Based Midlife Wellness</span>
            </div>
          </a>

          <!-- Main Navigation Links -->
          <nav class="meno-nav-menu" aria-label="Primary Navigation">
            <a href="/" class="meno-nav-link active">Home</a>
            <a href="/category/perimenopause" class="meno-nav-link">Perimenopause</a>
            <a href="/category/hormone-therapy" class="meno-nav-link">Hormone Therapy (HRT)</a>
            <a href="/category/nutrition-gut" class="meno-nav-link">Nutrition &amp; Gut</a>
            <a href="/category/sleep-mind" class="meno-nav-link">Sleep &amp; Mind</a>
            <a href="/category/longevity" class="meno-nav-link">Bone &amp; Heart</a>
          </nav>

          <!-- Header Right CTA / Search Action -->
          <div class="meno-nav-actions">
            <a href="#newsletter" class="meno-btn meno-btn-primary">
              <span>Free Checklist</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Top AdSense Leaderboard Banner (728x90 Desktop / 320x50 Mobile Placeholder) -->
    <div class="meno-ad-wrapper meno-ad-leaderboard" id="header-ad-banner" aria-label="Advertisement Banner">
      <div class="meno-container">
        <div class="meno-ad-card">
          <span class="meno-ad-disclosure">Advertisement</span>
          <div class="meno-ad-content">
            <div class="meno-ad-mock-creative">
              <span>Google AdSense Leaderboard Banner</span>
              <span class="meno-ad-dimension">728 &times; 90 / 320 &times; 50 Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Two-Column Layout (Main Content Area + Right Sidebar) -->
    <div class="meno-main-content">
      <div class="meno-container">
        <div class="meno-main-grid">

          <!-- Left Column: Main Article Content -->
          <main class="meno-article-primary" id="main-content">
            <article itemscope itemtype="https://schema.org/Article">
              
              <!-- Breadcrumbs Navigation -->
              <nav class="meno-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">&rsaquo;</span>
                <a href="/category/perimenopause">Perimenopause</a>
                <span aria-hidden="true">&rsaquo;</span>
                <span aria-current="page">Sleep, Hormones &amp; Vitality</span>
              </nav>

              <!-- Article Header -->
              <header class="meno-article-header">
                <div style="display:flex; gap:0.5rem; margin-bottom:0.75rem; flex-wrap:wrap;">
                  <span class="meno-ad-dimension" style="background:#f4ecf0; color:#7a5c6c; border-radius:9999px; padding:0.25rem 0.75rem; font-weight:700;">HORMONE HEALTH</span>
                  <span class="meno-ad-dimension" style="background:#edf3f7; color:#344d5e; border-radius:9999px; padding:0.25rem 0.75rem; font-weight:700;">PHYSICIAN REVIEWED</span>
                </div>

                <!-- Main Page Title <h1> -->
                <h1 class="meno-article-title" itemprop="headline">
                  Navigating Perimenopause: Evidence-Based Strategies for Sleep, Hormones &amp; Vitality
                </h1>

                <!-- Author & Editorial Metadata -->
                <div class="meno-article-meta">
                  <div class="meno-article-author">
                    <img src="https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=120" alt="Dr. Elena Vance, MD" class="meno-article-author-img" width="38" height="38">
                    <div>
                      <span style="font-weight:600; color:#2d3748; display:block;" itemprop="author">Dr. Elena Vance, MD</span>
                      <span style="font-size:0.75rem; color:#64748b;">Board-Certified OB/GYN &bull; NCMP</span>
                    </div>
                  </div>
                  <span style="color:#94a3b8;">&bull;</span>
                  <time datetime="2026-08-18" itemprop="datePublished">August 18, 2026</time>
                  <span style="color:#94a3b8;">&bull;</span>
                  <span>7 min read</span>
                </div>
              </header>

              <!-- 4. In-Article AdSense Banner Container (Placed Right Under Main Page Title) -->
              <div class="meno-ad-wrapper meno-ad-in-article" id="in-article-top-ad" aria-label="In-Article Advertisement">
                <div class="meno-ad-card">
                  <span class="meno-ad-disclosure">Sponsored Ad &bull; In-Article Native Placement</span>
                  <div class="meno-ad-content">
                    <div class="meno-ad-mock-creative">
                      <span>Google AdSense In-Article Native Ad</span>
                      <span class="meno-ad-dimension">Responsive Fluid Width (High Conversion Unit)</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Featured Image Media Container -->
              <figure class="meno-featured-media">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" alt="Mindful woman resting comfortably enjoying calm restorative morning" class="meno-featured-img" itemprop="image">
                <figcaption style="padding:0.75rem 1rem; font-size:0.8rem; color:#64748b; background:#ffffff; border-top:1px solid #e8e4df;">
                  Neuroimaging demonstrates how estrogen receptor fluctuations directly impact sleep architecture and thermoregulation during perimenopause.
                </figcaption>
              </figure>

              <!-- Executive Key Takeaways Callout -->
              <div class="meno-key-takeaways" role="region" aria-label="Key Medical Takeaways">
                <h4>✦ Key Evidence-Based Takeaways</h4>
                <ul>
                  <li><strong>Progesterone Drops First:</strong> Luteal phase progesterone decline often precedes estrogen volatility, explaining early insomnia and heightened anxiety.</li>
                  <li><strong>Thermoregulatory Reset:</strong> Vasomotor symptoms (night sweats) originate in hypothalamus KNDy neuron hyperactivity triggered by falling estrogen levels.</li>
                  <li><strong>Targeted Interventions:</strong> Combining sleep hygiene, micronized progesterone or transdermal estradiol where clinically appropriate, and strength training yields synergistic results.</li>
                </ul>
              </div>

              <!-- Main Article Prose -->
              <div class="meno-prose" itemprop="articleBody">
                <p>
                  Perimenopause is not simply a countdown to the cessation of menstruation; it is a profound neuro-endocrine transition that reshapes metabolic pathways, circadian rhythm stability, and cellular vitality. For millions of women between ages 38 and 52, erratic hormone oscillations present as 3:00 AM wakefulness, brain fog, vasomotor hot flushes, and uncharacteristic mood shifts.
                </p>

                <h2>Understanding the Neuro-Endocrine Shift</h2>
                <p>
                  Contrary to common belief, estrogen levels during perimenopause do not experience a gentle, linear decline. Instead, ovarian follicle depletion leads to erratic spikes and steep valleys in 17&beta;-estradiol production, paired with an earlier and sustained decline in calming progesterone.
                </p>
                <p>
                  Because estrogen acts as a key neuro-protective agent that facilitates cerebral glucose metabolism and modulates neurotransmitters like serotonin and acetylcholine, these fluctuations directly influence cognitive stamina and deep slow-wave sleep.
                </p>

                <h2>Targeted Protocols for Restorative Sleep</h2>
                <p>
                  Restoring sleep requires addressing both the core thermoregulatory trigger and central nervous system excitability:
                </p>
                <ul>
                  <li><strong>Maintain a 65&deg;F (18&deg;C) Sleep Sanctuary:</strong> Cooler ambient room temperatures prevent nocturnal temperature spikes.</li>
                  <li><strong>Magnesium Glycinate &amp; L-Theanine:</strong> 300–400mg promotes GABAergic neurotransmission.</li>
                  <li><strong>Consistent Morning Light Exposure:</strong> 15 minutes of natural sunlight anchors melatonin rhythms.</li>
                </ul>

                <h2>Clinical Hormone Therapy (HRT) Considerations</h2>
                <p>
                  Contemporary guidelines from the Menopause Society (NAMS) emphasize that for symptomatic women under 60 or within 10 years of menopause onset, transdermal bioidentical estradiol combined with micronized oral progesterone offers favorable safety profiles for cardiovascular health, bone density preservation, and symptom resolution.
                </p>
              </div>

            </article>
          </main>

          <!-- 3. Right Sidebar -->
          <aside class="meno-sidebar" id="sidebar-widgets" aria-label="Sidebar Content">

            <!-- Sidebar Widget 1: Author Bio -->
            <div class="meno-widget meno-author-widget">
              <img src="https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=240" alt="Dr. Elena Vance, MD" class="meno-author-widget-avatar" width="80" height="80">
              <h3 class="meno-author-widget-name">Dr. Elena Vance, MD</h3>
              <div class="meno-author-widget-role">OB/GYN &bull; Menopause Specialist</div>
              <p class="meno-author-widget-bio">
                Dr. Vance is a board-certified gynecologist and NAMS-certified menopause practitioner with over 16 years of clinical experience specializing in integrative hormonal care and longevity.
              </p>
              <div class="meno-author-widget-links">
                <a href="#author-profile" class="meno-btn meno-btn-outline" style="padding:0.4rem 0.85rem; font-size:0.8rem;">Full Bio &bull; Credentials</a>
              </div>
            </div>

            <!-- Sidebar Widget 2: Disclaimer Box -->
            <div class="meno-widget meno-sidebar-disclaimer-box" role="complementary" aria-label="Sidebar Disclaimer">
              <div class="meno-sidebar-disclaimer-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>Clinical Advisory</span>
              </div>
              <p class="meno-sidebar-disclaimer-text">
                The articles published on MenoHealthGuide are created strictly for educational purposes and should not replace individualized medical advice, clinical diagnosis, or treatment plans from your personal healthcare provider.
              </p>
            </div>

            <!-- Sidebar Widget 3: AdSense Rectangle Banner (300x250 Placeholder) -->
            <div class="meno-widget meno-ad-sidebar-mrec" aria-label="Sidebar Advertisement">
              <div class="meno-ad-card">
                <span class="meno-ad-disclosure">Advertisement</span>
                <div class="meno-ad-content">
                  <div class="meno-ad-mock-creative">
                    <span>Google AdSense Rectangle Banner</span>
                    <span class="meno-ad-dimension">300 &times; 250 Medium Rectangle</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar Widget 4: Popular Topics List -->
            <div class="meno-widget">
              <h3 class="meno-widget-title">
                <span>Popular Topics</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9D7B8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </h3>
              <ul class="meno-popular-topics-list">
                <li>
                  <a href="/topic/perimenopause-hrt" class="meno-popular-topic-link">
                    <span>Perimenopause &amp; HRT Protocols</span>
                    <span class="meno-topic-count">24 Articles</span>
                  </a>
                </li>
                <li>
                  <a href="/topic/sleep-night-sweats" class="meno-popular-topic-link">
                    <span>Night Sweats &amp; Vasomotor Relief</span>
                    <span class="meno-topic-count">19 Articles</span>
                  </a>
                </li>
                <li>
                  <a href="/topic/estrobolome-gut" class="meno-popular-topic-link">
                    <span>Estrobolome &amp; Gut Microbiome</span>
                    <span class="meno-topic-count">15 Articles</span>
                  </a>
                </li>
                <li>
                  <a href="/topic/brain-fog-cognition" class="meno-popular-topic-link">
                    <span>Brain Fog &amp; Cognitive Clarity</span>
                    <span class="meno-topic-count">12 Articles</span>
                  </a>
                </li>
                <li>
                  <a href="/topic/bone-heart-longevity" class="meno-popular-topic-link">
                    <span>DEXA Scans &amp; Bone Density</span>
                    <span class="meno-topic-count">18 Articles</span>
                  </a>
                </li>
                <li>
                  <a href="/topic/non-hormonal-alternatives" class="meno-popular-topic-link">
                    <span>Non-Hormonal Supplements</span>
                    <span class="meno-topic-count">11 Articles</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Optional High-Converting Free Resource Widget -->
            <div class="meno-widget" id="newsletter" style="background:linear-gradient(135deg, #344D5E, #4A6B82); color:#ffffff;">
              <h3 style="color:#ffffff; font-family:var(--font-serif); font-size:1.2rem; margin-bottom:0.5rem;">Free Symptom Tracker</h3>
              <p style="font-size:0.85rem; color:#d1e2ee; margin-bottom:1rem;">
                Download our printable 30-day Menopause Symptom &amp; Doctor Discussion Guide.
              </p>
              <form action="#" method="POST" style="display:flex; flex-direction:column; gap:0.5rem;">
                <input type="email" placeholder="Enter your email" required style="padding:0.65rem 1rem; border-radius:9999px; border:1px solid #475569; font-size:0.85rem; outline:none; background:#ffffff; color:#2d3748;">
                <button type="submit" class="meno-btn meno-btn-primary" style="padding:0.65rem 1rem; font-size:0.85rem;">Get Free PDF Guide</button>
              </form>
            </div>

          </aside>

        </div>
      </div>
    </div>

    <!-- 5. Medical Disclaimer Callout Box Above the Footer -->
    <section class="meno-disclaimer-callout-section" aria-label="Medical Disclaimer Callout">
      <div class="meno-container">
        <div class="meno-medical-disclaimer-box" role="alert">
          <div class="meno-disclaimer-icon-badge" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <div class="meno-disclaimer-content">
            <h4>Important Medical &amp; Clinical Disclaimer</h4>
            <p>
              The content presented on <strong>MenoHealthGuide.com</strong> is strictly intended for educational, informational, and supportive purposes. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare professional with any questions regarding a medical condition, symptoms, or treatment protocols. Never disregard professional medical advice or delay seeking it because of information read on this website.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Footer with Links to Privacy Policy, Terms, Medical Disclaimer, and Contact Us -->
    <footer class="meno-footer" id="site-footer">
      <div class="meno-container">
        
        <!-- Main Footer Links Grid -->
        <div class="meno-footer-grid">
          
          <!-- Column 1: Brand Info -->
          <div class="meno-footer-col">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem;">
              <span style="font-family:var(--font-serif); font-size:1.35rem; font-weight:700; color:#ffffff;">
                Meno<span style="color:#C8A2B5;">Health</span>Guide
              </span>
            </div>
            <p style="font-size:0.85rem; color:#94a3b8; line-height:1.6; margin-bottom:1rem; max-width:320px;">
              Empowering women with compassionate, evidence-based clinical medical journalism and physician-reviewed protocols for perimenopause and beyond.
            </p>
            <div style="font-size:0.75rem; color:#cbd5e1;">
              ✦ Editorial Integrity &bull; HONcode &amp; NAMS Guidelines
            </div>
          </div>

          <!-- Column 2: Health Categories -->
          <div class="meno-footer-col">
            <h4>Health Topics</h4>
            <ul class="meno-footer-links">
              <li><a href="/category/perimenopause">Perimenopause Care</a></li>
              <li><a href="/category/hormone-therapy">Hormone Replacement (HRT)</a></li>
              <li><a href="/category/nutrition-gut">Estrobolome &amp; Diet</a></li>
              <li><a href="/category/sleep-mind">Vasomotor &amp; Sleep</a></li>
              <li><a href="/category/longevity">Bone &amp; Heart Health</a></li>
            </ul>
          </div>

          <!-- Column 3: Editorial & Company -->
          <div class="meno-footer-col">
            <h4>Company &amp; Ethics</h4>
            <ul class="meno-footer-links">
              <li><a href="/about-us">About MenoHealthGuide</a></li>
              <li><a href="/medical-advisory-board">Medical Advisory Board</a></li>
              <li><a href="/editorial-policy">Editorial Policy &amp; Standards</a></li>
              <li><a href="/advertising-disclosure">Advertising &amp; Sponsorship Policy</a></li>
            </ul>
          </div>

          <!-- Column 4: Mandatory Legal Pages (Privacy, Terms, Disclaimer, Contact Us) -->
          <div class="meno-footer-col">
            <h4>Trust &amp; Legal</h4>
            <ul class="meno-footer-links">
              <li><a href="/privacy-policy" id="link-privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service" id="link-terms-of-service">Terms of Service</a></li>
              <li><a href="/medical-disclaimer" id="link-medical-disclaimer">Medical Disclaimer</a></li>
              <li><a href="/contact-us" id="link-contact-us">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <!-- Footer Bottom Bar -->
        <div class="meno-footer-legal-bar">
          <div>
            &copy; 2026 MenoHealthGuide.com. All rights reserved.
          </div>
          <nav class="meno-footer-legal-nav" aria-label="Legal Navigation">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true">&bull;</span>
            <a href="/terms-of-service">Terms</a>
            <span aria-hidden="true">&bull;</span>
            <a href="/medical-disclaimer">Medical Disclaimer</a>
            <span aria-hidden="true">&bull;</span>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>

      </div>
    </footer>

  </div>
</body>
</html>`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(rawHtmlTemplate);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadTemplate = () => {
    const blob = new Blob([rawHtmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const checklistItems = [
    {
      id: 'header',
      title: 'Header with Logo, Nav Links & 728x90 Top Leaderboard Ad',
      desc: 'Semantic <header class="meno-navbar"> + responsive 728x90 AdSense banner placeholder.',
      status: 'Implemented',
      targetId: 'site-header'
    },
    {
      id: 'grid',
      title: 'Two-Column Layout (Main Area + Right Sidebar)',
      desc: 'High-converting responsive grid: 1fr on mobile / 1fr 340px on desktop.',
      status: 'Implemented',
      targetId: 'main-grid'
    },
    {
      id: 'in-article-ad',
      title: 'In-Article AdSense Banner Placed Right Under Main Title',
      desc: 'High-impact in-article banner container directly beneath the <h1> page headline.',
      status: 'Implemented',
      targetId: 'in-article-ad-slot'
    },
    {
      id: 'sidebar-bio',
      title: 'Sidebar Author Bio Widget',
      desc: 'Physician/specialist avatar, credentials, credential bio card, and profile link.',
      status: 'Implemented',
      targetId: 'sidebar-author'
    },
    {
      id: 'sidebar-disclaimer',
      title: 'Sidebar Clinical Disclaimer Box',
      desc: 'Amber alert box clarifying educational nature of health articles in the sidebar.',
      status: 'Implemented',
      targetId: 'sidebar-disclaimer'
    },
    {
      id: 'sidebar-ad',
      title: 'Sidebar AdSense Rectangle Banner (300x250)',
      desc: 'Standard Medium Rectangle unit (300x250) positioned above popular topics.',
      status: 'Implemented',
      targetId: 'sidebar-mrec'
    },
    {
      id: 'sidebar-topics',
      title: 'Sidebar Popular Topics List',
      desc: 'Interactive topic navigation items with published article counters and hover states.',
      status: 'Implemented',
      targetId: 'sidebar-topics'
    },
    {
      id: 'disclaimer-callout',
      title: 'Medical Disclaimer Callout Box Above Footer',
      desc: 'Full-width clinical advisory container preceding footer with shield icon.',
      status: 'Implemented',
      targetId: 'medical-disclaimer-callout'
    },
    {
      id: 'footer-links',
      title: 'Footer with Privacy Policy, Terms, Medical Disclaimer, and Contact Us',
      desc: 'Footer grid with direct, interactive links to the 4 essential trust pages.',
      status: 'Implemented',
      targetId: 'site-footer'
    },
    {
      id: 'css-link',
      title: 'Linked to css/style.css',
      desc: '<link rel="stylesheet" href="css/style.css"> linking design tokens, grid & ads.',
      status: 'Implemented',
      targetId: 'css-stylesheet'
    }
  ];

  return (
    <div className="meno-container py-6">
      
      {/* Top Banner Overview */}
      <div className="bg-white rounded-2xl border border-[#E8E4DF] shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#F4ECF0] text-[#7A5C6C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Production HTML Layout Template
              </span>
              <span className="bg-[#EDF3F7] text-[#344D5E] text-xs font-bold px-3 py-1 rounded-full">
                menohealthguide.com
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] mb-2">
              Semantic, High-Converting HTML5 Template
            </h1>
            <p className="text-sm text-[#64748B] max-w-2xl">
              Complete layout template structured with HTML5 semantic tags, two-column responsive grid, Google AdSense leaderboard &amp; sidebar slots, clinical author credential box, and comprehensive disclaimers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'preview'
                  ? 'bg-[#9D7B8C] text-white shadow-md'
                  : 'bg-[#F5F3EF] text-[#64748B] hover:bg-[#E8E4DF]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Live Preview
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'code'
                  ? 'bg-[#4A6B82] text-white shadow-md'
                  : 'bg-[#F5F3EF] text-[#64748B] hover:bg-[#E8E4DF]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              HTML Source Code
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'specs'
                  ? 'bg-[#1E293B] text-white shadow-md'
                  : 'bg-[#F5F3EF] text-[#64748B] hover:bg-[#E8E4DF]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Requirements Checklist (10/10)
            </button>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="mt-4 pt-4 border-t border-[#F0EDE8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-mono text-[#344D5E]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              File: template.html &amp; public/template.html
            </span>
            <span className="flex items-center gap-1 font-mono text-[#7A5C6C]">
              Linked: css/style.css
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 bg-[#F5F3EF] hover:bg-[#E8E4DF] text-[#2D3748] px-3 py-1.5 rounded-lg font-semibold transition-all"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied HTML!' : 'Copy template.html'}</span>
            </button>

            <button
              onClick={handleDownloadTemplate}
              className="flex items-center gap-1.5 bg-[#9D7B8C] hover:bg-[#7A5C6C] text-white px-3 py-1.5 rounded-lg font-semibold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download template.html</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: Live Rendered Template */}
      {activeTab === 'preview' && (
        <div className="bg-white rounded-2xl border border-[#E8E4DF] shadow-md overflow-hidden">
          
          {/* Header Preview Highlight Badge */}
          <div className="bg-[#F8F6F4] px-4 py-2 border-b border-[#E8E4DF] flex items-center justify-between text-xs text-[#64748B]">
            <span className="font-semibold text-[#1E293B] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9D7B8C]"></span>
              Rendered Template: Header, 728x90 Ad, Two-Column Main &amp; Sidebar, In-Article Ad, Disclaimers &amp; Footer
            </span>
            <span className="text-[11px] text-[#64748B]">
              Preview matches HTML/CSS 1:1
            </span>
          </div>

          {/* Rendered Template Header */}
          <header className="meno-navbar" id="site-header">
            <div className="meno-container">
              <div className="meno-nav-inner">
                {/* Brand */}
                <a href="#logo" className="meno-brand">
                  <div className="meno-brand-icon">✦</div>
                  <div className="meno-brand-text">
                    <span className="meno-brand-title">Meno<span>Health</span>Guide</span>
                    <span className="meno-brand-tagline">Evidence-Based Midlife Wellness</span>
                  </div>
                </a>

                {/* Nav Links */}
                <nav className="meno-nav-menu" aria-label="Main Navigation">
                  <a href="#home" className="meno-nav-link active">Home</a>
                  <a href="#perimenopause" className="meno-nav-link">Perimenopause</a>
                  <a href="#hrt" className="meno-nav-link">Hormone Therapy (HRT)</a>
                  <a href="#nutrition" className="meno-nav-link">Nutrition &amp; Gut</a>
                  <a href="#sleep" className="meno-nav-link">Sleep &amp; Mind</a>
                  <a href="#longevity" className="meno-nav-link">Bone &amp; Heart</a>
                </nav>

                {/* Actions */}
                <div className="meno-nav-actions">
                  <a href="#checklist" className="meno-btn meno-btn-primary">
                    Free Checklist
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Top Leaderboard AdSense Banner (728x90) */}
          <div className="meno-ad-wrapper meno-ad-leaderboard" id="header-ad-banner">
            <div className="meno-container">
              <div className="meno-ad-card">
                <span className="meno-ad-disclosure">Advertisement &bull; Top Leaderboard Header Placement</span>
                <div className="meno-ad-content">
                  {simulatedAds ? (
                    <div className="meno-ad-mock-creative" style={{ minHeight: '90px', background: 'linear-gradient(90deg, #FAF5F8 0%, #F4ECF0 100%)', borderColor: '#C8A2B5' }}>
                      <div className="flex items-center justify-between w-full max-w-2xl px-4 py-2">
                        <div className="text-left">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9D7B8C]">Physician Recommended</span>
                          <h4 className="font-serif font-bold text-sm text-[#1E293B]">Clinical-Grade Micronized Progesterone &amp; Estradiol Support</h4>
                          <p className="text-xs text-[#64748B]">Personalized telehealth consultations with board-certified menopause specialists.</p>
                        </div>
                        <button className="meno-btn meno-btn-primary text-xs py-1.5 px-3 whitespace-nowrap">
                          Learn More &rarr;
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="meno-ad-mock-creative">
                      <span className="font-semibold text-[#2D3748]">Google AdSense Leaderboard Banner</span>
                      <span className="meno-ad-dimension">728 &times; 90 Desktop &bull; 320 &times; 50 Mobile Responsive</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Layout (Main Content Area + Right Sidebar) */}
          <div className="meno-main-content">
            <div className="meno-container">
              <div className="meno-main-grid" id="main-grid">

                {/* Left Main Content */}
                <main className="meno-article-primary" id="main-content">
                  <article>
                    
                    {/* Breadcrumbs */}
                    <nav className="meno-breadcrumbs">
                      <a href="#home">Home</a>
                      <span>&rsaquo;</span>
                      <a href="#peri">Perimenopause</a>
                      <span>&rsaquo;</span>
                      <span className="text-[#2D3748] font-semibold">Sleep, Hormones &amp; Vitality</span>
                    </nav>

                    {/* Article Header */}
                    <header className="meno-article-header">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <span className="meno-ad-dimension bg-[#F4ECF0] text-[#7A5C6C] rounded-full px-3 py-1 font-bold">
                          HORMONE HEALTH
                        </span>
                        <span className="meno-ad-dimension bg-[#EDF3F7] text-[#344D5E] rounded-full px-3 py-1 font-bold">
                          EVIDENCE-BASED REVIEW
                        </span>
                      </div>

                      {/* Main Page Title */}
                      <h1 className="meno-article-title text-3xl sm:text-4xl font-serif font-bold text-[#1E293B]">
                        Navigating Perimenopause: Evidence-Based Strategies for Sleep, Hormones &amp; Vitality
                      </h1>

                      {/* Article Meta */}
                      <div className="meno-article-meta">
                        <div className="meno-article-author">
                          <img
                            src="https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=120"
                            alt="Dr. Elena Vance"
                            className="meno-article-author-img"
                          />
                          <div>
                            <span className="font-semibold text-[#2D3748] block">Dr. Elena Vance, MD</span>
                            <span className="text-xs text-[#64748B]">Board-Certified OB/GYN &bull; NCMP Menopause Specialist</span>
                          </div>
                        </div>
                        <span className="text-[#94A3B8]">&bull;</span>
                        <time className="text-xs text-[#64748B]">August 18, 2026</time>
                        <span className="text-[#94A3B8]">&bull;</span>
                        <span className="text-xs text-[#64748B]">7 min read</span>
                      </div>
                    </header>

                    {/* In-Article AdSense Banner Placed Right Under Main Page Title */}
                    <div className="meno-ad-wrapper meno-ad-in-article" id="in-article-ad-slot">
                      <div className="meno-ad-card">
                        <span className="meno-ad-disclosure">Sponsored In-Article Ad &bull; Native Viewport Unit</span>
                        <div className="meno-ad-content">
                          {simulatedAds ? (
                            <div className="meno-ad-mock-creative" style={{ background: '#FAF7F9', border: '1px solid #C8A2B5' }}>
                              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 p-2">
                                <div className="text-left">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5C6C]">Therapeutic Rest</span>
                                  <h4 className="font-serif font-bold text-sm text-[#1E293B]">Thermoregulating Bamboo Sheets for Night Sweats</h4>
                                  <p className="text-xs text-[#64748B]">Clinically proven 3&deg; cooler sleeping surface with 100-night risk-free trial.</p>
                                </div>
                                <button className="meno-btn meno-btn-primary text-xs py-1.5 px-3 whitespace-nowrap">
                                  View Collection &rarr;
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="meno-ad-mock-creative">
                              <span className="font-semibold text-[#2D3748]">Google AdSense In-Article Native Banner</span>
                              <span className="meno-ad-dimension">Fluid Responsive Native Container (Placed Right Under &lt;h1&gt; Title)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Featured Media */}
                    <figure className="meno-featured-media">
                      <img
                        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
                        alt="Restorative sleep wellness"
                        className="meno-featured-img"
                      />
                      <figcaption className="p-3 text-xs text-[#64748B] bg-white border-t border-[#E8E4DF]">
                        Neuroimaging reveals how estrogen receptor fluctuations directly modulate hypothalamic thermoregulation and deep slow-wave sleep cycles.
                      </figcaption>
                    </figure>

                    {/* Key Takeaways Box */}
                    <div className="meno-key-takeaways">
                      <h4>✦ Key Evidence-Based Takeaways</h4>
                      <ul>
                        <li><strong>Progesterone Drops First:</strong> Luteal phase progesterone decline often precedes estrogen volatility, explaining 3:00 AM wakefulness and heightened restlessness.</li>
                        <li><strong>Thermoregulatory Reset:</strong> Vasomotor hot flushes originate in hypothalamus KNDy neuron hyperactivity triggered by falling estrogen levels.</li>
                        <li><strong>Targeted Interventions:</strong> Combining sleep hygiene, micronized progesterone or transdermal estradiol where clinically appropriate, and strength training yields synergistic results.</li>
                      </ul>
                    </div>

                    {/* Rich Editorial Body */}
                    <div className="meno-prose">
                      <p>
                        Perimenopause is not simply a countdown to the cessation of menstruation; it is a profound neuro-endocrine transition that reshapes metabolic pathways, circadian rhythm stability, and cellular vitality. For millions of women between ages 38 and 52, erratic hormone oscillations present as 3:00 AM wakefulness, brain fog, vasomotor hot flushes, and uncharacteristic mood shifts.
                      </p>

                      <h2>Understanding the Neuro-Endocrine Shift</h2>
                      <p>
                        Contrary to common belief, estrogen levels during perimenopause do not experience a gentle, linear decline. Instead, ovarian follicle depletion leads to erratic spikes and steep valleys in 17&beta;-estradiol production, paired with an earlier and sustained decline in calming progesterone.
                      </p>
                      <p>
                        Because estrogen acts as a key neuro-protective agent that facilitates cerebral glucose metabolism and modulates neurotransmitters like serotonin and acetylcholine, these fluctuations directly influence cognitive stamina and deep slow-wave sleep.
                      </p>

                      <h2>Targeted Protocols for Restorative Sleep</h2>
                      <p>
                        Restoring sleep requires addressing both the core thermoregulatory trigger and central nervous system excitability:
                      </p>
                      <ul>
                        <li><strong>Maintain a 65&deg;F (18&deg;C) Sleep Sanctuary:</strong> Cooler ambient room temperatures prevent nocturnal adrenaline spikes.</li>
                        <li><strong>Magnesium Glycinate &amp; L-Theanine:</strong> 300–400mg promotes GABAergic calming before bedtime.</li>
                        <li><strong>Consistent Morning Light Exposure:</strong> 15 minutes of natural sunlight anchors melatonin rhythms for the following night.</li>
                      </ul>

                      <h2>Clinical Hormone Therapy (HRT) Considerations</h2>
                      <p>
                        Contemporary guidelines from the Menopause Society (NAMS) emphasize that for symptomatic women under 60 or within 10 years of menopause onset, transdermal bioidentical estradiol combined with micronized oral progesterone offers favorable safety profiles for cardiovascular health, bone density preservation, and symptom resolution.
                      </p>
                    </div>

                  </article>
                </main>

                {/* Right Sidebar */}
                <aside className="meno-sidebar" id="sidebar-widgets">

                  {/* Sidebar Widget 1: Author Bio */}
                  <div className="meno-widget meno-author-widget" id="sidebar-author">
                    <img
                      src="https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=240"
                      alt="Dr. Elena Vance, MD"
                      className="meno-author-widget-avatar"
                    />
                    <h3 className="meno-author-widget-name">Dr. Elena Vance, MD</h3>
                    <div className="meno-author-widget-role">OB/GYN &bull; Menopause Specialist</div>
                    <p className="meno-author-widget-bio">
                      Dr. Vance is a board-certified gynecologist and NAMS-certified menopause practitioner with over 16 years of clinical experience specializing in integrative hormonal care and midlife longevity.
                    </p>
                    <div className="meno-author-widget-links">
                      <a href="#author" className="meno-btn meno-btn-outline text-xs py-1.5 px-3">
                        Full Bio &bull; Credentials
                      </a>
                    </div>
                  </div>

                  {/* Sidebar Widget 2: Disclaimer Box */}
                  <div className="meno-widget meno-sidebar-disclaimer-box" id="sidebar-disclaimer">
                    <div className="meno-sidebar-disclaimer-header">
                      <AlertTriangle className="w-4 h-4 text-[#8A6519]" />
                      <span>Clinical Advisory</span>
                    </div>
                    <p className="meno-sidebar-disclaimer-text">
                      The articles published on MenoHealthGuide are created strictly for educational purposes and should not replace individualized medical advice, clinical diagnosis, or treatment plans from your personal healthcare provider.
                    </p>
                  </div>

                  {/* Sidebar Widget 3: AdSense Rectangle Banner (300x250 Placeholder) */}
                  <div className="meno-widget meno-ad-sidebar-mrec" id="sidebar-mrec">
                    <div className="meno-ad-card">
                      <span className="meno-ad-disclosure">Advertisement &bull; Sidebar Slot</span>
                      <div className="meno-ad-content">
                        {simulatedAds ? (
                          <div className="meno-ad-mock-creative" style={{ height: '250px', background: 'linear-gradient(180deg, #F6F9FB 0%, #EDF3F7 100%)', borderColor: '#7092AA' }}>
                            <div className="flex flex-col items-center justify-center text-center p-4 h-full">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A6B82] mb-1">Targeted Nutrition</span>
                              <h4 className="font-serif font-bold text-sm text-[#1E293B] mb-2">Liposomal Magnesium Glycinate &amp; K2 Complex</h4>
                              <p className="text-xs text-[#64748B] mb-3">Formulated specifically for bone density support &amp; nocturnal muscle relaxation.</p>
                              <button className="meno-btn meno-btn-primary text-xs py-1.5 px-3">
                                Claim 20% Off &rarr;
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="meno-ad-mock-creative" style={{ height: '250px' }}>
                            <span className="font-semibold text-[#2D3748]">Google AdSense Rectangle</span>
                            <span className="meno-ad-dimension">300 &times; 250 Medium Rectangle</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Widget 4: Popular Topics List */}
                  <div className="meno-widget" id="sidebar-topics">
                    <h3 className="meno-widget-title">
                      <span>Popular Topics</span>
                      <TrendingUp className="w-4 h-4 text-[#9D7B8C]" />
                    </h3>
                    <ul className="meno-popular-topics-list">
                      <li>
                        <a href="#topic1" className="meno-popular-topic-link">
                          <span>Perimenopause &amp; HRT Protocols</span>
                          <span className="meno-topic-count">24</span>
                        </a>
                      </li>
                      <li>
                        <a href="#topic2" className="meno-popular-topic-link">
                          <span>Night Sweats &amp; Cooling Relief</span>
                          <span className="meno-topic-count">19</span>
                        </a>
                      </li>
                      <li>
                        <a href="#topic3" className="meno-popular-topic-link">
                          <span>Estrobolome &amp; Gut Microbiome</span>
                          <span className="meno-topic-count">15</span>
                        </a>
                      </li>
                      <li>
                        <a href="#topic4" className="meno-popular-topic-link">
                          <span>Brain Fog &amp; Cognitive Clarity</span>
                          <span className="meno-topic-count">12</span>
                        </a>
                      </li>
                      <li>
                        <a href="#topic5" className="meno-popular-topic-link">
                          <span>DEXA Scans &amp; Bone Density</span>
                          <span className="meno-topic-count">18</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Free Symptom Tracker Newsletter Box */}
                  <div className="meno-widget bg-gradient-to-br from-[#344D5E] to-[#4A6B82] text-white" id="checklist">
                    <h3 className="font-serif text-lg font-bold text-white mb-1">Free Symptom Tracker</h3>
                    <p className="text-xs text-[#D1E2EE] mb-3">
                      Download our printable 30-day Menopause Symptom &amp; Doctor Discussion Checklist.
                    </p>
                    <div className="flex flex-col gap-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full text-xs px-3 py-2 rounded-full text-[#2D3748] bg-white outline-none border-none"
                      />
                      <button className="meno-btn meno-btn-primary text-xs py-2 px-3">
                        Get Free PDF Guide
                      </button>
                    </div>
                  </div>

                </aside>

              </div>
            </div>
          </div>

          {/* Medical Disclaimer Callout Box Above Footer */}
          <section className="meno-disclaimer-callout-section bg-white border-t border-[#E8E4DF]" id="medical-disclaimer-callout">
            <div className="meno-container">
              <div className="meno-medical-disclaimer-box">
                <div className="meno-disclaimer-icon-badge">
                  <ShieldCheck className="w-5 h-5 text-[#8A6519]" />
                </div>
                <div className="meno-disclaimer-content">
                  <h4>Important Medical &amp; Clinical Disclaimer</h4>
                  <p>
                    The content presented on <strong>MenoHealthGuide.com</strong> is strictly intended for educational, informational, and supportive purposes. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare professional with any questions regarding a medical condition, symptoms, or treatment protocols. Never disregard professional medical advice or delay seeking it because of information read on this website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer with Mandatory Legal Links */}
          <footer className="meno-footer" id="site-footer">
            <div className="meno-container">
              
              <div className="meno-footer-grid">
                
                {/* Brand */}
                <div className="meno-footer-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl font-bold text-white">
                      Meno<span className="text-[#C8A2B5]">Health</span>Guide
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mb-3">
                    Empowering women with compassionate, evidence-based clinical medical journalism and physician-reviewed protocols for perimenopause and beyond.
                  </p>
                  <div className="text-xs text-[#CBD5E1]">
                    ✦ Adherent to HONcode &amp; NAMS Guidelines
                  </div>
                </div>

                {/* Categories */}
                <div className="meno-footer-col">
                  <h4>Health Topics</h4>
                  <ul className="meno-footer-links">
                    <li><a href="#peri">Perimenopause Care</a></li>
                    <li><a href="#hrt">Hormone Replacement (HRT)</a></li>
                    <li><a href="#gut">Estrobolome &amp; Diet</a></li>
                    <li><a href="#sleep">Vasomotor &amp; Sleep</a></li>
                    <li><a href="#bone">Bone &amp; Heart Health</a></li>
                  </ul>
                </div>

                {/* Editorial */}
                <div className="meno-footer-col">
                  <h4>Company &amp; Ethics</h4>
                  <ul className="meno-footer-links">
                    <li><a href="#about">About MenoHealthGuide</a></li>
                    <li><a href="#board">Medical Advisory Board</a></li>
                    <li><a href="#editorial">Editorial Policy &amp; Standards</a></li>
                    <li><a href="#ad-policy">Advertising &amp; Sponsorship</a></li>
                  </ul>
                </div>

                {/* Legal (The 4 Requested Pages) */}
                <div className="meno-footer-col">
                  <h4>Trust &amp; Legal</h4>
                  <ul className="meno-footer-links">
                    <li>
                      <button
                        onClick={() => setActiveModal('privacy')}
                        className="text-left text-[#94A3B8] hover:text-[#C8A2B5] transition-colors text-xs flex items-center gap-1.5"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Privacy Policy</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveModal('terms')}
                        className="text-left text-[#94A3B8] hover:text-[#C8A2B5] transition-colors text-xs flex items-center gap-1.5"
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>Terms of Service</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveModal('disclaimer')}
                        className="text-left text-[#94A3B8] hover:text-[#C8A2B5] transition-colors text-xs flex items-center gap-1.5"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Medical Disclaimer</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveModal('contact')}
                        className="text-left text-[#94A3B8] hover:text-[#C8A2B5] transition-colors text-xs flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Contact Us</span>
                      </button>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Bottom Bar */}
              <div className="meno-footer-legal-bar">
                <div>
                  &copy; {new Date().getFullYear()} MenoHealthGuide.com. All rights reserved.
                </div>
                <nav className="meno-footer-legal-nav">
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-white">Privacy Policy</button>
                  <span>&bull;</span>
                  <button onClick={() => setActiveModal('terms')} className="hover:text-white">Terms</button>
                  <span>&bull;</span>
                  <button onClick={() => setActiveModal('disclaimer')} className="hover:text-white">Medical Disclaimer</button>
                  <span>&bull;</span>
                  <button onClick={() => setActiveModal('contact')} className="hover:text-white">Contact Us</button>
                </nav>
              </div>

            </div>
          </footer>

        </div>
      )}

      {/* TAB 2: HTML Source Code Viewer */}
      {activeTab === 'code' && (
        <div className="bg-[#1E293B] rounded-2xl border border-[#334155] shadow-xl overflow-hidden">
          <div className="bg-[#0F172A] px-4 py-3 border-b border-[#334155] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
              <span className="font-mono text-xs text-[#CBD5E1] ml-2">template.html &bull; Standard Semantic HTML5</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 bg-[#334155] hover:bg-[#475569] text-white px-3 py-1 rounded text-xs transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy HTML'}</span>
              </button>

              <button
                onClick={handleDownloadTemplate}
                className="flex items-center gap-1 bg-[#9D7B8C] hover:bg-[#7A5C6C] text-white px-3 py-1 rounded text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .html</span>
              </button>
            </div>
          </div>

          <div className="p-4 max-h-[680px] overflow-auto">
            <pre className="font-mono text-xs text-[#E2E8F0] leading-relaxed whitespace-pre-wrap">
              {rawHtmlTemplate}
            </pre>
          </div>
        </div>
      )}

      {/* TAB 3: Specifications & Requirements Checklist */}
      {activeTab === 'specs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checklistItems.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-xl border border-[#E8E4DF] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <h3 className="font-bold text-sm text-[#1E293B]">
                    {idx + 1}. {item.title}
                  </h3>
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-[#64748B] pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Modals for Privacy, Terms, Disclaimer, and Contact Us */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E8E4DF] overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-[#FAF9F6] px-6 py-4 border-b border-[#E8E4DF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                {activeModal === 'privacy' && <Shield className="w-5 h-5 text-[#9D7B8C]" />}
                {activeModal === 'terms' && <Scale className="w-5 h-5 text-[#4A6B82]" />}
                {activeModal === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-[#CFA152]" />}
                {activeModal === 'contact' && <Mail className="w-5 h-5 text-[#9D7B8C]" />}
                <h3 className="font-serif text-lg font-bold text-[#1E293B]">
                  {activeModal === 'privacy' && 'Privacy Policy & Cookie Choices'}
                  {activeModal === 'terms' && 'Terms of Service & User Agreement'}
                  {activeModal === 'disclaimer' && 'Medical & Health Information Disclaimer'}
                  {activeModal === 'contact' && 'Contact MenoHealthGuide Editorial Team'}
                </h3>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-[#64748B] hover:text-[#1E293B] hover:bg-[#E8E4DF] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto text-xs text-[#334155] leading-relaxed space-y-4">
              {activeModal === 'privacy' && (
                <>
                  <p className="font-semibold text-sm text-[#1E293B]">Last Updated: August 2026</p>
                  <p>At MenoHealthGuide.com, we respect your health privacy. We do not sell or monetize personal sensitive health information. We utilize standard cookies for site analytics and Google AdSense contextual advertising.</p>
                  <h4 className="font-bold text-[#1E293B]">Google AdSense &amp; Advertising Cookies</h4>
                  <p>Google uses cookies, including the DoubleClick cookie, to serve ads based on user visits to this and other websites. Users may opt out of personalized advertising by visiting Google Ad Settings.</p>
                  <h4 className="font-bold text-[#1E293B]">Newsletter Information</h4>
                  <p>When you subscribe to our symptom checklists, your email address is encrypted and only used to deliver clinical updates.</p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p className="font-semibold text-sm text-[#1E293B]">Last Updated: August 2026</p>
                  <p>By accessing or using MenoHealthGuide.com, you agree to be bound by these Terms of Service and all applicable laws.</p>
                  <h4 className="font-bold text-[#1E293B]">1. Educational Nature of Content</h4>
                  <p>All materials are for educational and informational purposes only and do not constitute clinical medical diagnosis.</p>
                  <h4 className="font-bold text-[#1E293B]">2. Intellectual Property</h4>
                  <p>All written guides, graphics, design templates, and layouts are protected under international copyright laws.</p>
                </>
              )}

              {activeModal === 'disclaimer' && (
                <>
                  <div className="p-4 bg-[#FFF9EB] border-l-4 border-[#CFA152] rounded text-[#785A1A]">
                    <strong>IMPORTANT NOTICE:</strong> The materials provided on MenoHealthGuide.com are designed to support, not replace, the relationship that exists between a patient and their physician.
                  </div>
                  <h4 className="font-bold text-[#1E293B]">No Doctor-Patient Relationship</h4>
                  <p>Using this site, submitting questions, or downloading checklists does not establish a physician-patient relationship. In cases of a medical emergency, call 911 or visit your nearest emergency room immediately.</p>
                  <h4 className="font-bold text-[#1E293B]">Medication &amp; Supplement Protocols</h4>
                  <p>Always review any changes in HRT doses, vitamins, or lifestyle regimens with a licensed healthcare provider who has access to your medical history.</p>
                </>
              )}

              {activeModal === 'contact' && (
                <>
                  <p>We welcome reader feedback, medical advisory inquiries, and editorial submissions from board-certified clinicians.</p>
                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E8E4DF] space-y-2">
                    <p><strong>Editorial Office:</strong> editor@menohealthguide.com</p>
                    <p><strong>Medical Advisory Board:</strong> advisory@menohealthguide.com</p>
                    <p><strong>Partnerships &amp; Advertising:</strong> sponsor@menohealthguide.com</p>
                  </div>
                  <p className="text-muted">Response time is typically within 1–2 business days.</p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAF9F6] px-6 py-3 border-t border-[#E8E4DF] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="meno-btn meno-btn-secondary text-xs py-1.5 px-4"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
