import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass p-12 sm:p-16 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-lime-500/20 rounded-full blur-[100px]" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Your next viral meme
            <br />
            is one click away.
          </h2>
          <p className="mt-5 text-ink-300 text-lg max-w-md mx-auto">
            Join 2 million creators making the internet funnier. No download, no
            signup wall — just open the studio and go.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-lime-400 text-ink-950 font-semibold hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/25 hover:-translate-y-0.5"
          >
            Open the Studio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
