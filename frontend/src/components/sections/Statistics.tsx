import React from 'react';
import { Award, Users, Landmark, Star, Globe } from 'lucide-react';

export const Statistics: React.FC = () => {
  const stats = [
    { 
      icon: <Award className="w-10 h-10 text-[#C48B3C]" strokeWidth={1} />, 
      content: <><span className="font-serif text-lg text-[#4D2D22] font-bold block mb-0.5">2000+</span><span className="block">Ceremonies</span><span className="block">Performed</span></>
    },
    { 
      icon: <Users className="w-10 h-10 text-[#C48B3C]" strokeWidth={1} />, 
      content: <><span className="font-serif text-lg text-[#4D2D22] font-bold block mb-0.5">7000+</span><span className="block">Happy Families</span><span className="block">& Clients</span></>
    },
    { 
      icon: <Landmark className="w-10 h-10 text-[#C48B3C]" strokeWidth={1} />, 
      content: <><span className="font-serif text-lg text-[#4D2D22] font-bold block mb-0.5">10+</span><span className="block">Years of</span><span className="block">Experience</span></>
    },
    { 
      icon: <Star className="w-10 h-10 text-[#C48B3C]" strokeWidth={1} />, 
      content: <><span className="font-serif text-lg text-[#4D2D22] font-bold block mb-0.5 opacity-0 hidden lg:block">_</span><span className="block mt-1">Trusted by</span><span className="block">Celebrities</span></>
    },
    { 
      icon: <Globe className="w-10 h-10 text-[#C48B3C]" strokeWidth={1} />, 
      content: <><span className="font-serif text-lg text-[#4D2D22] font-bold block mb-0.5">India & Global</span><span className="block">Serving Across</span><span className="block">India & Abroad</span></>
    },
  ];

  return (
    <section className="w-full">
      <div className="bg-white rounded-[16px] shadow-soft border border-[#E8D8C5] px-6 py-6 md:px-10 md:py-8 flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-8 gap-x-4">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-4 flex-1 min-w-[140px]">
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              <div className="font-sans text-[#4D2D22] text-xs md:text-sm font-medium leading-tight">
                {stat.content}
              </div>
            </div>
            
            {/* Vertical Divider (hide on last element and adjust for mobile wrap) */}
            {index < stats.length - 1 && (
              <div className="hidden lg:block w-[1px] h-12 bg-[#E8D8C5] flex-shrink-0 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
