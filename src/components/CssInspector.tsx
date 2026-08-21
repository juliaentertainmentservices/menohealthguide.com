import React, { useState, useEffect } from 'react';
import { Copy, Download, Check, Search, FileCode, Sliders, Palette } from 'lucide-react';

export const CssInspector: React.FC = () => {
  const [cssContent, setCssContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');

  useEffect(() => {
    fetch('/style.css')
      .then((res) => res.text())
      .then((data) => setCssContent(data))
      .catch(() => {
        // Fallback placeholder if fetch is unavailable
        setCssContent('/* style.css is available in root and public/style.css */');
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(cssContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'style.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const lines = cssContent.split('\n');
  const filteredLines = searchFilter
    ? lines.filter((line) => line.toLowerCase().includes(searchFilter.toLowerCase()))
    : lines;

  return (
    <div className="meno-container py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="meno-badge meno-badge-mauve text-xs">
                <FileCode className="w-3.5 h-3.5" /> style.css Generated
              </span>
              <span className="text-xs text-[#64748B] font-mono">
                {lines.length} lines &bull; Production Ready
              </span>
            </div>
            <h1 className="text-3xl font-serif text-[#1E293B] mb-1">
              style.css Source & Token Inspector
            </h1>
            <p className="text-sm text-[#64748B]">
              The complete standalone stylesheet created for MenoHealthGuide with all required components & AdSense containers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="meno-btn meno-btn-primary text-xs"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'CSS Copied!' : 'Copy style.css'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="meno-btn meno-btn-secondary text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download .css</span>
            </button>
          </div>
        </div>

        {/* CSS Custom Properties Palette Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-[#E8E4DF] shadow-sm">
            <div className="w-full h-8 rounded-md bg-[#9D7B8C] mb-2 flex items-center justify-center text-white text-[10px] font-mono font-bold">
              #9D7B8C
            </div>
            <div className="text-xs font-bold text-[#1E293B]">Soft Mauve</div>
            <div className="text-[11px] text-[#64748B] font-mono">--color-mauve-primary</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E8E4DF] shadow-sm">
            <div className="w-full h-8 rounded-md bg-[#4A6B82] mb-2 flex items-center justify-center text-white text-[10px] font-mono font-bold">
              #4A6B82
            </div>
            <div className="text-xs font-bold text-[#1E293B]">Slate Blue</div>
            <div className="text-[11px] text-[#64748B] font-mono">--color-slate-primary</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E8E4DF] shadow-sm">
            <div className="w-full h-8 rounded-md bg-[#FAF9F6] border border-[#E8E4DF] mb-2 flex items-center justify-center text-[#2D3748] text-[10px] font-mono font-bold">
              #FAF9F6
            </div>
            <div className="text-xs font-bold text-[#1E293B]">Warm White</div>
            <div className="text-[11px] text-[#64748B] font-mono">--color-warm-white</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E8E4DF] shadow-sm">
            <div className="w-full h-8 rounded-md bg-[#F9F8F6] border border-dashed border-[#E2DED8] mb-2 flex items-center justify-center text-[#8C857B] text-[10px] font-mono font-bold">
              AdSense Frame
            </div>
            <div className="text-xs font-bold text-[#1E293B]">AdSense Frame</div>
            <div className="text-[11px] text-[#64748B] font-mono">--ad-bg & --ad-border</div>
          </div>
        </div>

        {/* Code Search & Filter Bar */}
        <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#E8E4DF] mb-4">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search classes or variables (e.g., .meno-ad, .meno-hero, .meno-navbar)..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="text-xs w-full bg-transparent outline-none text-[#2D3748]"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="text-xs text-[#64748B] hover:text-[#2D3748]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Code Viewer Container */}
        <div className="bg-[#1E293B] text-[#E2E8F0] rounded-2xl p-6 font-mono text-xs overflow-x-auto shadow-lg max-h-[650px] overflow-y-auto leading-relaxed">
          {filteredLines.map((line, index) => {
            const isComment = line.trim().startsWith('/*') || line.trim().startsWith('*');
            const isSection = line.includes('===');
            const isSelector = line.includes('{') && !line.includes(':');
            const isVariable = line.trim().startsWith('--');
            const isAdClass = line.includes('meno-ad');

            return (
              <div key={index} className="flex hover:bg-[#334155]/40 py-0.5">
                <span className="w-12 select-none text-[#64748B] text-right pr-4 opacity-75">
                  {index + 1}
                </span>
                <span
                  className={`${
                    isSection
                      ? 'text-[#C8A2B5] font-bold text-sm'
                      : isComment
                      ? 'text-[#94A3B8] italic'
                      : isAdClass
                      ? 'text-[#F6E4BD] font-semibold'
                      : isSelector
                      ? 'text-[#7092AA] font-bold'
                      : isVariable
                      ? 'text-[#E2B3C9]'
                      : 'text-[#E2E8F0]'
                  }`}
                >
                  {line || ' '}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
