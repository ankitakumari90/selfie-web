'use client'

import React, { useState } from 'react';
import Image from 'next/image';

// Newsletter form interface
interface NewsletterForm {
  firstName: string;
  email: string;
}

export default function FooterWithBackground(): JSX.Element {
  const [newsletterData, setNewsletterData] = useState<NewsletterForm>({
    firstName: '',
    email: ''
  });
  const [showNotification, setShowNotification] = useState<string>('');

  const showAlert = (message: string): void => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(''), 3000);
  };

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewsletterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    showAlert('Successfully subscribed to newsletter!');
    console.log('Newsletter subscription:', newsletterData);
    
    // Reset form
    setNewsletterData({
      firstName: '',
      email: ''
    });
  };

  const handleAppDownload = (appType: string, userType: string): void => {
    showAlert(`Opening ${appType} for ${userType}...`);
    console.log(`${appType} download clicked for ${userType}`);
  };

  const handleSocialClick = (platform: string): void => {
    showAlert(`Opening ${platform}...`);
    console.log(`${platform} clicked`);
  };

  const handleDeleteAccount = (): void => {
    showAlert('Redirecting to delete account page...');
    console.log('Delete account clicked');
  };

  return (
    <footer className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Image - Full Footer Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero_selfies.jpg"
          alt="Footer background - Celebrity selfies"
          fill
          className="object-cover opacity-20"
          priority
          onError={() => {
            console.log('hero_selfies.jpg not found for footer background');
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="font-semibold">{showNotification}</span>
          </div>
        </div>
      )}

      {/* Content - Above background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Newsletter Signup */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
              Join our mailing list and hear about new deals, celebrities and other news
            </h2>
            
            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              
              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={newsletterData.firstName}
                  onChange={handleNewsletterChange}
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors duration-200"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newsletterData.email}
                  onChange={handleNewsletterChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors duration-200"
                  required
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Middle Column - Tokens */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Tokens</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleSocialClick('SFLIVE')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  SFLIVE
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSocialClick('SFREWARD')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  SFREWARD
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column - Links & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Links</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <button 
                  onClick={() => handleSocialClick('Privacy Policy')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSocialClick('Terms of Service')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="w-5 cursor-pointer h-5 justify-center "
              ><div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/instagram-white.jpg"
                                  alt="Instagram"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
              </button>
              
              <button 
                onClick={() => handleSocialClick('Telegram')}
                className="w-5 h-5 cursor-pointer"
              >
               <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/telegram-white.jpg"
                                  alt="ITelegram"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
              </button>
              <button
              onClick={() => handleSocialClick('Mingcute')}
                className="w-5 h-5 items-center "
              >
                <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/mingcute-white.jpg"
                                  alt="IMingcute"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                
              </button>

              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="w-5  h-5 cursor-pointer "
              >
                <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/x-white.jpg"
                                  alt="Twiter"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
              </button>


              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-5 h-5 cursor-pointer  "
              >
                <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/linkedin.jpg"
                                  alt="LinkedIn"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
              </button>

              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="w-5 h-5 bg-black/50 backdrop-blur-sm rounded-lg flex items-center "
              >
                <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/fb-white.jpg"
                                  alt="Facebook"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                
              </button>
              <button 
                onClick={() => handleSocialClick('YouTube')}
                className="w-5 h-5  cursor-pointer"
              >
                <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/you.png"
                                  alt="YouTube"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                
               
              </button>
            </div>


              
            {/* Delete Account Link */}
            <button 
              onClick={handleDeleteAccount}
              className="text-red-500 hover:text-red-400 transition-colors duration-200 underline text-sm"
            >
              Delete your account?
            </button>
          </div>
        </div>

        {/* App Download Sections */}
        <div className=" border-gray-700 pt-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* App For Fans */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">App For Fans</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleAppDownload('App Store', 'Fans')}
                  className="cursor-pointer w-40"
                 >
                    <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/Download_from_app_store.jpg"
                                  alt="Influencer"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                </button>
                
                <button 
                  onClick={() => handleAppDownload('Google Play', 'Fans')}
                  className=" cursor-pointer w-40"
                >
                    <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/Download_from_app_store.jpg"
                                  alt="Influencer"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                
                </button>
              </div>
            </div>

            {/* App For Celebrities and Ambassadors */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">App For Celebrities and Ambassadors</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleAppDownload('App Store', 'Celebrities')}
                  className="cursor-pointer w-40"
                >
                  
                    <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/Download_from_app_store.jpg"
                                  alt="Influencer"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                </button>
                
                <button 
                  onClick={() => handleAppDownload('Google Play', 'Celebrities')}
                  className="cursor-pointer w-40"
                >
                    <div className="flex-1 flex items-center justify-centerp-10">
                                <Image
                                  src="/photoes/Download_from_play_store.jpg"
                                  alt="Influencer"
                                  width={400}
                                  height={400}
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                            
                  
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
