import { Mail, Dumbbell, Briefcase, Plane, Zap, ArrowRight } from 'lucide-react';
import { profile } from '../data/profileData';

const opportunities = [
  {
    icon: <Dumbbell size={18} />,
    title: 'Fitness Brand Collaboration',
    desc: 'Gym gear, supplements, apparel, or fitness apps. Happy to create honest reviews and integration content.',
    color: 'text-gym bg-gym-dim border-gym',
  },
  {
    icon: <Briefcase size={18} />,
    title: 'Career & Productivity Brands',
    desc: 'Tools, apps, books, or courses for working professionals. The salaryman audience is underserved.',
    color: 'text-work bg-work-dim border-work',
  },
  {
    icon: <Plane size={18} />,
    title: 'Travel Collaboration',
    desc: 'Destinations, accommodations, travel gear, or credit card/rewards programs.',
    color: 'text-travel bg-travel-dim border-travel',
  },
  {
    icon: <Zap size={18} />,
    title: 'Content Collaboration',
    desc: 'Cross-promotion, joint content, or creative projects with other creators in adjacent niches.',
    color: 'text-growth bg-growth-dim border-growth',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Work With Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="section-title mb-4">
              Let's build something{' '}
              <span className="text-accent">useful</span>{' '}
              together.
            </h2>
            <p className="text-body leading-relaxed mb-6">
              I'm open to collaborations that actually make sense for my audience —
              working people who gym, think about their career, and explore new places.
            </p>
            <p className="text-subtle text-sm leading-relaxed mb-8">
              No random endorsements. No content that doesn't fit the niche. If it's
              something I'd genuinely use or recommend, we can talk.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn-primary inline-flex"
            >
              <Mail size={14} />
              {profile.email}
              <ArrowRight size={14} />
            </a>

            {/* Metrics teaser */}
            <div className="mt-8 p-4 rounded-xl border border-border bg-surface/60">
              <div className="text-subtle text-[10px] font-mono uppercase tracking-widest mb-3">
                Current reach
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display font-bold text-xl text-heading">5.7K+</div>
                  <div className="text-subtle text-xs font-mono">followers</div>
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-heading">247K+</div>
                  <div className="text-subtle text-xs font-mono">total views</div>
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-heading">5.1%</div>
                  <div className="text-subtle text-xs font-mono">avg eng. rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — opportunity cards */}
          <div className="space-y-3">
            {opportunities.map((op) => (
              <div
                key={op.title}
                className={`flex gap-4 p-4 rounded-xl border bg-card ${op.color}`}
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${op.color}`}>
                  {op.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-heading text-sm mb-1">{op.title}</div>
                  <p className="text-subtle text-xs leading-relaxed">{op.desc}</p>
                </div>
              </div>
            ))}

            {/* Additional note */}
            <div className="p-4 rounded-xl border border-dashed border-border">
              <p className="text-subtle text-xs leading-relaxed text-center font-mono">
                Also open to: affiliate partnerships, sponsored content,
                <br />
                speaking, and career/brand consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
