import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-[#F8F3EC] overflow-hidden pt-24 pb-20 lg:pt-24 lg:pb-32">

      {/* Background Fort Sketch */}
      <div
        className="absolute left-0 top-45 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-60 pointer-events-none bg-no-repeat bg-left-bottom"
        style={{
          backgroundImage: 'url(/heritage_sketch.png)',
          backgroundSize: '80%',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Right Image (Desktop Side-by-Side) / Background Image (Mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 lg:right-0 lg:left-auto lg:top-0 lg:bottom-0 lg:w-[45%] z-0 pointer-events-none"
      >
        <img
          src="/service_pheta.webp"
          alt="Royal Maharashtrian Wedding Pheta"
          className="w-full h-full object-cover object-top lg:object-right"
        />
        {/* Mobile Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 lg:hidden"></div>
        
        {/* Desktop Fade Mask */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(to right, #F8F3EC 0%, transparent 25%)'
        }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mt-10 lg:mt-0"
        >
          <div className="inline-block mb-3 lg:mb-4">
            <p className="text-[#D7A65B] lg:text-[#C48B3C] font-sans font-bold tracking-[0.15em] text-xs sm:text-sm uppercase bg-black/30 lg:bg-transparent px-4 py-1.5 lg:px-0 lg:py-0 rounded-full lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none border border-[#D7A65B]/30 lg:border-none">
              Preserving Heritage. Celebrating Pride.
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white lg:text-[#4D2D22] leading-tight mb-4 lg:mb-6 drop-shadow-lg lg:drop-shadow-none">
            The Art of <br />
            <span className="text-[#F8F3EC] lg:text-[#6E1E18]">Maharashtrian</span><br />
            Pheta Ceremony
          </h1>

          <p className="text-white/90 lg:text-[#4D2D22] font-sans text-sm sm:text-base lg:text-xl mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-md lg:drop-shadow-none">
            Honoring traditions with elegance, respect & pride. From royal weddings to cultural celebrations, we bring the timeless art of Pheta tying to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center group shadow-xl text-sm px-6 py-3 border-none">
              <Calendar className="w-5 h-5 mr-2 text-[#D7A65B] group-hover:text-white transition-colors" />
              Book Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center shadow-lg lg:shadow-sm border-[#E8D8C5] bg-white/10 lg:bg-transparent text-white lg:text-[#4D2D22] hover:bg-white/20 text-sm px-6 py-3 backdrop-blur-md lg:backdrop-blur-none">
              Explore Work <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

