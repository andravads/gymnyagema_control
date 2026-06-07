import type { PlatformAnalytics, WeeklySnapshot } from '../types';

// ── MOCK DATA — replace with real numbers from your analytics exports ──
// Last updated: manually

export const platformAnalytics: PlatformAnalytics[] = [
  {
    platform: 'tiktok',
    followers: 3200,
    followersGrowth: 340,
    totalViews: 186000,
    totalLikes: 15400,
    totalComments: 820,
    totalShares: 3200,
    totalSaves: 5100,
    totalPosts: 48,
    avgViewsPerPost: 3875,
    engagementRate: 4.2,
    lastUpdated: '2024-05-25',
  },
  {
    platform: 'instagram',
    followers: 2110,
    followersGrowth: 180,
    totalViews: 52000,
    totalLikes: 6800,
    totalComments: 310,
    totalShares: 890,
    totalSaves: 4200,
    totalPosts: 62,
    avgViewsPerPost: 839,
    engagementRate: 5.8,
    lastUpdated: '2024-05-25',
  },
  {
    platform: 'youtube',
    followers: 420,
    followersGrowth: 55,
    totalViews: 8900,
    totalLikes: 480,
    totalComments: 96,
    totalShares: 120,
    totalSaves: 210,
    totalPosts: 8,
    avgViewsPerPost: 1113,
    engagementRate: 3.1,
    lastUpdated: '2024-05-25',
  },
];

// Combined totals
export const totalStats = {
  totalFollowers: platformAnalytics.reduce((sum, p) => sum + p.followers, 0),
  totalViews: platformAnalytics.reduce((sum, p) => sum + p.totalViews, 0),
  totalPosts: platformAnalytics.reduce((sum, p) => sum + p.totalPosts, 0),
  totalEngagements: platformAnalytics.reduce(
    (sum, p) => sum + p.totalLikes + p.totalComments + p.totalShares + p.totalSaves,
    0
  ),
};

// Weekly follower snapshots for growth chart
export const weeklySnapshots: WeeklySnapshot[] = [
  { week: '2024-W10', label: 'Mar 4', tiktok_gymnya: 2100, tiktok_andravads: 980, ig_gymnya: 720, ig_andravads: 490, youtube: 180 },
  { week: '2024-W11', label: 'Mar 11', tiktok_gymnya: 2180, tiktok_andravads: 1020, ig_gymnya: 750, ig_andravads: 510, youtube: 210 },
  { week: '2024-W12', label: 'Mar 18', tiktok_gymnya: 2240, tiktok_andravads: 1100, ig_gymnya: 780, ig_andravads: 530, youtube: 240 },
  { week: '2024-W13', label: 'Mar 25', tiktok_gymnya: 2320, tiktok_andravads: 1160, ig_gymnya: 820, ig_andravads: 560, youtube: 270 },
  { week: '2024-W14', label: 'Apr 1', tiktok_gymnya: 2410, tiktok_andravads: 1220, ig_gymnya: 860, ig_andravads: 590, youtube: 295 },
  { week: '2024-W15', label: 'Apr 8', tiktok_gymnya: 2520, tiktok_andravads: 1300, ig_gymnya: 910, ig_andravads: 620, youtube: 320 },
  { week: '2024-W16', label: 'Apr 15', tiktok_gymnya: 2640, tiktok_andravads: 1380, ig_gymnya: 960, ig_andravads: 660, youtube: 345 },
  { week: '2024-W17', label: 'Apr 22', tiktok_gymnya: 2750, tiktok_andravads: 1460, ig_gymnya: 1020, ig_andravads: 700, youtube: 365 },
  { week: '2024-W18', label: 'Apr 29', tiktok_gymnya: 2880, tiktok_andravads: 1560, ig_gymnya: 1080, ig_andravads: 740, youtube: 385 },
  { week: '2024-W19', label: 'May 6', tiktok_gymnya: 2980, tiktok_andravads: 1640, ig_gymnya: 1130, ig_andravads: 770, youtube: 398 },
  { week: '2024-W20', label: 'May 13', tiktok_gymnya: 3060, tiktok_andravads: 1700, ig_gymnya: 1180, ig_andravads: 810, youtube: 408 },
  { week: '2024-W21', label: 'May 20', tiktok_gymnya: 3200, tiktok_andravads: 1800, ig_gymnya: 1240, ig_andravads: 870, youtube: 420 },
];

// Monthly views by pillar (for bar chart)
export const monthlyPillarViews = [
  { month: 'Feb', gym: 18000, work: 8000, travel: 5000, growth: 2000 },
  { month: 'Mar', gym: 24000, work: 12000, travel: 9000, growth: 3000 },
  { month: 'Apr', gym: 38000, work: 18000, travel: 14000, growth: 5000 },
  { month: 'May', gym: 45000, work: 22000, travel: 20000, growth: 7000 },
];

// Pillar performance summary
export const pillarPerformance = [
  { pillar: 'Gym', posts: 28, avgViews: 14200, avgEngagement: 4.8, topFormat: 'Short video' },
  { pillar: 'Work', posts: 32, avgViews: 8600, avgEngagement: 5.2, topFormat: 'Short video' },
  { pillar: 'Travel', posts: 24, avgViews: 6800, avgEngagement: 6.1, topFormat: 'Photo dump' },
  { pillar: 'Growth', posts: 10, avgViews: 4200, avgEngagement: 4.4, topFormat: 'Long video' },
];

// Best performing posts
export const topPosts = [
  { id: 'gym-004', title: 'Sweat ≠ Fat Loss', platform: 'TikTok', views: 44500, saves: 760, pillar: 'Gym' },
  { id: 'travel-001', title: 'Saudi Arabia: Kota Modern yang Gue Gak Nyangka', platform: 'TikTok', views: 38900, saves: 1100, pillar: 'Travel' },
  { id: 'gym-003', title: 'Gym Split Simpel Buat Karyawan', platform: 'TikTok', views: 32100, saves: 1340, pillar: 'Gym' },
  { id: 'work-001', title: 'Hal yang Gue Pelajari dari 2 Tahun Jadi Karyawan', platform: 'TikTok', views: 21300, saves: 890, pillar: 'Work' },
  { id: 'gym-001', title: 'Kenapa Catatan Latihan Itu Penting', platform: 'TikTok', views: 18400, saves: 920, pillar: 'Gym' },
];
