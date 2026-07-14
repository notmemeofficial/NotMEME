import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Studio', href: '#studio' },
  { label: 'Community', href: '#community' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass bg-ink-950/70' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center text-ink-950 font-bold text-lg shadow-lg shadow-lime-400/30 group-hover:scale-110 transition-transform">
            N
          </span>
          <span className="font-display font-bold text-xl tracking-tight">
            Not<span className="text-lime-400">MEME</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-ink-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-ink-300 hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-lime-400 text-ink-950 text-sm font-semibold hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20"
          >
            <Flame className="w-4 h-4" />
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass bg-ink-950/95 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-ink-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 px-3 py-2.5 rounded-lg bg-lime-400 text-ink-950 font-semibold text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
