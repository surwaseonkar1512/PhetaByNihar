import React from 'react';
import { Divider } from '../ui/Divider';
import { motion } from 'framer-motion';

export const MediaAndTestimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Nihar's Pheta tying added a royal touch to our wedding. Every guest loved it!",
      name: "Radhika & Swapnil",
      location: "Pune",
      image: "https://ui-avatars.com/api/?name=Radhika&background=4D2D22&color=fff"
    },
    {
      quote: "Professional, punctual and passionate. Highly recommended for any cultural event.",
      name: "Rohit Deshmukh",
      location: "Mumbai",
      image: "https://ui-avatars.com/api/?name=Rohit&background=6E1E18&color=fff"
    },
    {
      quote: "The workshop was amazing! We learned the true art behind every fold.",
      name: "Anagha Kulkarni",
      location: "USA",
      image: "https://ui-avatars.com/api/?name=Anagha&background=C48B3C&color=fff"
    }
  ];

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-center mb-6 w-full max-w-3xl mx-auto">
      <div className="h-[1px] flex-1 bg-[#E8D8C5]"></div>
      <div className="px-6 flex flex-col items-center w-full">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4D2D22] tracking-wider uppercase mb-1">
          {title}
        </h2>
        <Divider />
      </div>
      <div className="h-[1px] flex-1 bg-[#E8D8C5]"></div>
    </div>
  );

  return (
    <section className="relative w-full py-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/aboutsideiamge.png')] bg-cover bg-center opacity-30 pointer-events-none"></div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#F8F3EC] opacity-70 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center px-5 md:px-10 lg:px-16">
        {/* Media Recognition Bar */}
        <section className="w-full py-8">
          <div className="max-w-[1400px] mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between gap-6 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-1">
              {/* YouTube */}
              <div className="flex items-center gap-1.5 opacity-100">
                <span className="font-sans font-bold text-xl tracking-tighter text-black drop-shadow-sm">YouTube</span>
              </div>

              {/* Logos */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP08kDC-LuqPvGnwMw7Fmu6P-jUqjR0eZuyAwEWXv8FA&s=10" alt="Lokmat" className="h-8 md:h-10 mix-blend-multiply opacity-100 drop-shadow-sm" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6ggYEp8r-2N3ozRrXKNXUcHU01H96iDGRdba8aMlBQ&s=10" alt="Sakal" className="h-10 md:h-12 mix-blend-multiply object-contain opacity-100 drop-shadow-sm" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_t8c3FrUZqYATxNprGMxbhTy5fJClxDYAdUxF-yLng&s=10" alt="ABP Majha" className="h-8 md:h-10 mix-blend-multiply opacity-100 drop-shadow-sm" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyF2m1reWnBerMi1NZDc_r_dQQK3H46Y-m3yCMnydA&s=10" alt="Zee 24 Taas" className="h-10 md:h-12 mix-blend-multiply opacity-100 drop-shadow-sm" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12">
          <SectionHeader title="CLIENT LOVE" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mt-10">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="bg-[#FFFDFB] p-8 rounded-[24px] shadow-sm border border-[#E8D8C5] flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3 mb-8">
                  <div className="text-6xl font-serif text-[#C48B3C] leading-none opacity-40 h-8">“</div>
                  <p className="font-sans text-[#4D2D22] text-sm md:text-base font-medium leading-relaxed mt-2">
                    {review.quote}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white" />
                  <div>
                    <h4 className="font-sans text-[#4D2D22] font-bold text-sm">{review.name}</h4>
                    <p className="font-sans text-[#999999] text-xs uppercase tracking-widest font-semibold mt-0.5">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4D2D22] cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8D8C5] cursor-pointer hover:bg-[#C48B3C] transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8D8C5] cursor-pointer hover:bg-[#C48B3C] transition-colors"></div>
          </div>
        </section>
      </div>
    </section>
  );
};
