'use client'

import React from 'react';
import Image from 'next/image';

export default function OurIconsFullPageSimple(): JSX.Element {
  const handleOpenSeaClick = (): void => {
    console.log('OpenSea Collection clicked');
  };

  const handleImageClick = (): void => {
    console.log('Full page image clicked');
  };

  return (
    <div className="bg-black">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        
        {/* Our Icons Title */}
        <h1 className="text-8xl font-bold mb-8"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          Our Icons
        </h1>
        
        {/* Subtitle */}
        <p className="text-white text-2xl mb-12 max-w-4xl mx-auto">
          See a Selection of Our Stars and Selfies They Have Signed
        </p>

        {/* OpenSea Collection Button */}
        <button
          onClick={handleOpenSeaClick}
          className="bg-yellow-400 text-black px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          OpenSea Collection
        </button>
      </div>

      {/* FULL PAGE WIDTH IMAGE - NO CONTAINER */}
      <div
        className="group cursor-pointer w-full"
        onClick={handleImageClick}
      >
        <div className="relative w-full h-screen overflow-hidden">
          
          {/* Full Screen Celebrity Image */}
          <Image
            src="/photoes/our_icons.jpg"
            alt="Our Celebrity Icons Collection"
            fill
            className="w-2xl"
            priority
          />
          
          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          
          
          
          {/* Hover Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400/30 transition-colors duration-500"></div>
        </div>
      </div>
    </div>
  );
}
