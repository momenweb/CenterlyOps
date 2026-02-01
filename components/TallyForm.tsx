
import React, { useEffect } from 'react';

const TallyForm: React.FC = () => {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const d = document;
    
    const loadTally = () => {
      // @ts-ignore
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement('script');
      s.src = w;
      s.onload = loadTally;
      s.onerror = loadTally;
      d.body.appendChild(s);
    } else {
      loadTally();
    }
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden min-h-[500px]">
      <iframe 
        data-tally-src="https://tally.so/embed/PdOOrx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" 
        width="100%" 
        height="550" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0} 
        title="Centerly Ops Walkthrough Request"
        className="w-full"
      />
    </div>
  );
};

export default TallyForm;
