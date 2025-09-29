'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function GetInTouchSingleContainer(): JSX.Element {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black py-20">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto px-2 text-center mb-10">
        <h1 className="text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          Get in touch
        </h1>
        <p className="text-white text-2xl max-w-4xl mx-auto">
          Reach out, and let's create a universe of fans together!
        </p>
      </div>

      {/* SINGLE CONTAINER FOR BOTH SIDES */}
      <div className="max-w-5xl mx-auto px-2">
        <div className="bg-gray-900/30 rounded-xl p-4  border-gray-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left - Contact Form */}
            <div>
              
              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-1xl font-bold text-white mb-4">
                  Celebrities, let's connect for your Fans
                </h2>
                <p className="text-gray-300 text-lg">
                  Contact us and we will show you how to drive fan engagement 
                  and make revenue that you can share with charities or capture 
                  for your own use
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-2 py-2 bg-transparent border border-gray-600  text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-2 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-2 py-2 bg-transparent border border-gray-600  text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-2 py-2 bg-transparent border border-gray-600  text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={2}
                    className="w-full px-2 py-2 bg-transparent border border-gray-600  text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-2 py-2  cursor-pointer text-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  Send it to Selfie.Live
                </button>
              </form>
            </div>

            {/* Right - Celebrity Image (Inside same container) */}
            <div className="relative">
              <div 
                className="w-full h-[600px] relative"
                
              >
                <Image
                  src="/photoes/Lets_connect2.jpg"
                  alt="Celebrities with cameras"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
