
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <Shield size={12} /> Legal Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last updated: June 2024</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Centerly Ops. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. The Data We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you request a walkthrough or contact us. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Identity Data: Name, company name, and job title.</li>
              <li>Contact Data: Email address and phone number.</li>
              <li>Business Data: Information about your company's data stack and internal operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p>
              We only use your personal data for the purposes of providing our agency services, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Scheduling and delivering walkthroughs of our platform.</li>
              <li>Communicating with you about your inquiry.</li>
              <li>Improving our website and service offerings based on feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. Third-Party Services</h2>
            <p>
              We use Tally.so for our intake forms. By submitting a form on our site, you acknowledge that your data will be processed by Tally in accordance with their privacy policy. We also use internal analytics to improve our site performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:centerly.ops@gmail.com" className="text-indigo-600 font-bold">centerly.ops@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
