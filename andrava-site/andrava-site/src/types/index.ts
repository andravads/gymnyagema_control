export type Platform = 'tiktok' | 'instagram' | 'youtube';
export type Pillar = 'gym' | 'work' | 'travel' | 'growth';
export type ContentFormat = 'short-video' | 'carousel' | 'photo-dump' | 'long-video' | 'reel';
export type ExperimentStatus = 'planned' | 'running' | 'completed' | 'paused';

export interface ContentItem {
  id: string;
  title: string;
  hook: string;
  platform: Platform;
  pillar: Pillar;
  format: ContentFormat;
  date: string;
  thumbnail: string;
  url: string;
  embedUrl?: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  notes?: string;
  featured?: boolean;
  tags?: string[];
}

export interface PlatformAnalytics {
  platform: Platform;
  followers: number;
  followersGrowth: number; // monthly delta
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  totalSaves: number;
  totalPosts: number;
  avgViewsPerPost: number;
  engagementRate: number; // percentage
  lastUpdated: string;
}

export interface WeeklySnapshot {
  week: string; // "2024-W01"
  label: string; // "Jan 1–7"
  tiktok_gymnya: number;
  tiktok_andravads: number;
  ig_gymnya: number;
  ig_andravads: number;
  youtube: number;
}

export interface Experiment {
  id: string;
  title: string;
  pillar: Pillar | 'all';
  hypothesis: string;
  action: string;
  result?: string;
  lesson?: string;
  nextStep?: string;
  status: ExperimentStatus;
  startDate: string;
  endDate?: string;
  metric?: string;
  metricBefore?: number;
  metricAfter?: number;
}

export interface Profile {
  name: string;
  brandName: string;
  tagline: string;
  subTagline: string;
  bio: string;
  shortBio: string;
  email: string;
  accounts: SocialAccount[];
  pillars: ContentPillar[];
}

export interface SocialAccount {
  platform: Platform;
  handle: string;
  url: string;
  focus: string;
  followers?: number;
}

export interface ContentPillar {
  id: Pillar;
  name: string;
  description: string;
  longDescription: string;
  topics: string[];
  accounts: string[];
  emoji: string;
}
