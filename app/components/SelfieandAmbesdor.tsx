'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AmbesdorPage(): JSX.Element {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [showNotification, setShowNotification] = useState<string>('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const showAlert = (message: string): void => {
        setShowNotification(message);
        setTimeout(() => setShowNotification(''), 3000);
    };

    // ✅ Missing function added
    const handleConnectForm = (): void => {
        showAlert('Celebrity Connect form will open soon!');
        console.log('Connect form clicked');
    };

    return (
        <main className="w-full">
            {/* Ambassador Section - MINIMAL */}
            <div
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Left Content - COMPACT */}
                    <div className="space-y-3 text-left">
                        {/* Main Title - Gold Gradient */}
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                            style={{
                                background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FF8C00)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                backgroundSize: '300% 300%',
                                animation: 'gradient 3s ease infinite',
                            }}
                        >
                            Become an Ambassador and Multiply Your Rewards
                        </h1>

                        {/* Description Text - COMPACT */}
                        <div className="text-white text-sm sm:text-base leading-relaxed space-y-1">
                            <p>
                                Ambassadors are celebrities in their own right. You can be part of the signing elite by
                                having your friends sign up and send you a selfie to sign. It adds up to big bonuses in
                                rewards tokens that may be later turned into SFLIVE tokens.
                            </p>
                            <p>
                                Find out how to be an Ambassador by filling out the{' '}
                                <button
                                    onClick={handleConnectForm}
                                    className="text-yellow-400 cursor-pointer underline hover:text-yellow-300 transition-colors duration-200 font-semibold"
                                >
                                    Celebrity Connect form
                                </button>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Ambassador Image - COMPACT */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${
                            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                    >
                        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[320px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/photoes/ambassador.png"
                                alt="People celebrating and taking selfies together"
                                fill
                                className="object-cover"
                                priority
                                onError={(e) => {
                                    console.log('ambassador.png not found');
                                    (e.currentTarget as HTMLElement).style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </main>
    );
}
