
import React from 'react';
import TallyForm from './TallyForm';
import { Mail, Clock, Calendar, Zap, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="book" className="py-16 md:py-40 px-4 relative overflow-hidden">
      {/* Dynamic Animated Background - Performance optimized for mobile */}
      <div className="absolute inset-0 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 opacity-100" />
        
        {/* Simplified Orbs for performance on smaller devices */}
        <div className="absolute top-[-5%] left-[-10%] w-[80%] md:w-[60%] h-[40%] md:h-[60%] bg-indigo-600/15 rounded-full blur-[80px] md:blur-[120px] animate-[pulse_8s_infinite]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[80%] md:w-[50%] h-[40%] md:h-[50%] bg-pink-600/15 rounded-full blur-[80px] md:blur-[120px] animate-[pulse_10s_infinite_2s]" />
        
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-5 text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md">
              <Star size={12} className="fill-indigo-400 text-indigo-400" /> Executive Access
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[1] tracking-tight">
              Reclaim your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">strategic focus.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              Stop drowning in raw data. See how Centerly Ops turns internal chaos into a decisive advantage.
            </p>

            <div className="grid gap-4 md:gap-6 mb-8 md:mb-12 text-left">
              {[
                { icon: <Clock size={16} />, title: "10-Min Brief", desc: "Fast overview." },
                { icon: <ShieldCheck size={16} />, title: "No-Commitment", desc: "Pure value, no sales pitch." },
                { icon: <Zap size={16} />, title: "Live Logic Gap", desc: "Find your blindspots." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-white tracking-wide">{item.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4 pt-8 border-t border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Contact directly</span>
              <a 
                href="mailto:centerly.ops@gmail.com?subject=10%20min%20walkthrough%20request"
                className="flex items-center gap-2 text-indigo-300 font-bold hover:text-white transition-colors group text-sm md:text-base"
              >
                centerly.ops@gmail.com
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Form Window */}
          <div className="lg:col-span-7 relative mt-4 md:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[1.5rem] md:rounded-[2.5rem] blur opacity-10" />
            
            <div className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden border border-white/20">
              {/* Mock Window Chrome - Optimized for mobile */}
              <div className="bg-slate-50 border-b border-slate-100 py-3 px-4 md:py-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Live: Intake</span>
                </div>
              </div>
              
              <div className="p-0 sm:p-2 md:p-4">
                <TallyForm />
              </div>
            </div>
            
            {/* Contextual Badges - Hidden on very small screens, responsive on tablet */}
            <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 p-4 md:p-6 bg-white shadow-xl rounded-2xl md:rounded-3xl border border-slate-100 hidden sm:block animate-bounce animation-delay-700">
               <div className="text-[8px] md:text-[10px] font-black text-indigo-600 mb-0.5 tracking-tighter uppercase">Availability</div>
               <div className="text-xs md:text-sm font-bold text-slate-900 tracking-tight">Slots open for Q2</div>
            </div>
            
            <div className="absolute -bottom-6 left-4 md:-bottom-8 md:left-12 p-3 md:p-5 bg-slate-900/95 shadow-xl rounded-xl md:rounded-2xl border border-white/10 hidden sm:flex items-center gap-2 md:gap-3 backdrop-blur-xl">
               <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <ShieldCheck size={14} className="md:w-[18px] md:h-[18px]" />
               </div>
               <span className="text-white text-[10px] md:text-xs font-bold whitespace-nowrap">SOC2 Compliant Env</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
