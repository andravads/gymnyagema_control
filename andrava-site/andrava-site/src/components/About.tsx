import { Dumbbell, Briefcase, Plane, TrendingUp } from 'lucide-react';
import { profile } from '../data/profileData';
import { totalStats } from '../data/analyticsData';

const stats = [
  { label: 'Total Followers', value: totalStats.totalFollowers.toLocaleString(), note: 'across 5 accounts' },
  { label: 'Total Views', value: (totalStats.totalViews / 1000).toFixed(0) + 'K', note: 'all-time' },
  { label: 'Content Pieces', value: totalStats.totalPosts.toString(), note: 'published' },
  { label: 'Platforms', value: '3', note: 'TikTok, IG, YouTube' },
];

const pillarsIcons = {
  gym: <Dumbbell size={18} />,
  work: <Briefcase size={18} />,
  travel: <Plane size={18} />,
  growth: <TrendingUp size={18} />,
};

const pillarColors = {
  gym: 'text-gym bg-gym-dim border-gym',
  work: 'text-work bg-work-dim border-work',
  travel: 'text-travel bg-travel-dim border-travel',
  growth: 'text-growth bg-growth-dim border-growth',
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Who I Am</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <h2 className="section-title mb-6">
              Not a guru.
              <br />
              Just someone{' '}
              <span className="text-accent">documenting</span>{' '}
              the process.
            </h2>

            <div className="space-y-4 text-body leading-relaxed">
              {profile.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Pillar badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {profile.pillars.map((p) => (
                <span
                  key={p.id}
                  className={`pill border ${pillarColors[p.id]}`}
                >
                  {pillarsIcons[p.id]}
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + info */}
          <div className="space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card-base p-5">
                  <div className="font-display font-bold text-3xl text-heading">{s.value}</div>
                  <div className="text-body text-sm mt-0.5">{s.label}</div>
                  <div className="text-subtle text-xs mt-0.5 font-mono">{s.note}</div>
                </div>
              ))}
            </div>

            {/* Accounts list */}
            <div className="card-base p-5">
              <div className="text-subtle text-xs font-mono uppercase tracking-widest mb-4">Active Accounts</div>
              <div className="space-y-3">
                {profile.accounts.map((acc) => (
                  <a
                    key={acc.handle}
                    href={acc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-body text-sm font-mono group-hover:text-heading transition-colors">
                        {acc.handle}
                      </div>
                      <div className="text-subtle text-xs">{acc.focus}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-heading text-sm font-display font-semibold">
                        {acc.followers?.toLocaleString()}
                      </div>
                      <div className="text-subtle text-xs">followers</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="px-4 py-3 rounded-xl border border-accent/20 bg-accent/5">
              <p className="text-xs text-subtle leading-relaxed">
                <span className="text-accent font-mono">⚡ Usually active 10 PM – 12 AM WIB.</span>{' '}
                Numbers are updated manually. Data reflects actual tracked metrics, not vanity stats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
