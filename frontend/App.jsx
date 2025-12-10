import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CustomerWaitlist from './components/CustomerWaitlist';
import HowItWorks from './components/HowItWorks';
import BrandPartnership from './components/BrandPartnership';
import Categories from './components/Categories';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

// Top-level app layout: navbar, main sections, footer
const App = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Global toast notifications */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#1A3A34',
            color: '#fff',
            border: '1px solid #D4AF37',
          },
        }}
      />

      {/* Sticky navigation on top */}
      <Navbar />

      {/* Main page sections, in scroll order */}
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Features />
        <CustomerWaitlist />
        <HowItWorks />
        <BrandPartnership />
        <Categories />
      </main>

      {/* Footer with branding + social links */}
      <Footer />
    </div>
  );
};

export default App;