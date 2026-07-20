import React from 'react';
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
        <div className="flex items-center justify-center">
          <div className="h-[1px] w-8 bg-[#C48B3C]"></div>
          <h2 className="px-4 text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold">
            Products & Rentals Preview
          </h2>
          <div className="h-[1px] w-8 bg-[#C48B3C]"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-soft p-2 mb-4 group-hover:shadow-soft-hover group-hover:-translate-y-2 transition-all duration-300 border border-[#E8D8C5]">
              <div className="w-full h-full rounded-full overflow-hidden border border-[#F8F3EC] bg-white">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h4 className="font-serif text-[#4D2D22] font-bold text-center mb-1">{product.name}</h4>
            <span className="text-[#C48B3C] text-xs font-sans uppercase tracking-wider flex items-center group-hover:text-[#6E1E18] transition-colors">
              View Collection <ArrowRight className="ml-1 w-3 h-3" />
            </span>
          </motion.div>
        ))}

        {/* Rental Collection Special Card */}
        <div className="flex flex-col justify-center items-center h-full">
           <div className="w-full h-40 bg-[#6E1E18] rounded-[16px] shadow-soft p-6 flex flex-col justify-between group cursor-pointer hover:bg-[#7D201D] transition-colors relative overflow-hidden">
             <div className="absolute right-0 bottom-0 opacity-20 w-32 h-32 bg-[url('/heritage_sketch.png')] bg-contain bg-no-repeat bg-right-bottom"></div>
             <h4 className="font-serif text-white font-bold text-xl relative z-10">
               Explore All Products & Rentals
             </h4>
             <span className="text-[#D7A65B] text-sm font-sans flex items-center mt-4 relative z-10">
               View All Products <ArrowRight className="ml-2 w-4 h-4" />
             </span>
           </div>
        </div>

      </div>
    </section>
  );
};
