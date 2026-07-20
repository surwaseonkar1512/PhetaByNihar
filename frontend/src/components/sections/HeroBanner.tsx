import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-[700px] flex items-center bg-[#F8F3EC] overflow-hidden pt-24 pb-32">

      {/* Background Fort Sketch (Left Side) */}
      <div
        className="absolute left-0 top-45 bottom-0 w-1/2 opacity-60 pointer-events-none bg-no-repeat bg-left-bottom"
        style={{
          backgroundImage: 'url(/heritage_sketch.png)',
          backgroundSize: '80%',
          mixBlendMode: 'multiply'
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full lg:w-1/2 lg:pr-12 pt-10 lg:pt-0"
        >
          <div className="inline-block mb-4">
            <p className="text-[#C48B3C] font-sans font-bold tracking-[0.15em] text-sm uppercase">
              Preserving Heritage. Celebrating Pride.
            </p>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif text-[#4D2D22] leading-tight mb-6">
            The Art of <br />
            <span className="text-[#6E1E18]">Maharashtrian</span><br />
            Pheta Ceremony
          </h1>

          <p className="text-[#4D2D22] font-sans text-lg lg:text-xl mb-10 max-w-lg leading-relaxed font-medium">
            Honoring traditions with elegance, respect & pride.<br />
            From royal weddings to cultural celebrations,<br />
            we bring the timeless art of Pheta tying to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" className="flex items-center group">
              <Calendar className="w-5 h-5 mr-2 text-[#D7A65B] group-hover:text-white transition-colors" />
              Book Now Page <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" className="flex items-center">
              Explore Our Work <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

      </div>

      {/* Right Image Full Bleed (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] z-0"
      >
        <img
          src="/service_pheta.webp"
          alt="Royal Maharashtrian Wedding Pheta"
          className="w-full h-full object-cover object-top mask-image-fade"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)', maskImage: 'linear-gradient(to right, transparent, black 15%)' }}
        />
      </motion.div>

      {/* Mobile Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="lg:hidden w-full mt-12 relative z-0 px-5"
      >
        <img
          src="/service_pheta.webp"
          alt="Royal Maharashtrian Wedding Pheta"
          className="w-full h-auto rounded-[20px] shadow-soft"
        />
      </motion.div>

    </section>
  );
};

