import { Github, Twitter, Instagram } from 'lucide-react';

const cols = [
  { title: 'Product', links: ['Features', 'Studio', 'Templates', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press kit'] },
  { title: 'Resources', links: ['Help center', 'Community', 'API docs', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licenses'] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center text-ink-950 font-bold text-lg">
                N
              </span>
              <span className="font-display font-bold text-xl">
                Not<span className="text-lime-400">MEME</span>
              </span>
            </a>
            <p className="text-ink-400 text-sm max-w-xs">
              The modern meme studio. Create, remix, and share — no watermarks, no
              nonsense.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-300 hover:text-lime-400 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-400 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © 2026 NotMEME. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">
            Made with caffeine and questionable humor.
          </p>
        </div>
      </div>
    </footer>
  );
}
