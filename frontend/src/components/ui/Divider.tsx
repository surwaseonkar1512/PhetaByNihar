import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={"flex items-center justify-center w-full max-w-[600px] mx-auto opacity-90 overflow-hidden py-2 "}>
      {/* Left Line */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C48B3C] to-[#D7A65B]"></div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C48B3C] to-[#D7A65B] mt-[2px]"></div>
      </div>
      
      {/* Center Motif (SVG) */}
      <div className="mx-4 relative flex items-center justify-center text-[#C48B3C] shrink-0">
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
           {/* Flourishes */}
           <path d="M25 5 C 35 5, 40 15, 25 25 C 10 15, 15 5, 25 5 Z" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
           <path d="M25 10 C 30 10, 32 15, 25 20 C 18 15, 20 10, 25 10 Z" fill="url(#goldGrad)" />
           <circle cx="25" cy="15" r="3" fill="#4D2D22" />
           <path d="M15 15 C 5 15, 0 10, 5 5" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
           <path d="M35 15 C 45 15, 50 10, 45 5" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
           <path d="M15 15 C 5 15, 0 20, 5 25" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
           <path d="M35 15 C 45 15, 50 20, 45 25" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
           <defs>
             <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stopColor="#C48B3C" />
               <stop offset="50%" stopColor="#F4E8DA" />
               <stop offset="100%" stopColor="#C48B3C" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      {/* Right Line */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-[#C48B3C] to-[#D7A65B]"></div>
        <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-[#C48B3C] to-[#D7A65B] mt-[2px]"></div>
      </div>
    </div>
  );
};
