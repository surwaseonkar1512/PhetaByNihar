import React from 'react';
import { Divider } from '../ui/Divider';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Tent, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../ui/Button';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Wedding Pheta Ceremony',
      description: 'Traditional & royal pheta ceremony for weddings that becomes a memory for life.',
      image: '/hero_bride_groom.png',
      icon: <Crown className="text-[#C48B3C] w-6 h-6" />
    },
    {
      title: 'Cultural Events',
      description: 'Celebrate festivals, temple events & cultural programs with pride.',
      image: '/service_pheta.webp',
      icon: <Tent className="text-[#C48B3C] w-6 h-6" />
    },
    {
      title: 'Workshops & Training',
      description: 'Learn the art of Pheta tying with our interactive workshops & training.',
      image: '/hero_bride_groom.png',
      icon: <GraduationCap className="text-[#C48B3C] w-6 h-6" />
    },
    {
      title: 'Corporate Events',
      description: 'Add a touch of tradition to corporate gatherings, award functions & more.',
      image: '/service_pheta.webp',
      icon: <Briefcase className="text-[#C48B3C] w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-14 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 relative"
      >
        <h2 className="text-3xl lg:text-4xl font-serif text-[#4D2D22] font-bold">
          PHETA SERVICES & WORKSHOPS
        </h2>
        <Divider />
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            key={index}
            className="bg-white rounded-[16px] overflow-hidden shadow-soft group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-[#E8D8C5]"
          >
            {/* Card Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="absolute -top-8 left-6 bg-white p-3 rounded-xl shadow-soft border border-[#E8D8C5]">
                {service.icon}
              </div>
              <h3 className="font-serif text-[#4D2D22] text-xl font-bold mt-4 mb-3">{service.title}</h3>
              <p className="font-sans text-[#666666] text-sm mb-6 flex-grow">{service.description}</p>

              <button className="text-[#6E1E18] font-sans text-sm font-semibold uppercase tracking-wider flex items-center hover:text-[#7D201D] transition-colors w-fit">
                Explore <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>



    </section>
  );
};

