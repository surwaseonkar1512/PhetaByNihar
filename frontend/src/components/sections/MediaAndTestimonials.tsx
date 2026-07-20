import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      <div className="px-6 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4D2D22] tracking-wider uppercase mb-1">
          {title}
        </h2>
        <div className="text-[#C48B3C] text-sm">❦</div>
      </div>
      <div className="h-[1px] flex-1 bg-[#E8D8C5]"></div>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-[#F8F3EC]">

      {/* Media Recognition Bar */}
      <section className="w-full bg-[#FDFBF7] py-6 px-5 border-y border-[#E8D8C5]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between gap-6">

          {/* Featured On Label */}
          <div className="font-sans font-bold text-[#C48B3C] uppercase text-sm tracking-widest whitespace-nowrap hidden md:block">
            Featured On
          </div>

          {/* Logos Container using real images from Wikimedia */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12 flex-1">
            {/* YouTube */}
            <div className="flex items-center gap-1.5 opacity-90">
              {/* <Youtube className="w-7 h-7 text-[#FF0000]" /> */}
              <span className="font-sans font-bold text-lg tracking-tighter text-black">YouTube</span>
            </div>

            {/* Lokmat */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP08kDC-LuqPvGnwMw7Fmu6P-jUqjR0eZuyAwEWXv8FA&s=10" alt="Lokmat" className="h-6 md:h-8 mix-blend-multiply opacity-90" />

            {/* Sakal */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6ggYEp8r-2N3ozRrXKNXUcHU01H96iDGRdba8aMlBQ&s=10" alt="Sakal" className="h-8 md:h-10 mix-blend-multiply object-contain opacity-90" />

            {/* ABP Majha */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_t8c3FrUZqYATxNprGMxbhTy5fJClxDYAdUxF-yLng&s=10" alt="ABP Majha" className="h-6 md:h-8 mix-blend-multiply opacity-90" />

            {/* TV9 Marathi (CSS fallback closely matching logo) */}
            <div className="flex flex-col items-center leading-none opacity-90 mix-blend-multiply bg-white px-1">
              <span className="font-sans font-black text-[22px] md:text-[26px] text-[#0055A5] italic">tv<span className="text-[#E31E24]">9</span></span>
              <span className="text-[10px] md:text-[11px] text-black font-bold tracking-wide">मराठी</span>
            </div>

            {/* Zee 24 Taas */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyF2m1reWnBerMi1NZDc_r_dQQK3H46Y-m3yCMnydA&s=10" alt="Zee 24 Taas" className="h-8 md:h-10 mix-blend-multiply opacity-90" />
          </div>

          {/* Watch More Button */}
          <button className="flex items-center text-[#CC0000] font-sans text-xs md:text-sm font-bold border border-[#CC0000]/30 px-5 py-2.5 rounded-[12px] bg-white hover:bg-[#CC0000]/5 transition-colors shadow-sm whitespace-nowrap w-full md:w-auto justify-center">
            {/* <Youtube className="w-5 h-5 mr-2 text-[#CC0000]" /> */}
            Watch More on YouTube <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto w-full relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2">
          <img src="/heritage_sketch.png" alt="" className="w-[500px] h-[500px] object-cover mix-blend-multiply rounded-full" />
        </div>

        <div className="flex flex-col items-center relative z-10">
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
        </div>
      </section>

    </div>
  );
};
