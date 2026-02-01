
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 px-4 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group cursor-pointer mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg shadow-indigo-100 flex items-center justify-center text-white font-black text-xl">C</div>
              <span className="font-black text-2xl text-slate-900 tracking-tight">Centerly Ops</span>
            </div>
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
              Helping B2B SaaS founders turn messy internal data into clear weekly decisions through high-performance AI dashboards.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>
                <a href="#what-we-do" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">What We Do</a>
              </li>
              <li>
                <a href="#who-it-is-for" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">Who It's For</a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#book" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">Book Walkthrough</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Get in touch</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>
                <a 
                  href="mailto:centerly.ops@gmail.com?subject=10%20min%20walkthrough%20request" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  centerly.ops@gmail.com
                </a>
              </li>
              <li className="text-slate-400 font-medium text-xs">
                Response time: <span className="text-slate-600">Under 2 hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {currentYear} Centerly Ops. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-900 transition-colors cursor-pointer uppercase">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-slate-900 transition-colors cursor-pointer uppercase">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
