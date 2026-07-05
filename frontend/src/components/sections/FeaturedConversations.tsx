import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '../ui/Button';

export const FeaturedConversations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Interviews', 'Podcasts', 'TV Shows', 'Culture Talks', 'Wedding Stories'];

  const videos = [
    { title: 'The Legacy of Pheta & Maharashtrian Culture', channel: 'Lokmat Podcast', duration: '28:45', image: '/about_portrait.png', featured: true },
    { title: 'Pheta - A Symbol of Respect & Pride', channel: 'ABP Majha', duration: '22:30', image: '/service_pheta.png', featured: false },
    { title: 'Traditions That Bind Us Together', channel: 'TV9 Marathi', duration: '19:55', image: '/hero_bride_groom.png', featured: false },
    { title: 'The Royal Art of Pheta Tying', channel: 'Sakal Podcast', duration: '34:10', image: '/service_pheta.png', featured: false },
    { title: 'Youth, Culture & Our Maharashtrian Roots', channel: 'Pune Live', duration: '24:05', image: '/about_portrait.png', featured: false },
  ];

  return (
    <section className="py-24 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-6">
          <div className="h-[1px] w-8 bg-[#E8D8C5]"></div>
          <h2 className="px-4 text-sm font-sans tracking-[0.2em] uppercase text-[#C48B3C] font-bold">
            Featured Conversations & Podcasts
          </h2>
          <div className="h-[1px] w-8 bg-[#E8D8C5]"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-sans text-sm font-medium transition-all ${
              activeTab === tab 
                ? 'bg-[#6E1E18] text-white shadow-soft' 
                : 'bg-white text-[#666666] border border-[#E8D8C5] hover:bg-[#F8F3EC]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {/* Large Featured Video */}
        <div className="lg:col-span-2 bg-black rounded-[16px] overflow-hidden relative group cursor-pointer h-[350px]">
          <img src={videos[0].image} alt={videos[0].title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="text-white w-8 h-8 ml-1" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-white font-serif text-2xl mb-2">{videos[0].title}</h3>
            <div className="flex items-center justify-between text-gray-300 text-sm font-sans">
              <span>{videos[0].channel}</span>
              <span className="flex items-center"><Play className="w-4 h-4 mr-1" /> {videos[0].duration}</span>
            </div>
          </div>
        </div>

        {/* Small Video Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.slice(1).map((video, idx) => (
            <div key={idx} className="bg-white rounded-[16px] overflow-hidden shadow-soft border border-[#E8D8C5] group cursor-pointer flex flex-col">
              <div className="relative h-32 overflow-hidden bg-black">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <Play className="text-white w-4 h-4 ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-sans">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h4 className="font-serif text-[#4D2D22] font-bold text-sm leading-snug mb-3">{video.title}</h4>
                <div className="text-xs text-[#999999] font-sans flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <img src={`https://ui-avatars.com/api/?name=${video.channel}&background=random`} alt="" className="w-full h-full" />
                  </div>
                  {video.channel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Logos & CTA */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#E8D8C5] pt-10">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <span className="text-sm font-sans text-[#999999]">Featured On</span>
          {/* Logo placeholders */}
          <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['YouTube', 'Lokmat', 'Sakal', 'ABP', 'TV9'].map((logo, i) => (
               <span key={i} className="font-serif font-bold text-[#4D2D22] text-xl">{logo}</span>
            ))}
          </div>
        </div>
        <Button variant="secondary" className="border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000]/5 flex items-center">
          <Play className="w-4 h-4 mr-2" fill="currentColor" /> Watch More on YouTube
        </Button>
      </div>

    </section>
  );
};
