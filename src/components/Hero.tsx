import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lime-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-ink-200 mb-8">
            <Sparkles className="w-4 h-4 text-lime-400" />
            The meme studio for the next generation
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight max-w-4xl leading-[1.05]">
            Make memes that
            <br />
            <span className="text-gradient-lime">actually slap.</span>
          </h1>

          <p className="mt-6 text-lg text-ink-300 max-w-xl leading-relaxed">
            NotMEME is a blazing-fast meme studio with AI-powered captions, a massive
            template library, and one-click sharing. No watermarks. No nonsense.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-ink-950 font-semibold hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/25 hover:shadow-lime-400/40 hover:-translate-y-0.5"
            >
              Start creating — it's free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              <Play className="w-5 h-5 text-lime-400" />
              Watch demo
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-400">
            No credit card required · Free forever plan · 2M+ creators
          </p>
        </div>

        {/* floating preview card */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-2 shadow-2xl shadow-black/40">
            <div className="rounded-xl bg-ink-900 overflow-hidden aspect-[16/9] flex items-center justify-center relative">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 30% 40%, rgba(174,242,26,0.15), transparent 60%)',
                }}
              />
              <div className="relative grid grid-cols-3 gap-3 p-8 w-full h-full">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-ink-800 border border-white/5 flex items-center justify-center text-ink-500 text-xs font-mono animate-float"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    meme_{i + 1}.png
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
