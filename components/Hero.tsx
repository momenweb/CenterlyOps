
import React from 'react';
import { Mail, BarChart3, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-56 md:pb-40 px-4 overflow-hidden">
      {/* Dynamic Background Elements - Scaled for Mobile */}
      <div className="absolute top-10 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-100/40 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-pink-100/30 rounded-full blur-[70px] md:blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
            <Sparkles size={12} className="md:w-3.5 md:h-3.5" /> Redefining AI Operations
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8 text-slate-900">
            Internal AI dashboards for founders to <span className="gradient-text">understand what changed.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Stop guessing. Centerly Ops helps B2B SaaS teams turn fragmented internal data into proactive weekly decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
            <a 
              href="#book"
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-indigo-600 text-white font-bold text-base md:text-lg hover:bg-indigo-700 hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] transition-all active:scale-95"
            >
              Request a walkthrough
              <TrendingUp size={18} className="group-hover:translate-y-[-2px] transition-transform md:w-5 md:h-5" />
            </a>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm md:text-base">
                <CheckCircle2 size={16} className="text-green-500 md:w-4.5 md:h-4.5" />
                <span>10 minutes. No pitch.</span>
              </div>
              <span className="text-[10px] md:text-xs text-slate-400 font-medium sm:ml-6">Brief direct-to-inbox walkthrough.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="relative z-10 p-0.5 md:p-1 glass-card-light rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="bg-white rounded-[1.8rem] md:rounded-[2.8rem] p-5 md:p-8 overflow-hidden">
              {/* Header of Mock */}
              <div className="flex items-center justify-between mb-5 md:mb-8 border-b border-slate-50 pb-4 md:pb-6">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-200" />
                </div>
                <div className="h-1.5 md:h-2 w-16 md:w-24 bg-slate-100 rounded-full" />
              </div>
              
              {/* Content of Mock */}
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-5 rounded-2xl md:rounded-3xl bg-indigo-50/50 border border-indigo-100/50">
                    <div className="text-[8px] md:text-[10px] text-indigo-400 font-black uppercase tracking-tighter mb-1">Weekly Churn</div>
                    <div className="text-xl md:text-3xl font-black text-slate-800">-8.4%</div>
                    <div className="mt-1.5 md:mt-2 h-1 w-full bg-indigo-100 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                  <div className="p-3 md:p-5 rounded-2xl md:rounded-3xl bg-pink-50/50 border border-pink-100/50">
                    <div className="text-[8px] md:text-[10px] text-pink-400 font-black uppercase tracking-tighter mb-1">Expansion</div>
                    <div className="text-xl md:text-3xl font-black text-slate-800">+12%</div>
                    <div className="mt-1.5 md:mt-2 h-1 w-full bg-pink-100 rounded-full overflow-hidden">
                       <div className="h-full w-4/5 bg-pink-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                       <Sparkles size={12} className="md:w-3.5 md:h-3.5" />
                    </div>
                    <div>
                      <div className="text-[8px] md:text-[10px] font-black text-purple-500 uppercase">AI Root Cause</div>
                      <div className="text-xs md:text-sm font-bold text-slate-800">Payment failure spike in AU</div>
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed italic">
                    "Detected a 14% increase in stripe-declined-events following v2.4 rollout. Recommend gateway settings review."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements - Hidden or repositioned on mobile to avoid overflow */}
          <div className="absolute -top-6 -right-4 md:-top-12 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-white shadow-xl rounded-xl md:rounded-2xl flex items-center justify-center floating z-20">
             <BarChart3 className="text-indigo-500 md:w-8 md:h-8" size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-10 p-3 md:p-4 bg-white shadow-xl rounded-xl md:rounded-2xl flex flex-col gap-1 floating animation-delay-500 z-20">
             <div className="text-[8px] md:text-[10px] font-bold text-green-500 uppercase tracking-tight">Optimized</div>
             <div className="h-1 md:h-1.5 w-12 md:w-16 bg-slate-100 rounded-full" />
             <div className="h-1 md:h-1.5 w-8 md:w-12 bg-slate-100 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
