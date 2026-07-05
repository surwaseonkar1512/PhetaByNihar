import React from 'react';
import { Landmark, Crown, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Landmark className="w-6 h-6 text-[#C48B3C]" strokeWidth={1.5} />,
      text: "Traditional Maharashtrian Heritage"
    },
    {
      icon: <Crown className="w-6 h-6 text-[#C48B3C]" strokeWidth={1.5} />,
      text: "Elegant, Authentic & Royal Pheta Styles"
    },
    {
      icon: <Users className="w-6 h-6 text-[#C48B3C]" strokeWidth={1.5} />,
      text: "Personalized Ceremonies for Every Occasion"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C48B3C]" strokeWidth={1.5} />,
      text: "Passion, Perfection & Cultural Pride"
    }
  ];

  return (
    <section id="about" className="py-24 px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto relative">
      
      {/* Decorative Mandala on the right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none translate-x-1/2">
        <img src="/heritage_sketch.png" alt="" className="w-[300px] h-[300px] object-cover rounded-full mix-blend-multiply" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-stretch relative z-10">
        
        {/* Left Side: Portrait Image */}
        <div className="w-full lg:w-[35%] relative shrink-0">
          <div className="relative rounded-[24px] overflow-hidden shadow-soft h-full min-h-[500px]">
            <img 
              src="/about_portrait.png" 
              alt="Nihar Tambde Portrait" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Middle: Content */}
        <div className="w-full lg:w-[38%] flex flex-col justify-center py-4 shrink-0">
          <p className="text-[#C48B3C] font-sans font-bold tracking-[0.15em] text-sm uppercase mb-3">
            About Nihar Tambde
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#4D2D22] leading-tight mb-6">
            A Tradition Passed <br/> Down with <span className="text-[#6E1E18]">Pride.</span>
          </h2>
          <p className="text-[#4D2D22] font-sans text-base leading-relaxed mb-6 font-medium">
            With deep respect for Maharashtrian culture and years of dedicated practice, Nihar Tambde keeps the royal tradition of Pheta tying alive. Each fold is more than just cloth – it's an emotion, a symbol of respect, honor and our glorious heritage.
          </p>
          
          <div className="mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Signature_placeholder.svg" 
              alt="Signature" 
              className="h-12 opacity-80"
              style={{ filter: 'invert(16%) sepia(58%) saturate(3015%) hue-rotate(345deg) brightness(90%) contrast(105%)' }}
            />
          </div>
          
          <div>
            <Button variant="secondary" className="flex items-center text-sm px-6 py-2.5">
              Know More About Nihar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full lg:w-[27%] bg-[#FCF8F2] border border-[#E8D8C5] rounded-[24px] p-8 flex flex-col justify-center gap-8 shadow-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <p className="font-sans text-[#4D2D22] text-sm font-medium leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
