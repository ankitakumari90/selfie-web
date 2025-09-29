'use client'

import React from 'react';

export default function FanMomentSimpleVideo(): JSX.Element {
  return (
    <div className="min-h-screen bg-black   py-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center  border-amber-400 mb-16">
        <h1 className="text-8xl font-bold mb-6"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          Fan Moment
        </h1>
        <p className="text-white text-2xl max-w-4xl mx-auto">
          Captured the euphoria, shared the thrill, a fan moment video
        </p>
      </div>

      {/* Simple Video Player */}
      <div className="max-w-4xl mx-auto border-2 px-4">
        <video
          className="w-full h-auto rounded-2xl   shadow-2xl"
          controls
          poster="/photoes/lmission-min.jpg"
          preload="metadata"
        >
          <source src="/photoes/lee_brice_promo_video.mp4" type="video/mp4" />
          <source src="/photoes/lee_brice_promo_video.mp4" type="video/webm" />
          <source src="/photoes/lee_brice_promo_video.mp4" type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>
     
    </div>
  );
}
