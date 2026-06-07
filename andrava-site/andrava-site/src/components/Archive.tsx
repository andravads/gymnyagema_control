import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { VideoCard } from './FeaturedVideos';
import { contentData } from '../data/contentData';
import type { Platform, Pillar, ContentFormat } from '../types';

const PLATFORMS: { value: Platform | 'all'; label: string }[] = [
  { value: 'all', label: 'All Platforms' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'YouTube' },
];

const PILLARS: { value: Pillar | 'all'; label: string }[] = [
  { value: 'all', label: 'All Pillars' },
  { value: 'gym', label: 'Gym Notes' },
  { value: 'work', label: 'Work Notes' },
  { value: 'travel', label: 'Travel Notes' },
  { value: 'growth', label: 'Growth Log' },
];

const FORMATS: { value: ContentFormat | 'all'; label: string }[] = [
  { value: 'all', label: 'All Formats' },
  { value: 'short-video', label: 'Short Video' },
  { value: 'carousel', label: 'Carousel' },
  { value: 'photo-dump', label: 'Photo Dump' },
  { value: 'long-video', label: 'Long Video' },
];

export default function Archive() {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState<Platform | 'all'>('all');
  const [pillar, setPillar] = useState<Pillar | 'all'>('all');
  const [format, setFormat] = useState<ContentFormat | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return contentData.filter((item) => {
      const matchPlatform = platform === 'all' || item.platform === platform;
      const matchPillar = pillar === 'all' || item.pillar === pillar;
      const matchFormat = format === 'all' || item.format === format;
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.hook.toLowerCase().includes(query.toLowerCase()) ||
        (item.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchPlatform && matchPillar && matchFormat && matchQuery;
    });
  }, [query, platform, pillar, format]);

  const activeFilters = [
    platform !== 'all' && platform,
    pillar !== 'all' && pillar,
    format !== 'all' && format,
  ].filter(Boolean);

  function clearAll() {
    setPlatform('all');
    setPillar('all');
    setFormat('all');
    setQuery('');
  }

  return (
    <section id="archive" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Content Archive</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <h2 className="section-title">
            Everything,{' '}
            <span className="text-accent">searchable.</span>
          </h2>
          <span className="text-subtle text-xs font-mono">{contentData.length} pieces published</span>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, hook, or tag..."
                className="w-full bg-surface border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-body placeholder-subtle focus:outline-none focus:border-muted transition-colors font-body"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-body"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${
                showFilters || activeFilters.length > 0
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-border text-subtle hover:border-muted hover:text-body'
              }`}
            >
              <Filter size={14} />
              Filters
              {activeFilters.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-accent text-bg text-[10px] flex items-center justify-center font-mono font-bold">
                  {activeFilters.length}
                </span>
              )}
            </button>
          </div>

          {showFilters && (
            <div className="card-base p-4 flex flex-wrap gap-4">
              <FilterGroup
                label="Platform"
                options={PLATFORMS}
                value={platform}
                onChange={(v) => setPlatform(v as Platform | 'all')}
              />
              <FilterGroup
                label="Pillar"
                options={PILLARS}
                value={pillar}
                onChange={(v) => setPillar(v as Pillar | 'all')}
              />
              <FilterGroup
                label="Format"
                options={FORMATS}
                value={format}
                onChange={(v) => setFormat(v as ContentFormat | 'all')}
              />
              {activeFilters.length > 0 && (
                <div className="flex items-end">
                  <button
                    onClick={clearAll}
                    className="text-xs text-subtle hover:text-body font-mono flex items-center gap-1"
                  >
                    <X size={10} /> Clear all
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-subtle font-mono text-sm">
            No content matches those filters.
          </div>
        ) : (
          <>
            <div className="text-subtle text-xs font-mono mb-5">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="text-subtle text-[10px] font-mono uppercase tracking-widest mb-2">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
              value === opt.value
                ? 'bg-accent text-bg font-semibold'
                : 'border border-border text-subtle hover:border-muted hover:text-body'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
