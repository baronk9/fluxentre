import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1A1A1A]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;