import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Bonus from './components/Bonus';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const Features = lazy(() => import('./components/Features'));

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainPoints />
      <HowItWorks />
      <Suspense fallback={<div className="h-24" />}>
        <Features />
      </Suspense>
      <Bonus />
      <Guarantee />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
