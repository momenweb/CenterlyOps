
import React from 'react';
import { User, Settings, LineChart, Target } from 'lucide-react';

const RoleCard: React.FC<{ role: string; icon: React.ReactNode; color: string }> = ({ role, icon, color }) => (
  <div className={`flex items-center gap-4 md:gap-5 px-6 py-5 md:px-10 md:py-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group`}>
    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-${color}-50 text-${color}-600 group-hover:scale-110 transition-transform shrink-0`}>
      {React.cloneElement(icon as React.ReactElement, { size: 24, className: "md:w-[28px] md:h-[28px]" })}
    </div>
    <span className="text-lg md:text-xl font-black text-slate-800">{role}</span>
  </div>
);

const WhoItsFor: React.FC = () => {
  return (
    <section id="who-it-is-for" className="py-16 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6">
              <Target size={14} /> Strategic Fit
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">Built for B2B SaaS teams scaling up.</h2>
            <p className="text-base md:text-xl text-slate-500 leading-relaxed mb-4 lg:mb-0">
              Centerly Ops works best with companies that have growing revenue but have lost the ability to "see through" the noise of their growing data stacks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <RoleCard role="The Founder" icon={<User />} color="indigo" />
            <RoleCard role="The Operator" icon={<Settings />} color="purple" />
            <RoleCard role="Growth Teams" icon={<LineChart />} color="pink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
