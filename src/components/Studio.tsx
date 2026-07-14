import { Type, Move, Palette, Download, Eye } from 'lucide-react';

const tools = [
  { icon: Type, label: 'Text' },
  { icon: Move, label: 'Drag' },
  { icon: Palette, label: 'Style' },
  { icon: Eye, label: 'Preview' },
  { icon: Download, label: 'Export' },
];

export default function Studio() {
  return (
    <section id="studio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-lime-400 uppercase tracking-wider mb-3">
            The Editor
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-6">
            Drag, type, export.
            <br />
            That's the whole flow.
          </h2>
          <p className="text-ink-300 text-lg leading-relaxed mb-8">
            We stripped out every clunky menu and buried setting. What's left is a
            canvas, your text, and a toolbar that fits in one hand. You'll make your
            first meme before the coffee's done brewing.
          </p>

          <div className="space-y-3">
            {[
              'Real-time preview as you type',
              '100+ fonts with outline & shadow controls',
              'Undo / redo with full history scrubber',
              'Keyboard shortcuts for power users',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                </span>
                <span className="text-ink-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* mock editor UI */}
        <div className="glass rounded-2xl p-3 shadow-2xl shadow-black/40">
          <div className="rounded-xl bg-ink-900 overflow-hidden">
            {/* toolbar */}
            <div className="flex items-center gap-1 px-3 py-2.5 border-b border-white/5 bg-ink-950/50">
              <div className="flex gap-1.5 mr-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex gap-1">
                {tools.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-ink-300 text-xs"
                  >
                    <t.icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* canvas */}
            <div className="aspect-[4/3] bg-gradient-to-br from-ink-800 to-ink-950 flex items-center justify-center p-8 relative">
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                  When the code finally
                </p>
                <p className="font-display font-bold text-2xl text-lime-400 uppercase tracking-tight mt-1">
                  compiles on the first try
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[10px] font-mono">
                1080 × 1080
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 bg-ink-950/50">
              <span className="text-xs text-ink-400 font-mono">meme_001.nmeme</span>
              <button className="px-3 py-1.5 rounded-lg bg-lime-400 text-ink-950 text-xs font-semibold hover:bg-lime-300 transition-colors">
                Export PNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
