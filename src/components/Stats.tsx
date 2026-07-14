const stats = [
  { value: '2M+', label: 'Active creators' },
  { value: '48M', label: 'Memes generated' },
  { value: '10k+', label: 'Templates' },
  { value: '4.9', label: 'App Store rating' },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-4xl sm:text-5xl text-gradient-lime">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
