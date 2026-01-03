import React from 'react';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 rounded-t-[3rem]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Brand & Address */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Fluxentre.</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We help ambitious brands scale through design, technology, and data-driven marketing.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
               <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
               <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Subscribe for E-com Tips</h3>
            <p className="text-gray-400 mb-6 text-sm">Join 5,000+ founders receiving our weekly insights.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </Button>
            </form>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Methodology</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p>&copy; 2025 Fluxentre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};