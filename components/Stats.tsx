import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STAT_ITEMS } from '../constants';

export const Stats: React.FC = () => {
  // Define styles for each card index to match the reference: White, Yellow, Blue.
  const getCardStyle = (index: number) => {
    switch (index) {
      case 0: // Customers / Revenue
        return 'bg-white border border-gray-200';
      case 1: // Reviews / Brands
        return 'bg-[#FDFGCC] border border-transparent';
      case 2: // Experiences / ROI
        return 'bg-[#E6F7FF] border border-transparent';
      default:
        return 'bg-white border border-gray-200';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 bg-transparent text-sm font-semibold text-gray-600 mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] max-w-2xl">
            More Than 5 Million+ Users Have Said Yes To Track
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STAT_ITEMS.map((stat, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] p-8 md:p-10 flex flex-col justify-between h-full ${getCardStyle(index)}`}
            >
              <div>
                <p className="text-sm font-bold text-[#1A1A1A] mb-6 uppercase tracking-wide opacity-80 border-l-2 border-black pl-3">
                  {stat.label}
                </p>
                <div className="text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
                  {stat.value}
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-black/5 flex justify-end">
                 <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-[#1A1A1A]">
                   <ArrowRight size={18} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};