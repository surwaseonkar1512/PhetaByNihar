import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Divider } from '../ui/Divider';

export const FeaturedConversations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Interviews', 'Podcasts', 'TV Shows', 'Culture Talks', 'Wedding Stories'];

  const videos = [
    { title: 'अधीपतीचा राजेशाही फेटा बांधतानाची खास झलक आणि फेटयाबद्दलचा विशेष अभिप्राय नक्की बघा @PhetabyNihar', channel: 'Zee Marathi', url: 'https://www.youtube.com/embed/OkjwpA-MdNc' },
    { title: 'अधीपतीचा राजेशाही फेटा बांधतानाची खास झलक आणि फेटयाबद्दलचा विशेष अभिप्राय नक्की बघा @PhetabyNihar', channel: 'Zee Marathi', url: 'https://www.youtube.com/embed/OkjwpA-MdNc' },
    { title: 'अधीपतीचा राजेशाही फेटा बांधतानाची खास झलक आणि फेटयाबद्दलचा विशेष अभिप्राय नक्की बघा @PhetabyNihar', channel: 'Zee Marathi', url: 'https://www.youtube.com/embed/OkjwpA-MdNc' },
    { title: 'अधीपतीचा राजेशाही फेटा बांधतानाची खास झलक आणि फेटयाबद्दलचा विशेष अभिप्राय नक्की बघा @PhetabyNihar', channel: 'Zee Marathi', url: 'https://www.youtube.com/embed/OkjwpA-MdNc' },
    { title: 'अधीपतीचा राजेशाही फेटा बांधतानाची खास झलक आणि फेटयाबद्दलचा विशेष अभिप्राय नक्की बघा @PhetabyNihar', channel: 'Zee Marathi', url: 'https://www.youtube.com/embed/OkjwpA-MdNc' },
  ];

  return (
    <section className="py-16 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto">

      {/* Section Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-serif text-[#4D2D22] font-bold">
          Featured Conversations & Podcasts
        </h2>
        <Divider />
      </motion.div>

      {/* Tabs */}


      {/* Videos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {/* Large Featured Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2 bg-black rounded-[16px] overflow-hidden relative group h-[350px]"
        >
          <iframe
            className="w-full h-full"
            src={videos[0].url}
            title={videos[0].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </motion.div>

        {/* Small Video Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.slice(1).map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white rounded-[16px] overflow-hidden shadow-soft border border-[#E8D8C5] group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h4 className="font-serif text-[#4D2D22] font-bold text-sm leading-snug mb-3 line-clamp-2">{video.title}</h4>
                <div className="text-xs text-[#999999] font-sans flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <img src={`https://ui-avatars.com/api/?name=${video.channel.charAt(0)}&background=random`} alt="" className="w-full h-full" />
                  </div>
                  {video.channel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



    </section>
  );
};
