import { TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';

const memes = [
  { top: 'Me explaining to my boss', bottom: 'why I need 3 monitors', likes: '12.4k', color: 'from-orange-500/20 to-red-500/10' },
  { top: 'POV: the deploy works', bottom: 'on Friday afternoon', likes: '8.2k', color: 'from-lime-500/20 to-green-500/10' },
  { top: 'Nobody:', bottom: 'Me at 3am: just one more episode', likes: '21.7k', color: 'from-blue-500/20 to-indigo-500/10' },
  { top: 'My brain during a meeting', bottom: 'vs. my brain at 2am', likes: '5.6k', color: 'from-pink-500/20 to-rose-500/10' },
];

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold text-lime-400 uppercase tracking-wider mb-3">
              Trending now
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
              Fresh from the feed.
            </h2>
          </div>
          <a href="#" className="text-ink-300 hover:text-white transition-colors text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Explore all
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {memes.map((m, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${m.color} flex flex-col items-center justify-center p-6 text-center relative`}>
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <p className="relative font-display font-bold text-white text-sm uppercase leading-tight">
                  {m.top}
                </p>
                <p className="relative font-display font-bold text-lime-400 text-sm uppercase leading-tight mt-2">
                  {m.bottom}
                </p>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-4 text-xs text-ink-400">
                  <span className="flex items-center gap-1 group-hover:text-red-400 transition-colors">
                    <Heart className="w-3.5 h-3.5" />
                    {m.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {(Math.random() * 2 + 0.3).toFixed(1)}k
                  </span>
                </div>
                <Share2 className="w-3.5 h-3.5 text-ink-400 group-hover:text-lime-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
