import { Dumbbell, Briefcase, Plane, TrendingUp, ArrowRight } from 'lucide-react';
import { profile } from '../data/profileData';
import type { Pillar } from '../types';

const icons: Record<Pillar, React.ReactNode> = {
  gym: <Dumbbell size={22} />,
  work: <Briefcase size={22} />,
  travel: <Plane size={22} />,
  growth: <TrendingUp size={22} />,
};

const colorConfig: Record<Pillar, { icon: string; bg: string; border: string; hover: string; accent: string }> = {
  gym: {
    icon: 'text-gym',
    bg: 'bg-gym-dim',
    border: 'border-gym',
    hover: 'hover:border-gym',
    accent: '#ff6b35',
  },
  work: {
    icon: 'text-work',
    bg: 'bg-work-dim',
    border: 'border-work',
    hover: 'hover:border-work',
    accent: '#4a9eff',
  },
  travel: {
    icon: 'text-travel',
    bg: 'bg-travel-dim',
    border: 'border-travel',
    hover: 'hover:border-travel',
    accent: '#40d9a0',
  },
  growth: {
    icon: 'text-growth',
    bg: 'bg-growth-dim',
    border: 'border-growth',
    hover: 'hover:border-growth',
    accent: '#c77dff',
  },
};

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Content Pillars</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="section-title max-w-sm">
            Four areas.{' '}
            <span className="text-accent">One process.</span>
          </h2>
          <p className="text-subtle text-sm max-w-xs leading-relaxed">
            Everything I make connects back to building a stronger body, better career, and more interesting life.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.pillars.map((pillar) => {
            const c = colorConfig[pillar.id];
            return (
              <div
                key={pillar.id}
                className={`card-base card-hover p-6 flex flex-col group cursor-default border ${c.border} ${c.hover} transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${c.bg} ${c.icon} mb-5`}>
                  {icons[pillar.id]}
                </div>

                {/* Title */}
                <div className="font-display font-bold text-xl text-heading mb-2">
                  {pillar.name}
                </div>

                {/* Desc */}
                <p className="text-subtle text-sm leading-relaxed mb-5 flex-1">
                  {pillar.longDescription}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pillar.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${c.bg} ${c.icon} border ${c.border}`}
                    >
                      {topic}
                    </span>
                  ))}
                  {pillar.topics.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface text-subtle border border-border">
                      +{pillar.topics.length - 4} more
                    </span>
                  )}
                </div>

                {/* Account */}
                <div className="text-subtle text-xs font-mono mb-4">
                  {pillar.accounts.join(' · ')}
                </div>

                {/* CTA */}
                <a
                  href="#archive"
                  className={`inline-flex items-center gap-1.5 text-xs font-display font-semibold ${c.icon} group-hover:gap-2.5 transition-all`}
                >
                  Explore content
                  <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
