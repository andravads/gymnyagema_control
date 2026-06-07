import { ArrowDown, Instagram, Youtube, Mail } from 'lucide-react';
import { profile } from '../data/profileData';

// Simple TikTok icon SVG
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const platformIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram size={14} />,
  tiktok: <TikTokIcon />,
  youtube: <Youtube size={14} />,
};

const marqueeItems = [
  '8–5 SALARYMAN',
  'GYM AFTER WORK',
  'TRAVEL WHEN POSSIBLE',
  'PROGRESSIVE OVERLOAD',
  'WORK NOTES',
  'BUILDING IN PUBLIC',
  '#AYOMULAINGEGYM',
  'PRACTICAL TIPS ONLY',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#e8ff47 1px, transparent 1px), linear-gradient(90deg, #e8ff47 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gym opacity-[0.06] blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up stagger-1">
            <span className="w-8 h-px bg-accent" />
            <span className="section-label">Personal Brand Hub</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-heading leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-up stagger-2">
            Office by day.
            <br />
            <span className="text-accent">Gym</span> after work.
            <br />
            <span className="text-subtle">Travel</span> when possible.
          </h1>

          {/* Sub */}
          <p className="text-body text-lg md:text-xl leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up stagger-3">
            Practical notes on building a stronger body, better career, and more interesting life.{' '}
            <span className="text-subtle">No fake hustle. No perfect transformation photos. Just the process.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12 opacity-0 animate-fade-up stagger-4">
            <a href="#videos" className="btn-primary">
              Watch Videos
              <ArrowDown size={14} />
            </a>
            <a href="#analytics" className="btn-ghost">
              See Progress
            </a>
            <a href="#contact" className="btn-ghost">
              Work With Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up stagger-5">
            {profile.accounts.map((acc) => (
              <a
                key={acc.handle}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-subtle text-xs font-mono hover:border-muted hover:text-body transition-all"
              >
                {platformIcons[acc.platform]}
                {acc.handle}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-subtle text-xs font-mono hover:border-muted hover:text-body transition-all"
            >
              <Mail size={12} />
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative border-t border-b border-border overflow-hidden py-3 bg-surface/50">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs text-subtle uppercase tracking-widest">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
