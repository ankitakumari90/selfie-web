'use client'

import React from 'react';
import Image from 'next/image';

export default function CelebrityWorksSimple(): JSX.Element {
  return (
    <div className="min-h-screen bg-black py-16">
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Steps */}
        <div className="space-y-8">
          
          {/* Title */}
          <h1 className="text-6xl font-bold mb-12"
              style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            This is how a celebrity works with us
          </h1>

          {/* Step 01 */}
          <div className="flex items-start space-x-6">
            <div className="text-7xl font-bold"
                 style={{
                   background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                 }}>
              01
            </div>
            <div className="pt-2">
              <h3 className="text-white text-3xl font-bold mb-3">Select Number</h3>
              <p className="text-gray-300 text-lg">
                Pick the number of autographs you are comfortable with signing.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex items-start space-x-6">
            <div className="text-7xl font-bold"
                 style={{
                   background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                 }}>
              02
            </div>
            <div className="pt-2">
              <h3 className="text-white text-3xl font-bold mb-3">Choose Price</h3>
              <p className="text-gray-300 text-lg">
                We give you a range. Contact us for custom pricing.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex items-start space-x-6">
            <div className="text-7xl font-bold"
                 style={{
                   background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                 }}>
              03
            </div>
            <div className="pt-2">
              <h3 className="text-white text-3xl font-bold mb-3">Receive Photos</h3>
              <p className="text-gray-300 text-lg">
                Choose the price you want to charge to guarantee a signed selfie.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Image with Stars */}
        <div className="relative">
          
          {/* Decorative Stars */}
          <div className="absolute -top-4 -right-4 text-yellow-400 text-4xl">⭐</div>
          <div className="absolute -top-8 right-16 text-yellow-400 text-2xl">⭐</div>
          <div className="absolute top-4 -right-8 text-yellow-400 text-6xl">⭐</div>
          
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
      </div>
    </div>
  );
}
