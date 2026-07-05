import React from 'react';
import { ImageIcon, ArrowRight } from 'lucide-react';

export const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-24 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto bg-[#FFFDFB]">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-serif text-[#4D2D22] font-bold">
          OUR WORK
        </h2>
        <div className="flex items-center justify-center mt-4">
          <div className="h-[1px] w-16 bg-[#C48B3C]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C48B3C] mx-2"></div>
          <div className="h-[1px] w-16 bg-[#C48B3C]"></div>
        </div>
      </div>

      {/* Gallery Grid - Complex Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
        
        {/* Large Main Image */}
        <div className="col-span-2 row-span-2 relative rounded-[16px] overflow-hidden shadow-soft group">
          <img src="/hero_bride_groom.png" alt="Gallery 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </div>
        
        {/* Top Right Images */}
        <div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden shadow-soft group">
          <img src="/service_pheta.png" alt="Gallery 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden shadow-soft group">
          <img src="/about_portrait.png" alt="Gallery 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 object-top" />
        </div>

        {/* Bottom Right Images */}
        <div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden shadow-soft group">
          <img src="/hero_bride_groom.png" alt="Gallery 4" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </div>
        
        {/* View Gallery Card */}
        <div className="col-span-1 row-span-1 bg-[#6E1E18] rounded-[16px] flex flex-col items-center justify-center text-white cursor-pointer hover:bg-[#7D201D] transition-colors shadow-soft">
          <ImageIcon className="w-10 h-10 mb-4 text-[#D7A65B]" />
          <span className="font-serif text-lg font-medium">View Full Gallery</span>
          <ArrowRight className="w-5 h-5 mt-2" />
        </div>

      </div>
    </section>
  );
};
