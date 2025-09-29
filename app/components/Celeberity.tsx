'use client'

import React from 'react';
import Image from 'next/image';
import InfluencerPage from './Influncer';
import CelebrityWorksSimple from './Celebrittsimple';

export default function CombinedPageSimple(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-950">
            {/* CELEBRITY SECTION - BOTTOM */}
            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    
                    {/* Celebrity Title */}
                    <h1 className="text-8xl font-bold mb-12"
                        style={{
                            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Celebrity
                    </h1>
                    
                    {/* Celebrity Text */}
                    <div className="text-white text-xl leading-relaxed max-w-5xl mx-auto space-y-6">
                        <p>
                            You didn't become a celebrity without having a tight schedule and long hours. We understand this and want 
                            to make your life easy. Your fans want to engage with you and we are making it easy for them to get into 
                            crypto in a way that won't make you look bad and will keep your image safe.
                        </p>
                        
                        <p>
                            As a Celebrity, you can give signed selfies away to your fans for free or offer a paid version. Earn while you 
                            sign and make a fan's day!
                        </p>
                    </div>
                   
                    <CelebrityWorksSimple/>
                </div>
            </div>
        </div>
    );
}
