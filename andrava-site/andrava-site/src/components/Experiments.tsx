import { useState } from 'react';
import { CheckCircle2, PlayCircle, Clock, PauseCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { experiments } from '../data/experimentsData';
import type { ExperimentStatus, Pillar } from '../types';

const statusConfig: Record<
  ExperimentStatus,
  { label: string; icon: React.ReactNode; classes: string }
> = {
  completed: {
    label: 'Completed',
    icon: <CheckCircle2 size={12} />,
    classes: 'text-travel bg-travel-dim border-travel',
  },
  running: {
    label: 'Running',
    icon: <PlayCircle size={12} />,
    classes: 'text-accent bg-accent/10 border-accent/30',
  },
  planned: {
    label: 'Planned',
    icon: <Clock size={12} />,
    classes: 'text-subtle bg-surface border-border',
  },
  paused: {
    label: 'Paused',
    icon: <PauseCircle size={12} />,
    classes: 'text-work bg-work-dim border-work',
  },
};

const pillarColors: Record<string, string> = {
  gym: 'text-gym',
  work: 'text-work',
  travel: 'text-travel',
  growth: 'text-growth',
  all: 'text-accent',
};

function ExperimentCard({ exp }: { exp: (typeof experiments)[0] }) {
  const [open, setOpen] = useState(false);
  const s = statusConfig[exp.status];

  return (
    <div className="card-base overflow-hidden">
      <button
        className="w-full text-left p-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`pill border text-[10px] ${s.classes} inline-flex items-center gap-1`}>
              {s.icon}
              {s.label}
            </span>
            {exp.pillar && (
              <span className={`text-[10px] font-mono ${pillarColors[exp.pillar]}`}>
                {exp.pillar === 'all' ? 'All pillars' : exp.pillar.charAt(0).toUpperCase() + exp.pillar.slice(1)}
              </span>
            )}
          </div>
          <div className="font-display font-semibold text-heading text-sm">{exp.title}</div>
          <div className="text-subtle text-xs mt-1 font-mono">{exp.startDate}{exp.endDate ? ` → ${exp.endDate}` : ' → ongoing'}</div>
        </div>
        {open ? (
          <ChevronUp size={16} className="text-subtle mt-1 flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-subtle mt-1 flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0 space-y-4 border-t border-border">
          <Block label="Hypothesis" text={exp.hypothesis} />
          <Block label="Action" text={exp.action} />
          {exp.result && <Block label="Result" text={exp.result} accent />}
          {exp.lesson && <Block label="Lesson" text={exp.lesson} accent />}
          {exp.nextStep && <Block label="Next step" text={exp.nextStep} />}

          {exp.metric && (
            <div className="flex gap-4 pt-2">
              <div className="card-base px-4 py-3 flex-1">
                <div className="text-subtle text-[10px] font-mono uppercase mb-1">{exp.metric} — before</div>
                <div className="font-display font-bold text-xl text-heading">
                  {exp.metricBefore ?? '—'}
                </div>
              </div>
              {exp.metricAfter !== undefined && (
                <div className="card-base px-4 py-3 flex-1 border-travel">
                  <div className="text-subtle text-[10px] font-mono uppercase mb-1">{exp.metric} — after</div>
                  <div className="font-display font-bold text-xl text-travel">{exp.metricAfter}</div>
                  {exp.metricBefore !== undefined && (
                    <div className="text-travel text-xs font-mono mt-0.5">
                      +{((exp.metricAfter - exp.metricBefore) / exp.metricBefore * 100).toFixed(1)}%
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Block({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-subtle text-[10px] font-mono uppercase tracking-widest mb-1.5">{label}</div>
      <p className={`text-sm leading-relaxed ${accent ? 'text-body' : 'text-subtle'}`}>{text}</p>
    </div>
  );
}

export default function Experiments() {
  const [filter, setFilter] = useState<ExperimentStatus | 'all'>('all');

  const filtered = filter === 'all'
    ? experiments
    : experiments.filter((e) => e.status === filter);

  const counts = {
    all: experiments.length,
    completed: experiments.filter((e) => e.status === 'completed').length,
    running: experiments.filter((e) => e.status === 'running').length,
    planned: experiments.filter((e) => e.status === 'planned').length,
  };

  return (
    <section id="experiments" className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="section-label">Growth Experiments</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="section-title">
            Testing what{' '}
            <span className="text-accent">actually works.</span>
          </h2>
          <p className="text-subtle text-sm max-w-xs leading-relaxed">
            Treating content like experiments. Hypothesis → action → result → lesson.
          </p>
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['all', 'running', 'completed', 'planned'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === s
                  ? 'bg-accent text-bg font-semibold'
                  : 'border border-border text-subtle hover:border-muted hover:text-body'
              }`}
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
              <span className="opacity-60">({counts[s] ?? 0})</span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((exp) => (
            <ExperimentCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
