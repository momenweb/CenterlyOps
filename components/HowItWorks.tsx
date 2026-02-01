
import React from 'react';
import { Share2, LayoutPanelLeft, FileText, AlertTriangle } from 'lucide-react';

const Step: React.FC<{ number: string; title: string; icon: React.ReactNode; last?: boolean }> = ({ number, title, icon, last }) => (
  <div className="flex gap-4 md:gap-10 group">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center text-xl md:text-3xl font-black text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-md md:shadow-lg shadow-indigo-100/50 shrink-0">
        {number}
      </div>
      {!last && <div className="w-0.5 md:w-1 h-16 md:h-24 bg-gradient-to-b from-indigo-100 to-transparent my-2" />}
    </div>
    <div className="pt-1.5 md:pt-3 pb-8">
      <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-2">
        <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-slate-50 text-slate-600 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors shrink-0">
          {React.cloneElement(icon as React.ReactElement, { size: 18, className: "md:w-6 md:h-6" })}
        </div>
        <h3 className="text-lg md:text-2xl font-black text-slate-900 leading-tight">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
        Automated setups that require zero internal engineering bandwidth.
      </p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-32 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-8 tracking-tight">From setup to insights</h2>
          <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Our seamless white-glove process gets you up and running in days, not months.</p>
        </div>

        <div className="mt-8 md:mt-16 space-y-2 md:space-y-4">
          <Step number="1" title="Connect data sources" icon={<Share2 />} />
          <Step number="2" title="We deploy your dashboard" icon={<LayoutPanelLeft />} />
          <Step number="3" title="Curated weekly summaries" icon={<FileText />} />
          <Step number="4" title="Real-time change alerts" icon={<AlertTriangle />} last />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
