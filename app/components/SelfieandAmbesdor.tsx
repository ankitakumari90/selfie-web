'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// TypeScript interfaces
interface SelfieStep {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    phoneContent: React.ReactNode;
    bgColor: string;
}

export default function CombinedPage(): JSX.Element {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [showNotification, setShowNotification] = useState<string>('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const showAlert = (message: string): void => {
        setShowNotification(message);
        setTimeout(() => setShowNotification(''), 3000);
    };

    // Selfie steps data
    const selfieSteps: SelfieStep[] = [
        {
            id: 1,
            title: '',
            description: 'Take a photo of you at a live event or doing something you would want signed by the celebrity.',
            buttonText: 'Click Photo',
            bgColor: 'bg-yellow-400',
            phoneContent: (
                <div className="relative w-full h-full">
                    <Image
                        src="/photoes/Click_photo.jpg"
                        alt="Click Photo"
                        fill
                        className="object-cover opacity-90"
                    />
                </div>
            )
        },
        {
            id: 2,
            title: '',
            description: 'Submit the photo to your favorite celebrity for a chance to win a personalized NFT photo',
            buttonText: 'Submit Photo',
            bgColor: 'bg-yellow-400',
            phoneContent: (
                <div className="relative w-full h-full">
                    <Image
                        src="/photoes/Click_photo.jpg"
                        alt="Submit Photo"
                        fill
                        className="object-cover opacity-90"
                    />
                </div>
            )
        },
        {
            id: 3,
            title: '',
            description: 'Receive your Selfie.Live NFT!',
            buttonText: 'Get Nft',
            bgColor: 'bg-yellow-400',
            phoneContent: (
                <div className="relative w-full h-full">
                    <Image
                        src="/photoes/Click_photo.jpg"
                        alt="Get NFT"
                        fill
                        className="object-cover opacity-90"
                    />
                </div>
            )
        }
    ];

    const handleStepClick = (step: SelfieStep): void => {
        showAlert(`${step.buttonText} clicked!`);
        console.log(`Step clicked: ${step.title}`);
    };

    const handleConnectForm = (): void => {
        showAlert('Opening Celebrity Connect Form...');
        console.log('Celebrity Connect Form clicked');
    };

    return (
        <div className="min-h-screen bg-black">
            
            {/* Notification Toast */}
            {showNotification && (
                <div className="fixed top-4 right-4 z-50 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce">
                    <div className="flex items-center space-x-2">
                        <span>🏆</span>
                        <span className="font-semibold">{showNotification}</span>
                    </div>
                </div>
            )}

            {/* SECTION 1: SELFIE ART SECTION - COMPACT */}
            <main className="w-full">
                
                {/* Hero Section - MINIMAL PADDING */}
                <div className={`text-center py-6 sm:py-8 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 px-4"
                        style={{
                            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FF8C00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundSize: '300% 300%',
                            animation: 'gradient 3s ease infinite'
                        }}>
                        The Art of Selfie Expression
                    </h1>
                </div>

                {/* Steps Section - COMPACT */}
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 transition-all duration-1000 delay-300 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    {/* 3 Steps Grid - COMPACT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {selfieSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: `${index * 200}ms`
                                }}
                                onClick={() => handleStepClick(step)}
                            >
                                {/* Yellow Card Container - MINIMAL */}
                                <div className={`${step.bgColor} rounded-3xl p-3 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden min-h-[280px] flex flex-col`}>
                                    
                                    {/* Phone Mockup - COMPACT */}
                                    <div className="flex-1 flex items-center justify-center mb-3">
                                        <div className="w-56 h-72 bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center relative border-6 border-gray-800">
                                            
                                            {/* Phone Screen */}
                                            <div className="w-48 h-64 bg-gray-900 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                                                {step.phoneContent}
                                            </div>

                                            {/* Phone Speaker */}
                                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                                            
                                            {/* Home indicator */}
                                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Step Content - COMPACT */}
                                    <div className="text-center">
                                        <button className="bg-white text-black px-5 py-2 rounded-xl font-bold text-base mb-2 hover:bg-gray-100 transition-colors duration-200 shadow-lg min-w-[120px]">
                                            {step.buttonText}
                                        </button>
                                        
                                        <p className="text-black text-sm leading-relaxed font-medium px-2">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description - COMPACT */}
                <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 transition-all duration-1000 delay-700 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-center">
                        <div>
                            <h3 className="text-lg font-bold mb-1">
                                Take a photo of you at a live event or doing something you would want signed by the celebrity.
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">
                                Submit the photo to your favorite celebrity for a chance to win a personalized NFT photo
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">
                                Receive your Selfie.Live NFT!
                            </h3>
                        </div>
                    </div>
                </div>
            </main>

            {/* TINY GAP - JUST 2 LINES */}
            <div className="bg-black h-6"></div>

            {/* SECTION 2: AMBASSADOR SECTION - ULTRA COMPACT */}
            <div style={{
                backgroundColor: 'black',
                padding: '5px 20px 10px 20px',
                textAlign: 'center'
            }}>
                
                <main className="w-full">
                    
                    {/* Ambassador Section - MINIMAL */}
                    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 transition-all duration-1000 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            
                            {/* Left Content - COMPACT */}
                            <div className="space-y-3 text-left">
                                
                                {/* Main Title - Gold Gradient */}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                                    style={{
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FF8C00)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        backgroundSize: '300% 300%',
                                        animation: 'gradient 3s ease infinite'
                                    }}>
                                    Become an Ambassador and Multiply Your Rewards
                                </h1>

                                {/* Description Text - COMPACT */}
                                <div className="text-white text-sm sm:text-base leading-relaxed space-y-1">
                                    <p>
                                        Ambassadors are celebrities in their own right. You can be part of
                                        the signing elite by having your friends sign up and send you a selfie
                                        to sign. It adds up to big bonuses in rewards tokens that may be later
                                        turned into SFLIVE tokens.
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
                            <div className={`relative transition-all duration-1000 delay-300 ${
                                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}>
                                
                                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[320px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/photoes/ambassador.png"
                                        alt="People celebrating and taking selfies together"
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            console.log('ambassador.png not found');
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Add custom CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
}
