import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h4 className="text-blue-500 font-bold tracking-wide uppercase mb-4">Get in Touch</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Let's Build Something Extraordinary.</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              Ready to take your e-commerce brand to the next level? Fill out the form or reach out directly. We're excited to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F7FF] flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110 duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-semibold text-[#1A1A1A]">hello@fluxentre.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-[#F3EFFF] flex items-center justify-center text-purple-600 transition-transform group-hover:scale-110 duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-semibold text-[#1A1A1A]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-[#FDFGCC] flex items-center justify-center text-yellow-700 transition-transform group-hover:scale-110 duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-xl font-semibold text-[#1A1A1A]">123 Innovation Dr, Tech City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1A] mb-3 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1A] mb-3 ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#1A1A1A] mb-3 ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none transition-all duration-200 resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full justify-center py-4 text-lg !rounded-xl" icon={<Send size={18} />}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};