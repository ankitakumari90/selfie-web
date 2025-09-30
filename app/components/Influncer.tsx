'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function InfluencerPage(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<string>('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const showAlert = (message: string): void => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(''), 3000);
  };

  const handleGetStarted = (): void => {
    showAlert('Getting started as an influencer!');
    console.log('Influencer get started clicked');
  };

  const handleLearnMore = (): void => {
    showAlert('Learning more about influencer features...');
    console.log('Learn more clicked');
  };

  return (
    <div className="min-h-screen bg-black">

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <span>⭐</span>
            <span className="font-semibold">{showNotification}</span>
          </div>
        </div>
      )}

      
      <main className="w-full">

        {/* Top Section - Influencer Title and Left/Right Layout */}
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } flex flex-col md:flex-row items-center gap-12`}
        >
          {/* LEFT SIDE - Text */}
          <div className="flex-1 text-white space-y-6">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FF8C00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% 300%',
                animation: 'gradient 3s ease infinite'
              }}
            >

            </h1>

            <p className="text-lg sm:text-lg leading-relaxed">
              01
              Select Number
              Pick the number of autographs you are comfortable with signing.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">

              02
              Choose Price
              We give you a range. Contact us for custom pricing.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">

              custom pricing.
              03
              Receive Photos
              Choose the price you want to charge to guarantee a signed selfie.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">

              04
              Sign & Relax
              From the comfort of your bus or jet you just sign your fans photos by using an iPad or Android Tablet with a digital pencil
            </p>
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1 flex items-center justify-centerp-10">
            <Image
              src="/photoes/this_is_how.jpg"
              alt="Influencer"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section - How Influencer Works */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          {/* Decorative Stars */}
          <div className="absolute right-8 top-8 transform rotate-12 opacity-80">
            <div className="text-yellow-400 text-6xl">⭐</div>
          </div>
          <div className="absolute right-24 top-20 transform -rotate-12 opacity-60">
            <div className="text-yellow-400 text-4xl">⭐</div>
          </div>
          <div className="absolute right-12 top-32 transform rotate-45 opacity-70">
            <div className="text-yellow-400 text-8xl">⭐</div>
          </div>

         
        </div>
      </main>
    </div>
  );
}
