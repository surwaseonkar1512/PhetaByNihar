import React from 'react';
import { Divider } from '../ui/Divider';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ProductsPreview: React.FC = () => {
  const products = [
    { name: 'Miniature Pheta', image: '/product_mini_pheta.png' },
    { name: 'Wagnakha', image: '/product_wagnakha.png' },
    { name: 'Rajmudra', image: '/product_wagnakha.png' },
    { name: 'Kada', image: '/product_wagnakha.png' },
  ];

  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto bg-[#F8F3EC] rounded-[24px] md:rounded-[32px] my-10 relative overflow-hidden shadow-sm border border-[#E8D8C5]">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat mix-blend-multiply pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="px-4 text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold">
            Products & Rentals
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#4D2D22] font-bold mt-3 mb-4">
            Exclusive Collection
          </h3>
          <Divider />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 items-stretch">

        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-soft-hover group flex flex-col h-full border border-[#E8D8C5] hover:border-[#C48B3C] transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative h-32 sm:h-48 md:h-56 overflow-hidden flex items-center justify-center p-3 sm:p-6 bg-[#FFFDFB]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-grow items-center justify-between text-center bg-white border-t border-[#F8F3EC]">
              <h4 className="font-serif text-[#4D2D22] text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-5 group-hover:text-[#6E1E18] transition-colors">{product.name}</h4>

              <button className="text-[#C48B3C] border border-[#C48B3C] bg-transparent px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-sans text-xs sm:text-sm font-bold hover:bg-[#C48B3C] hover:text-white transition-all w-full mt-auto group-hover:shadow-md">
                Take on Rent
              </button>
            </div>
          </motion.div>
        ))}

        {/* Rental Collection Special Card */}
        <div className="flex flex-col h-full">
          <div className="w-full h-full min-h-[160px] sm:min-h-[200px] bg-[#FFFDFB] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col justify-center items-center group cursor-pointer hover:bg-[#6E1E18] transition-all duration-500 relative overflow-hidden border border-[#E8D8C5] hover:border-[#6E1E18] text-center shadow-soft-hover transform hover:-translate-y-2">

            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#F8F3EC] group-hover:bg-white/10 flex items-center justify-center mb-3 sm:mb-6 transition-colors duration-500">
              <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 text-[#C48B3C] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>

            <h4 className="font-serif text-[#4D2D22] group-hover:text-white font-bold text-sm sm:text-xl relative z-10 leading-tight transition-colors duration-500">
              Explore Entire<br className="hidden sm:block" /> Collection
            </h4>

          </div>
        </div>

      </div>
    </section>
  );
};
