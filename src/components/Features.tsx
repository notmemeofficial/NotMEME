import { Wand2, Layers, Zap, Share2, Image as ImageIcon, Users } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Caption Magic',
    desc: 'Generate punchy captions in seconds. Pick a vibe — chaotic, wholesome, or cursed — and let the AI do the writing.',
  },
  {
    icon: Layers,
    title: '10k+ Templates',
    desc: 'From classic Drake to the latest trending format. Updated daily by the community so you never miss a wave.',
  },
  {
    icon: Zap,
    title: 'Instant Export',
    desc: 'Render in 4K, GIF, or transparent PNG in under a second. No queue, no watermark, no waiting.',
  },
  {
    icon: Share2,
    title: 'One-Click Share',
    desc: 'Push directly to Reddit, X, Discord, or copy a clean link. Auto-formatted for every platform.',
  },
  {
    icon: ImageIcon,
    title: 'Smart Crop & Resize',
    desc: 'Auto-detects the subject and reframes perfectly for stories, squares, or timelines. Zero manual nudging.',
  },
  {
    icon: Users,
    title: 'Remix Culture',
    desc: 'Fork any meme, add your twist, and publish. Full edit lineage so credit always flows to the original.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-lime-400 uppercase tracking-wider mb-3">
            Everything you need
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            A studio that gets out of your way.
          </h2>
          <p className="mt-4 text-ink-300 text-lg">
            NotMEME packs pro-grade tools into a dead-simple interface so you can go
            from idea to viral in under a minute.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mb-5 group-hover:bg-lime-400/20 transition-colors">
                <f.icon className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-ink-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
