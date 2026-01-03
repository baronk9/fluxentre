import React from 'react';
import { PROCESS_ITEMS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Collage (Left) */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
               {/* Main Image */}
               <img 
                 src="https://picsum.photos/seed/process/600/800" 
                 alt="Strategic planning" 
                 className="w-4/5 h-full object-cover rounded-3xl shadow-xl z-10 relative"
               />
               
               {/* Floating Secondary Image */}
               <img 
                 src="https://picsum.photos/seed/meeting/400/400" 
                 alt="Team collaboration" 
                 className="absolute bottom-10 -right-4 lg:-right-12 w-3/5 aspect-square object-cover rounded-2xl shadow-2xl border-[6px] border-white z-20"
               />

               {/* Decorative Circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Content (Right) */}
          <div className="flex-1 w-full lg:pl-10">
            <h4 className="text-gray-400 font-semibold tracking-wide uppercase mb-4">Our Process</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">We Build Brands That Last.</h2>

            <div className="space-y-12">
              {PROCESS_ITEMS.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <span className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xl font-bold">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};