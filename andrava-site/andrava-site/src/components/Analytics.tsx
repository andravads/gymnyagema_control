import { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';
import { Users, Eye, TrendingUp, FileText, ArrowUpRight } from 'lucide-react';
import {
  platformAnalytics,
  totalStats,
  weeklySnapshots,
  monthlyPillarViews,
  pillarPerformance,
  topPosts,
} from '../data/analyticsData';
import type { Platform } from '../types';

const PLATFORM_COLORS: Record<Platform, string> = {
  tiktok: '#ff2d55',
  instagram: '#e1306c',
  youtube: '#ff0000',
};

const LINE_COLORS = {
  tiktok_gymnya: '#ff6b35',
  tiktok_andravads: '#4a9eff',
  ig_gymnya: '#ff2d55',
  ig_andravads: '#e1306c',
  youtube: '#ff0000',
};

const PILLAR_COLORS = {
  gym: '#ff6b35',
  work: '#4a9eff',
  travel: '#40d9a0',
  growth: '#c77dff',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 text-xs shadow-xl">
        <div className="font-mono text-subtle mb-2">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-body">{p.name}:</span>
            <span className="text-heading font-semibold">{p.value?.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<'growth' | 'pillars' | 'posts'>('growth');

  return (
    <section id="analytics" className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Analytics Dashboard</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="section-title">
            Progress, <span className="text-accent">tracked.</span>
          </h2>
          <span className="text-subtle text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-surface">
            ⚠️ Mock data — updated manually
          </span>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard
            icon={<Users size={16} />}
            label="Total Followers"
            value={totalStats.totalFollowers.toLocaleString()}
            sub="across all platforms"
            color="text-accent"
          />
          <StatCard
            icon={<Eye size={16} />}
            label="Total Views"
            value={(totalStats.totalViews / 1000).toFixed(0) + 'K'}
            sub="all-time"
            color="text-work"
          />
          <StatCard
            icon={<TrendingUp size={16} />}
            label="Engagements"
            value={(totalStats.totalEngagements / 1000).toFixed(1) + 'K'}
            sub="likes + comments + shares + saves"
            color="text-travel"
          />
          <StatCard
            icon={<FileText size={16} />}
            label="Content Pieces"
            value={totalStats.totalPosts.toString()}
            sub="published"
            color="text-growth"
          />
        </div>

        {/* Per-platform cards */}
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {platformAnalytics.map((p) => (
            <div key={p.platform} className="card-base p-5">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-sm font-semibold capitalize"
                  style={{ color: PLATFORM_COLORS[p.platform] }}
                >
                  {p.platform === 'tiktok' ? 'TikTok' : p.platform === 'instagram' ? 'Instagram' : 'YouTube'}
                </span>
                <span className="flex items-center gap-1 text-travel text-xs font-mono">
                  <ArrowUpRight size={10} />
                  +{p.followersGrowth}/mo
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <Metric label="Followers" value={p.followers.toLocaleString()} />
                <Metric label="Avg Views" value={p.avgViewsPerPost.toLocaleString()} />
                <Metric label="Eng. Rate" value={p.engagementRate + '%'} />
                <Metric label="Posts" value={p.totalPosts.toString()} />
              </div>
            </div>
          ))}
        </div>

        {/* Chart tabs */}
        <div className="card-base p-6">
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['growth', 'pillars', 'posts'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-bg font-semibold'
                    : 'border border-border text-subtle hover:border-muted hover:text-body'
                }`}
              >
                {tab === 'growth' ? 'Follower Growth' : tab === 'pillars' ? 'Views by Pillar' : 'Top Posts'}
              </button>
            ))}
          </div>

          {activeTab === 'growth' && (
            <div>
              <div className="text-subtle text-xs font-mono mb-4">Weekly follower count — all accounts</div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={weeklySnapshots} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" />
                  <XAxis dataKey="label" tick={{ fill: '#6b6b6b', fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#6b6b6b', fontSize: 10 }} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: '#6b6b6b' }} />
                  {Object.entries(LINE_COLORS).map(([key, color]) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={color}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, strokeWidth: 0 }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === 'pillars' && (
            <div>
              <div className="text-subtle text-xs font-mono mb-4">Monthly views by content pillar</div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={monthlyPillarViews} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" />
                  <XAxis dataKey="month" tick={{ fill: '#6b6b6b', fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#6b6b6b', fontSize: 10 }} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: '#6b6b6b' }} />
                  {Object.entries(PILLAR_COLORS).map(([key, color]) => (
                    <Bar key={key} dataKey={key} fill={color} radius={[3, 3, 0, 0]} />
                  ))}
                </BarChart>
              </ResponsiveContainer>

              {/* Pillar performance table */}
              <div className="mt-6 pt-6 border-t border-border overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-left">
                      {['Pillar', 'Posts', 'Avg Views', 'Avg Eng.', 'Top Format'].map((h) => (
                        <th key={h} className="pb-3 pr-4 text-subtle font-mono font-normal uppercase tracking-wide text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pillarPerformance.map((row) => (
                      <tr key={row.pillar} className="border-t border-border">
                        <td className="py-2.5 pr-4 font-display font-semibold text-heading">{row.pillar}</td>
                        <td className="py-2.5 pr-4 font-mono text-body">{row.posts}</td>
                        <td className="py-2.5 pr-4 font-mono text-body">{row.avgViews.toLocaleString()}</td>
                        <td className="py-2.5 pr-4 font-mono text-body">{row.avgEngagement}%</td>
                        <td className="py-2.5 pr-4 text-subtle">{row.topFormat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="overflow-x-auto">
              <div className="text-subtle text-xs font-mono mb-4">Top 5 posts by views</div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left">
                    {['Title', 'Platform', 'Pillar', 'Views', 'Saves'].map((h) => (
                      <th key={h} className="pb-3 pr-4 text-subtle font-mono font-normal uppercase tracking-wide text-[10px]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topPosts.map((post, i) => (
                    <tr key={post.id} className="border-t border-border">
                      <td className="py-3 pr-4 text-body max-w-[200px] truncate">
                        <span className="text-subtle mr-2 font-mono">#{i + 1}</span>
                        {post.title}
                      </td>
                      <td className="py-3 pr-4 font-mono text-subtle">{post.platform}</td>
                      <td className="py-3 pr-4 font-mono text-subtle capitalize">{post.pillar}</td>
                      <td className="py-3 pr-4 font-mono text-heading font-semibold">
                        {(post.views / 1000).toFixed(1)}K
                      </td>
                      <td className="py-3 pr-4 font-mono text-travel">{post.saves.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon, label, value, sub, color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="card-base p-5">
      <div className={`mb-3 ${color}`}>{icon}</div>
      <div className="font-display font-bold text-2xl text-heading">{value}</div>
      <div className="text-body text-sm">{label}</div>
      <div className="text-subtle text-xs mt-0.5 font-mono">{sub}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-subtle text-[10px] font-mono uppercase">{label}</div>
      <div className="text-heading font-semibold mt-0.5">{value}</div>
    </div>
  );
}
