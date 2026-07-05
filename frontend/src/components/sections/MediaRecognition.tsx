import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MediaRecognition: React.FC = () => {
  return (
    <section className="py-12 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto border-t border-[#E8D8C5]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center">
          <div className="h-[1px] w-8 bg-[#C48B3C] hidden md:block"></div>
          <h2 className="px-4 text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold whitespace-nowrap">
            Media Recognition
          </h2>
          <div className="h-[1px] w-8 bg-[#C48B3C] hidden md:block"></div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start gap-8 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder names for media logos as per reference */}
           <span className="font-serif font-bold text-2xl text-[#6E1E18]">Lokmat</span>
           <span className="font-serif font-bold text-2xl text-[#1a56db]">Sakal</span>
           <span className="font-serif font-bold text-2xl text-black">ABP</span>
           <span className="font-serif font-bold text-2xl text-[#cc0000]">TV9</span>
        </div>

        <button className="flex items-center text-[#4D2D22] font-sans text-sm font-bold border border-[#E8D8C5] px-6 py-2 rounded bg-white hover:bg-[#F8F3EC] transition-colors">
          View All Features <ArrowRight className="ml-2 w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
