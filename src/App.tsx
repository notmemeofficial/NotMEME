import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Studio from './components/Studio';
import Community from './components/Community';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Studio />
        <Community />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
