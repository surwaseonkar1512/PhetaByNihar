import React from 'react';
import { Divider } from '../ui/Divider';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Pheta's tying added a royal touch to our wedding. Every guest loved it!",
      name: "Radhika & Swapnil",
      location: "Pune",
      image: "https://ui-avatars.com/api/?name=Radhika&background=6E1E18&color=fff"
    },
    {
      quote: "Professional, punctual and passionate. Highly recommended for any cultural event.",
      name: "Rohit Deshmukh",
      location: "Mumbai",
      image: "https://ui-avatars.com/api/?name=Rohit&background=4D2D22&color=fff"
    },
    {
      quote: "The workshop was amazing! Nihar knows the true art behind every fold.",
      name: "Anagha Kulkarni",
      location: "USA",
      image: "https://ui-avatars.com/api/?name=Anagha&background=C48B3C&color=fff"
    }
  ];

  return (
    <section className="relative py-20 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto bg-[#FFFDFB]">

      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold">
          CLIENT LOVE
        </h2>
        <Divider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="absolute left-0 bottom-0 opacity-100 pointer-events-none z-0">
          <div className="relative">
            <img src="/aboutsideiamge.png" alt="" className="w-[400px] md:w-[600px] lg:w-[800px] mix-blend-multiply object-contain object-bottom -scale-x-100" />
            {/* Subtle Fog effects for blending */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFDFB] to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FFFDFB] to-transparent"></div>
          </div>
        </div>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-[16px] shadow-soft border border-[#E8D8C5] flex flex-col relative">
            <div className="absolute top-6 left-6 text-6xl text-[#F4E8DA] font-serif leading-none">"</div>
            <p className="font-sans text-[#666666] text-base italic mb-8 relative z-10 pt-4">
              {review.quote}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-serif text-[#4D2D22] font-bold">{review.name}</h4>
                <p className="font-sans text-[#999999] text-xs">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="w-8 h-2 rounded-full bg-[#6E1E18]"></div>
        <div className="w-2 h-2 rounded-full bg-[#E8D8C5]"></div>
        <div className="w-2 h-2 rounded-full bg-[#E8D8C5]"></div>
      </div>

    </section>
  );
};

