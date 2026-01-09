import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Equipment />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}

export default App;