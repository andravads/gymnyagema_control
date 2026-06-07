import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#pillars' },
  { label: 'Videos', href: '#videos' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Archive', href: '#archive' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Work With Me', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-lg text-heading tracking-tight">
          andrava<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.label === 'Work With Me' ? (
              <a key={link.href} href={link.href} className="btn-primary text-xs px-4 py-2">
                Work With Me
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-subtle text-sm font-body hover:text-heading transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-subtle hover:text-heading transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body text-sm font-body hover:text-heading transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
