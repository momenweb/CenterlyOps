
import React from 'react';
import { ArrowLeft, Gavel } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2 text-indigo-600 font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <Gavel size={12} /> Service Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-500 font-medium">Last updated: June 2024</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing the Centerly Ops website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. Description of Service</h2>
            <p>
              Centerly Ops is an AI Operations Agency providing boutique consulting and custom internal dashboard builds for B2B SaaS companies. The website serves as a portfolio and lead generation tool for our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos, and images, is the property of Centerly Ops and is protected by intellectual property laws. You may not reproduce or distribute any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. Limitation of Liability</h2>
            <p>
              Centerly Ops uses AI-driven insights to help business leaders make decisions. However, we do not guarantee the accuracy of AI-generated predictions. Business decisions made based on our internal dashboards are the sole responsibility of the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws applicable to boutique digital agencies in our primary jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
