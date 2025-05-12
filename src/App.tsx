
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import TargetAudience from './components/TargetAudience';
import CapabilitiesSection from './components/CapabilitiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <TargetAudience />
        <CapabilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
