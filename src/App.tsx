import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Bonus from './components/Bonus';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Bonus />
      <Guarantee />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
