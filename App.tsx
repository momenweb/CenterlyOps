
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'privacy' | 'terms') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-mesh-light selection:bg-indigo-100">
      <Header onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <WhatWeDo />
            <WhoItsFor />
            <HowItWorks />
            <CTA />
          </>
        )}
        {currentPage === 'privacy' && <PrivacyPolicy onNavigate={navigateTo} />}
        {currentPage === 'terms' && <TermsOfService onNavigate={navigateTo} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
