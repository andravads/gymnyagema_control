# Andrava — Personal Brand Website

> 8–5 salaryman. Gym after work. Travel when possible.

A personal content hub built with React + Vite + TypeScript + Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Local Development

```bash
# 1. Navigate to project folder
cd andrava-site

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:5173
```

### Build for production
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 📁 Project Structure

```
andrava-site/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          — Fixed top navigation
│   │   ├── Hero.tsx            — Landing hero section
│   │   ├── About.tsx           — About + account stats
│   │   ├── Pillars.tsx         — 4 content pillars
│   │   ├── FeaturedVideos.tsx  — Video cards (featured)
│   │   ├── Analytics.tsx       — Dashboard with Recharts
│   │   ├── Archive.tsx         — Searchable/filterable content
│   │   ├── Experiments.tsx     — Growth experiments log
│   │   ├── Contact.tsx         — Collaboration section
│   │   └── Footer.tsx          — Footer with all links
│   ├── data/
│   │   ├── profileData.ts      — Your bio, accounts, pillars
│   │   ├── contentData.ts      — All content/videos
│   │   ├── analyticsData.ts    — Platform metrics + chart data
│   │   └── experimentsData.ts  — Content experiments
│   ├── types/
│   │   └── index.ts            — TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## ✏️ How to Update Content

### Add a new video
Open `src/data/contentData.ts` and add a new object to the `contentData` array:

```typescript
{
  id: 'gym-006',                          // unique id
  title: 'Judul konten lo',
  hook: 'Hook or caption first line',
  platform: 'tiktok',                     // 'tiktok' | 'instagram' | 'youtube'
  pillar: 'gym',                          // 'gym' | 'work' | 'travel' | 'growth'
  format: 'short-video',                  // see ContentFormat type
  date: '2024-06-01',
  thumbnail: 'https://your-thumbnail-url',
  url: 'https://tiktok.com/@gymnyagema/video/...',
  views: 5000,
  likes: 420,
  comments: 30,
  shares: 80,
  saves: 200,
  notes: 'Optional internal note about what worked',
  featured: false,                        // set true to show in Featured section
  tags: ['progressive overload', 'gym'],
}
```

### Update analytics
Open `src/data/analyticsData.ts` and update:
- `platformAnalytics[]` — follower counts, engagement rates per platform
- `weeklySnapshots[]` — add new weekly data points
- `monthlyPillarViews[]` — add new monthly row
- `topPosts[]` — update best performers

### Update profile info
Edit `src/data/profileData.ts` to change:
- Your bio text
- Account follower counts
- Social media URLs

### Add a new experiment
Open `src/data/experimentsData.ts` and add to the `experiments` array.

---

## 🌐 Deployment

### Vercel (Recommended — Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New → Project"
4. Import your repo
5. Settings: Framework = Vite, Build = `npm run build`, Output = `dist`
6. Click Deploy — it's live in ~60 seconds

**Custom domain:**
- In Vercel project → Settings → Domains
- Add `andrava.id` or your preferred domain
- Update nameservers at your registrar

### Netlify (Alternative — Free)

```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

Or connect GitHub for auto-deploy on every push.

---

## 🎯 Domain Recommendations

Best options for your brand:
1. `andrava.id` — Indonesian identity, clean and local
2. `andrava.xyz` — cheap, creative
3. `andravads.com` — matches your @andravads handle
4. `gema.id` — personal, if you want first-name branding

**Recommendation:** Go with `andrava.id` — it's the clearest match to your brand name and the `.id` TLD signals Indonesian creator authenticity.

---

## 📊 YouTube Channel Name Recommendation

**Use: `Andrava`** (simple, clean)

Why:
- Matches your primary brand name
- Unifies all platforms under one identity
- Easy to remember, easy to search
- "Andrava | Work Notes" or "Andrava | Gym Notes" can be channel descriptions, not the name itself
- Avoid sub-brand names — they fragment your identity when you're still building

---

## 🧠 Strategic Recommendations

### Brand Positioning
Your unique angle is the **salaryman-gymmer-explorer** intersection. Nobody else occupies this exact space in Indonesian content — someone who talks about work life, trains seriously, and travels occasionally, with data-backed practical content.

**Keep both accounts (@gymnyagema and @andravads)** — they serve different intent audiences. But unify them under the Andrava brand on your website. The website is the hub that connects both.

### What to Feature First
1. Your gym content with highest views (social proof)
2. One relatable salaryman monologue
3. A travel dump with strong visual appeal
Lead with gym content — it has the best numbers and it's the most searchable niche.

### How the Website Supports Affiliate Marketing
- Add a `Links` or `Gear I Use` page later with affiliate links (gym equipment, supplements, books)
- Each content card can link to a related affiliate product page
- Growth Log section builds trust with transparency — audiences who trust you click affiliate links
- Use the experiments section to document affiliate test results (this builds credibility with potential partners too)

### How to Support Sponsorships
The Contact section with your actual metrics makes a strong case even at small numbers. Engagement rate of 5%+ is above industry average. Lead with that.

### Weekly Metrics to Track
1. Follower delta per account (weekly)
2. Top 3 posts by views that week
3. Save rate (saves ÷ views) — best indicator of content value
4. Average views per post (are you improving?)
5. Which pillar performed best
6. Posting consistency score (did you hit your target?)

### Growing TikTok and Instagram via Website
- Add website link to all bio sections
- Use "full notes at andrava.id" as a CTA in content
- Archive page = SEO surface for people searching your topics
- Growth Log content can reference website data publicly

### Making the Website Useful Before Big Numbers
- It signals professionalism to brands even at 5K followers
- It's a portfolio showing your content thinking and strategy
- The experiments section shows you're data-driven — rare for small creators
- It functions as a media kit when you add it to your pitch emails

---

## 🗓️ Roadmap

### Phase 1 — Now
- [x] Launch website with all sections
- [ ] Connect custom domain
- [ ] Add real thumbnail URLs
- [ ] Update all mock data with real numbers

### Phase 2 — Month 2–3
- [ ] Add CSV import for analytics (Level 2 analytics)
- [ ] Add a `/links` page with affiliate gear list
- [ ] Add YouTube embed for long-form content
- [ ] Add Open Graph meta tags for social sharing

### Phase 3 — Month 4–6
- [ ] Build media kit PDF export from website data
- [ ] Add newsletter signup (simple email capture)
- [ ] Add a blog/notes section for long-form text content
- [ ] Explore TikTok/Instagram API for auto-sync metrics

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Recharts | Charts in Analytics section |
| Lucide React | Icons |

---

Built in public by Andrava. Documented, not perfected.
