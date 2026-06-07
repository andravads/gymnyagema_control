import { useState } from 'react';
import { ExternalLink, Eye, Heart, MessageCircle, Share2, Bookmark, Play } from 'lucide-react';
import type { ContentItem, Platform, Pillar } from '../types';
import { getFeaturedContent } from '../data/contentData';

const platformLabel: Record<Platform, string> = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
};

const platformColors: Record<Platform, string> = {
  tiktok: 'text-[#ff2d55] bg-[rgba(255,45,85,0.1)] border-[rgba(255,45,85,0.2)]',
  instagram: 'text-[#e1306c] bg-[rgba(225,48,108,0.1)] border-[rgba(225,48,108,0.2)]',
  youtube: 'text-[#ff0000] bg-[rgba(255,0,0,0.1)] border-[rgba(255,0,0,0.2)]',
};

const pillarColors: Record<Pillar, string> = {
  gym: 'text-gym bg-gym-dim border-gym',
  work: 'text-work bg-work-dim border-work',
  travel: 'text-travel bg-travel-dim border-travel',
  growth: 'text-growth bg-growth-dim border-growth',
};

function formatNum(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function VideoCard({ item }: { item: ContentItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-base card-hover overflow-hidden flex flex-col group">
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden bg-muted/20">
        {!imgError ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <Play size={32} className="text-muted" />
          </div>
        )}

        {/* Platform badge */}
        <span className={`absolute top-2 left-2 pill border text-[10px] ${platformColors[item.platform]}`}>
          {platformLabel[item.platform]}
        </span>

        {/* Pillar badge */}
        <span className={`absolute top-2 right-2 pill border text-[10px] ${pillarColors[item.pillar]}`}>
          {item.pillar}
        </span>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dim transition-colors"
          >
            <Play size={18} fill="#0a0a0a" className="text-bg ml-0.5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-subtle text-xs font-mono mb-1.5">{formatDate(item.date)}</div>
        <h3 className="font-display font-semibold text-heading text-sm leading-snug mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-subtle text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
          "{item.hook}"
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-border">
          <MetricMini icon={<Eye size={10} />} value={formatNum(item.views)} />
          <MetricMini icon={<Heart size={10} />} value={formatNum(item.likes)} />
          <MetricMini icon={<Bookmark size={10} />} value={formatNum(item.saves)} />
        </div>

        {/* CTA */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-border text-subtle text-xs font-mono hover:border-muted hover:text-body transition-all"
        >
          <ExternalLink size={11} />
          Watch on {platformLabel[item.platform]}
        </a>
      </div>
    </div>
  );
}

function MetricMini({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-subtle">{icon}</span>
      <span className="text-heading text-xs font-mono font-medium">{value}</span>
    </div>
  );
}

export default function FeaturedVideos() {
  const featured = getFeaturedContent();

  return (
    <section id="videos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Featured Videos</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="section-title">
            Recent <span className="text-accent">content</span>
          </h2>
          <a href="#archive" className="btn-ghost text-xs">
            Browse full archive →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
