
import React from 'react';
import { Database, Search, BrainCircuit, Zap, ArrowUpRight } from 'lucide-react';

const FeatureCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  gradient: string; 
  index: number 
}> = ({ icon, title, description, gradient, index }) => (
  <div className="relative group">
    <div className={`absolute -inset-1 md:-inset-2 bg-gradient-to-br ${gradient} rounded-[2rem] md:rounded-[3rem] opacity-0 group-hover:opacity-10 blur-xl md:blur-2xl transition-all duration-500`} />
    
    <div className="relative bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100/50 transition-all duration-500 flex flex-col h-full">
      <div className="relative mb-6 md:mb-8 w-14 h-14 md:w-20 md:h-20">
        <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`} />
        <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center text-white z-10 scale-90 group-hover:scale-100 transition-transform duration-500`}>
          {React.cloneElement(icon as React.ReactElement, { size: 24, className: "md:w-8 md:h-8", strokeWidth: 2.5 })}
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-3 md:mb-4 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-300">Phase 0{index + 1}</span>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
        </div>
      </div>
    </div>
  </div>
);

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-32 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-64 md:h-64 bg-indigo-50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-pink-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 md:mb-24 text-center lg:text-left mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.95]">
            We turn data into <span className="gradient-text">executive intuition.</span>
          </h2>
          <p className="text-base md:text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0">
            Most dashboards just report numbers. Centerly Ops builds intelligence systems that explain the world to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard index={0} icon={<Database />} title="Connect all data" description="Unify Stripe, CRMs, and DBs into one source of truth without engineering overhead." gradient="from-blue-600 to-indigo-600" />
          <FeatureCard index={1} icon={<Search />} title="Detect weekly changes" description="Our algorithms ignore the noise and flag high-leverage anomalies that impact runway." gradient="from-indigo-600 to-purple-600" />
          <FeatureCard index={2} icon={<BrainCircuit />} title="Explain root causes" description="Go beyond 'what' to 'why'. Get human narratives explaining exactly what triggered every shift." gradient="from-purple-600 to-pink-600" />
          <FeatureCard index={3} icon={<Zap />} title="High-impact actions" description="Receive prioritized next steps every Monday morning, designed to optimize operations." gradient="from-pink-600 to-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
