import { Instagram, Youtube, Mail } from 'lucide-react';
import { profile } from '../data/profileData';

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const links = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Videos', href: '#videos' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Archive', href: '#archive' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Work With Me', href: '#contact' },
];

export default function Footer() {
  const igAccounts = profile.accounts.filter((a) => a.platform === 'instagram');
  const ttAccounts = profile.accounts.filter((a) => a.platform === 'tiktok');
  const ytAccount = profile.accounts.find((a) => a.platform === 'youtube');

  return (
    <footer className="border-t border-border bg-surface/40 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-extrabold text-2xl text-heading mb-2">
              andrava<span className="text-accent">.</span>
            </div>
            <p className="text-subtle text-sm leading-relaxed max-w-xs mb-4">
              {profile.tagline}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-subtle text-xs font-mono hover:text-body transition-colors"
            >
              <Mail size={12} />
              {profile.email}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-subtle text-[10px] font-mono uppercase tracking-widest mb-4">Pages</div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-subtle text-sm hover:text-body transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-subtle text-[10px] font-mono uppercase tracking-widest mb-4">Follow</div>
            <ul className="space-y-2">
              {igAccounts.map((acc) => (
                <li key={acc.handle}>
                  <a
                    href={acc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-subtle text-sm hover:text-body transition-colors"
                  >
                    <Instagram size={12} />
                    {acc.handle}
                  </a>
                </li>
              ))}
              {ttAccounts.map((acc) => (
                <li key={acc.handle}>
                  <a
                    href={acc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-subtle text-sm hover:text-body transition-colors"
                  >
                    <TikTokIcon />
                    {acc.handle}
                  </a>
                </li>
              ))}
              {ytAccount && (
                <li>
                  <a
                    href={ytAccount.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-subtle text-sm hover:text-body transition-colors"
                  >
                    <Youtube size={12} />
                    {ytAccount.handle}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-subtle text-xs font-mono">
            © {new Date().getFullYear()} Andrava — Built in public.
          </div>
          <div className="text-subtle text-xs font-mono">
            8–5 salaryman. Gym after work. Travel when possible.
          </div>
        </div>
      </div>
    </footer>
  );
}
