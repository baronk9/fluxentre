import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_ITEMS } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">What Is Fluxentre?</h2>
          <p className="text-gray-500 text-lg">
            Comprehensive solutions tailored for modern e-commerce growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((item, index) => (
            <div 
              key={index}
              className={`${item.color} p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[350px] group border border-black/5`}
            >
              <div>
                {/* Decorative Dash matching reference */}
                <div className="w-8 h-0.5 bg-[#1A1A1A] mb-6"></div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] leading-tight pr-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              
              <a href="#" className="flex items-center gap-2 font-semibold text-[#1A1A1A] group-hover:gap-4 transition-all">
                {item.actionText} <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center"><ArrowRight size={14} /></div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};