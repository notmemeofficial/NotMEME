const logos = ['Reddit', '9GAG', 'Discord', 'TikTok', 'X', 'Instagram', 'Twitch', 'Pinterest'];

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/5 bg-ink-900/50 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-400 mb-6">
        Shared across the internet every day
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-16 pr-16">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-display font-bold text-ink-500 hover:text-ink-200 transition-colors whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
