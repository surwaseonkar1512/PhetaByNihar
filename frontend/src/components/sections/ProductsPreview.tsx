import React from 'react';
import { Divider } from '../ui/Divider';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ProductsPreview: React.FC = () => {
  const products = [
    { name: 'Miniature Pheta', image: '/product_mini_pheta.png' },
    { name: 'Wagnakha', image: '/product_wagnakha.png' },
    { name: 'Rajmudra', image: '/product_wagnakha.png' }, // Using fallback image due to quota
    { name: 'Kada', image: '/product_wagnakha.png' },     // Using fallback image due to quota
  ];

  return (
    <section id="products" className="py-16 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto bg-[#F4E8DA] rounded-[32px] my-10 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute right-0 top-0 opacity-10 w-96 h-96 bg-[url('/heritage_sketch.png')] bg-contain bg-no-repeat bg-right-top"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="px-4 text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold">
            Products & Rentals Preview
          </h2>
          <Divider />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 items-stretch">

        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white rounded-[16px] overflow-hidden shadow-soft group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-[#E8D8C5]"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow items-center justify-between text-center bg-white border-t border-[#F8F3EC]">
              <h4 className="font-serif text-[#4D2D22] text-lg font-bold mb-4">{product.name}</h4>

              <button className="bg-[#6E1E18] text-white px-5 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-[#7D201D] transition-colors w-full mt-auto shadow-sm border border-[#4D2D22]/20">
                Take on Rent
              </button>
            </div>
          </motion.div>
        ))}

        {/* Rental Collection Special Card */}
        <div className="flex flex-col h-full">
          <div className="w-full h-full min-h-[200px] bg-[#6E1E18] rounded-[16px] shadow-soft p-6 flex flex-col justify-center group cursor-pointer hover:bg-[#7D201D] transition-colors relative overflow-hidden">
            <h4 className="font-serif text-white font-bold text-2xl relative z-10 mb-4 leading-tight">
              Explore All Products & Rentals
            </h4>
            <span className="text-[#D7A65B] text-sm font-sans flex items-center mt-auto relative z-10 uppercase tracking-wider font-semibold">
              View Catalog <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
