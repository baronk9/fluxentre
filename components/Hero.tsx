import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              Building World-Class <br />
              <span className="text-gray-400">E-Commerce</span> Brands.
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Turn your product ideas into profitable digital empires. We handle everything from brand identity to scaling sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Get Started
              </Button>
              <Button variant="outline" icon={<PlayCircle size={18} />}>
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src="https://picsum.photos/seed/startup/800/800" 
                alt="Team member analyzing data" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-[#FDFGCC] text-[#1A1A1A] px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform cursor-default">
                <span className="text-xl">🚀</span>
                <span>ROI Focused</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E6F7FF] rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute top-10 -right-10 w-64 h-64 bg-[#F3EFFF] rounded-full blur-3xl opacity-60 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};