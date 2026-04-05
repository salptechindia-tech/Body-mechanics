import React, { Suspense } from 'react';
import { ThemeInjector } from './components/ThemeInjector';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyCTAs } from './components/layout/StickyCTAs';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Programs } from './components/sections/Programs';
import { Pricing } from './components/sections/Pricing';
import { Trainers } from './components/sections/Trainers';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <ThemeInjector />
      <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-secondary">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Programs />
          <Pricing />
          <Trainers />
          <Testimonials />
          <Gallery />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <StickyCTAs />
      </div>
    </>
  );
}
