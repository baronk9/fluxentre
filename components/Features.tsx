import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURE_ITEMS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', uv: 2000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#F3EFFF]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          
          {/* Content (Left) */}
          <div className="flex-1 w-full">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 bg-transparent text-sm font-semibold text-gray-600 mb-6">
              Our Featured
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Stop Guessing. <br/> Start Tracking.</h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Visually plan, track, and deliver e-commerce results without the stress. We provide you with clear dashboards and transparent reporting.
            </p>

            <ul className="space-y-4">
              {FEATURE_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center justify-between border-b border-gray-200/50 pb-4 text-lg font-medium text-[#1A1A1A] group cursor-pointer hover:text-blue-600 transition-colors">
                  <span>{item.text}</span>
                  <ArrowUpRight className="text-[#1A1A1A] group-hover:text-blue-600 transition-all" size={20} />
                </li>
              ))}
            </ul>
          </div>

          {/* Visual/Chart (Right) */}
          <div className="flex-1 w-full">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white/50 relative overflow-hidden">
               <div className="mb-8 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Total Revenue</p>
                    <h3 className="text-3xl font-bold">$124,500.00</h3>
                  </div>
                  <div className="text-green-500 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">
                    +12.5% vs last month
                  </div>
               </div>

               <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" strokeWidth={3} />
                    </AreaChart>
                 </ResponsiveContainer>
               </div>
               
               {/* Decorative floating card */}
               <div className="absolute top-4 right-4 bg-black text-white p-4 rounded-2xl shadow-lg max-w-[150px]">
                 <p className="text-xs text-gray-400 mb-1">Active Users</p>
                 <p className="font-bold text-xl">1,204</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};