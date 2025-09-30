'use client'

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CelebrityPage from './components/Celeberity';
import SelfieArtPage from './components/SelfieART';

import FanMomentSimple from './components/FanMoment';
import GetInTouchSimple from './components/GrtInTouch';
import FooterSimple from './components/Footer';
import OurIconsFullPageSimple from './components/OurIcon';
import CelebrityWorksSimple from './components/Celebrittsimple';
import AmbesdorPage from './components/SelfieandAmbesdor';


// TypeScript interfaces
interface SocialIcon {
  readonly icon: string;
  readonly name: string;
  readonly platform: string;
  readonly href: string;
  readonly ariaLabel: string;
}

interface AppDownloadProps {
  readonly title: string;
  readonly appStoreUrl: string;
  readonly playStoreUrl: string;
  readonly category: 'fans' | 'celebrities';
}

// Constants
const SOCIAL_ICONS: readonly SocialIcon[] = [
  {
    icon: '📸',
    name: 'Instagram',
    platform: 'Instagram',
    href: 'https://www.instagram.com/selfie.live/',
    ariaLabel: 'Visit our Instagram page'
  },
  {
    icon: '✈️',
    name: 'Telegram',
    platform: 'Telegram',
    href: 'https://t.me/selfiedotlive',
    ariaLabel: 'Join our Telegram channel'
  },
  {
    icon: '𝕏',
    name: 'X',
    platform: 'Twitter',
    href: 'https://twitter.com/Selfiedotlive',
    ariaLabel: 'Follow us on X (Twitter)'
  },
  {
    icon: '📝',
    name: 'Medium',
    platform: 'Medium',
    href: 'https://medium.com/selfiedotlive',
    ariaLabel: 'Read our Medium articles'
  },
  {
    icon: '💼',
    name: 'LinkedIn',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/company/selfie-live-llc/',
    ariaLabel: 'Connect with us on LinkedIn'
  },
  {
    icon: '📘',
    name: 'Facebook',
    platform: 'Facebook',
    href: 'https://www.facebook.com/selfiedotlive',
    ariaLabel: 'Like our Facebook page'
  },
] as const;

const APP_CONFIGS = {
  fans: {
    title: 'App For Fans',
    appStoreUrl: 'https://apps.apple.com/ua/app/selfie-live-fan-app/id1622043497',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.selfie_live&pli=1',
    category: 'fans' as const
  },
  celebrities: {
    title: 'App For Celebrities and Ambassadors',
    appStoreUrl: 'https://apps.apple.com/us/app/selfie-live-celebrity-app/id1634196083',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.youniquecelebrity',
    category: 'celebrities' as const
  }
};

// App Store Button Component
const AppStoreButton = memo(({
  onClick,
  platform,
  className = ""
}: {
  onClick: () => void;
  platform: 'App Store' | 'Google Play';
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`group flex items-center space-x-3 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    aria-label={`Download from ${platform}`}
  >
   
    <div className="text-left">
      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
        {platform === 'App Store' ? 'Download on the' : 'GET IT ON'}
      </div>
      <div className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
        {platform}
      </div>
    </div>
  </button>
));

AppStoreButton.displayName = 'AppStoreButton';

// App Download Section Component
const AppDownloadSection = memo(({ title, appStoreUrl, playStoreUrl, category }: AppDownloadProps) => {
  const handleAppDownload = useCallback((platform: string, url: string): void => {
    console.log(`${platform} download clicked for ${category}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [category]);

  return (
    <div className="space-y-4">
      <h3 className="text-white text-lg font-medium tracking-wide">{title}</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <AppStoreButton
          onClick={() => handleAppDownload('App Store', appStoreUrl)}
          platform="App Store"
        />
        <AppStoreButton
          onClick={() => handleAppDownload('Google Play', playStoreUrl)}
          platform="Google Play"
        />
      </div>
    </div>
  );
});

AppDownloadSection.displayName = 'AppDownloadSection';

export default function SelfieHomepage(): JSX.Element {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const showAlert = useCallback((message: string): void => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(''), 3000);
  }, []);

  // Event handlers
  const handleSocialClick = useCallback((platform: string, href: string): void => {
    try {
      console.log(`${platform} clicked`);
      showAlert(`Opening ${platform}...`);
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Error opening ${platform}:`, error);
      showAlert(`Failed to open ${platform}`);
    }
  }, [showAlert]);

  const handleRewardsProgram = useCallback((): void => {
    try {
      console.log('Selfie Rewards clicked');
      showAlert('Opening Selfie Rewards program...');
      window.open('https://www.selfierewards.live/', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening rewards program:', error);
      showAlert('Failed to open rewards program');
    }
  }, [showAlert]);

  const handleSignUp = useCallback((): void => {
    showAlert('Redirecting to Sign up...');
    window.open('https://www.selfierewards.live/sign-up', '_blank', 'noopener,noreferrer');
  }, [showAlert]);

  const handleSignIn = useCallback((): void => {
    showAlert('Redirecting to Sign in...');
    window.open('https://www.selfierewards.live/sign-in', '_blank', 'noopener,noreferrer');
  }, [showAlert]);

  const handleNavigation = useCallback((path: string): void => {
    router.push(path);
  }, [router]);

  const appConfigs = useMemo(() => APP_CONFIGS, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NO CURSOR BLINKING STYLES - REMOVED ALL CURSOR CSS */}

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-2">
            <span>✨</span>
            <span className="font-rb">{showNotification}</span>
          </div>
        </div>
      )}
      {/* Navbar Container */}
      <div className="flex items-center justify-between w-full px-6 py-4 bg-yellow-400">
        {/* Left Side - Logo + Social Icons */}
        <div className="flex items-center space-x-6">
          {/* Mobile Logo */}
          <div className="lg:hidden md:hidden">
            <button onClick={() => handleNavigation('/')}>
              <Image
                src="/photoes/logo_self.jpg"
                alt="Selfie.live logo"
                width={229}
                height={51}
                className="mr-2 h-11 w-52"
                priority
              />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 items-center justify-start h-full pl-20" >

            <a href="https://instagram.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/ri_instagram-fill.jpg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/ant-design_x-outlined.jpg" alt="Twitter" width={20} height={20} />
            </a>
            <a href="https://telegram.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/bxl_telegram.jpg" alt="telegram" width={20} height={20} />
            </a>
            <a href="https:/medium.com/" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/mingcute_medium-.jpg" alt="telegram" width={20} height={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/ri_linkedin-fill.jpg" alt="LinkedIn" width={20} height={20} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/ri_facebook-fill.jpg" alt="facebook" width={28} height={28} />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:scale-110 transition-transform">
              <Image src="/photoes/you.png" alt="YouTube" width={20} height={20} />
            </a>


          </div>
        </div>

        {/* Right Side - Auth Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleSignUp}
            className="text-base font-semibold border-2 rounded-xl border-black py-2 px-4 text-black hover:bg-black hover:text-yellow-400 transition-all duration-200 hover:scale-105"
          >
            Sign up
          </button>
          <button
            onClick={handleSignIn}
            className="text-base font-semibold border-2 rounded-xl border-black py-2 px-4 text-black hover:bg-black hover:text-yellow-400 transition-all duration-200 hover:scale-105"
          >
            Sign in
          </button>
        </div>
      </div>




      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="h-2 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>



      {/* Hero Section */}
      <section className="h-auto bg-black w-full overflow-hidden relative">
        {/* Notification Toast */}
        {showNotification && (
          <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce">
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span className="font-semibold">{showNotification}</span>
            </div>
          </div>
        )}

        {/* Full Screen Background Image - Your Real Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photoes/hero_selfies.jpg"
            alt="Celebrity Selfies Collage"
            fill

            className="object-cover object-center"
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>



        {/* Desktop Header */}
        <div className="lg:block md:block hidden px-4 lg:px-28 md:px-10 py-7 relative z-20">
          <div className="flex justify-between items-center">
            <button onClick={() => handleNavigation('/')}>
              <Image
                src="/photoes/logo_self.jpg"
                alt="Selfie.live logo"
                width={229}
                height={51}
                className="mr-2 h-11 w-52"
                priority
              />
            </button>
            

            <button
              onClick={handleRewardsProgram}
              className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:scale-105"
            >
              <span className="font-medium">Selfie Rewards</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                <path d="m21 3-9 9" />
                <path d="M15 3h6v6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:block md:block  items-center justify-start h-full pl-20 font-rb">
  <div className="text-white font-bold leading-tight lex items-center justify-start h-full mb-3">
    <h1 className="text-2xl mb-2">
      Take a <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">selfie</span>
    </h1>
    <h2 className="text-6xl mb-4">Get an autograph</h2>
    <h3 className="text-6xl">Earn rewards</h3>
  </div>
  <div className="text-white text-lg leading-relaxed max-w-lg flex items-center justify-start">
    Where Fans and Celebrities connect to<br />
    create a lifetime of memories.
  </div>
</div>

        {/* Hero Content */}
        <div className="relative min-h-screen">

          {/* Background Image */}
          <div className="absolute inset-0">
           
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Text Content */}
          <div className={`relative z-10 flex items-center min-h-screen px-4 lg:px-28 md:px-10 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="w-full lg:w-1/2">

              
              {/* Mobile Headlines */}
              <div className="lg:hidden md:hidden">
                <div className="text-white font-bold leading-tight mb-6">
                  <h1 className="text-4xl mb-3">
                    Take a <span className="text-yellow-400">selfie</span>
                  </h1>
                  <h2 className="text-4xl mb-3">Get an autograph</h2>
                  <h3 className="text-4xl mb-6">Earn rewards</h3>
                </div>
                <div className="text-yellow-400 bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                  Where Fans and Celebrities connect to<br />
                  create a lifetime of memories.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 w-full py-20">
        <div className="px-4 lg:px-28 md:px-10 flex flex-col lg:flex-row md:flex-row gap-16">

          {/* Left Content */}
          <div className="lg:basis-1/2 md:basis-1/2 basis-full">
            <h2 className="text-yellow-400 text-5xl font-bold mb-8 leading-tight">
              Selfie.live: where fans meet their stars
            </h2>
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                Everybody has a favorite star, whether it's a <strong>musician</strong>, <strong>athlete</strong>, <strong>actor</strong>,
                <strong>comedian</strong>, or <strong>political powerhouse</strong>. We love to attend their games, concerts, and events.
              </p>
              <p>
                You take selfies and our stars make them into <strong className="text-yellow-400">incredible memories</strong>.
                Post to social media, save to your personal album, or trade them
                through an <strong className="text-yellow-400">NFT Exchange</strong>. Whatever you do, the experience is yours for a lifetime.
              </p>
            </div>
          </div>

          {/* Right Content - App Downloads */}
          <div className="lg:basis-1/2 md:basis-1/2 basis-full flex items-center justify-center">
            <div className="space-y-8 w-full max-w-md">
              <AppDownloadSection {...appConfigs.fans} />
              <AppDownloadSection {...appConfigs.celebrities} />
            </div>
          </div>
        </div>
      </section>

      {/* SFREWARD TOKENS Section */}
      <section className="bg-black w-full py-20">
        <div className="px-4 lg:px-28 md:px-10">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-yellow-400 font-bold mb-8 leading-tight">
              SFREWARD TOKENS – Loyalty and Referral Program
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-white text-lg mb-8">
              <p className="mb-8 text-xl text-center">
                At <strong className="text-yellow-400">Selfie.Live</strong>, we are built for <strong className="text-yellow-400">Web3</strong>.
                Our tokenized rewards program will have many aspects including:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Earning SFREWARDS tokens for downloading and using the mobile apps.',
                  'Referring new users.',
                  'Social media posts.',
                  'Subscribing to other products like domain names and NFT storage.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-4 text-xl">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rewards Program Link */}
            <div className="text-center text-lg">
              <span className="text-white">Go to our </span>
              <button
                onClick={handleRewardsProgram}
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300 transition-colors duration-200 hover:scale-105"
              >
                <span className="font-semibold">Rewards Program</span>
                <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </button>
              <span className="text-white"> page for more information and start earning now.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Section */}
      <section className="bg-black w-full py-20">
        <div className="lg:px-28 md:px-10 px-4">
          <h2 className="text-4xl lg:text-5xl text-yellow-400 font-bold text-center mb-16 leading-tight">
            Celebrity. Fans. Nothing in between
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl">

            {/* Mission */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 h-52 flex items-center justify-center hover:from-yellow-500 hover:to-amber-600 transition-all duration-300">
              <div className="text-center px-8">
                <h3 className="text-xl font-bold text-black mb-4">The Selfie.Live Mission</h3>
                <p className="text-black font-medium">For Yourself, For Your Family, For Your Friends</p>
              </div>
            </div>

            {/* Image 1 */}
            <div className="h-52 relative overflow-hidden">
              <Image
                src="/photoes/Gifting-min.jpg"
                alt="People enjoying gifting experiences"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Charities */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 h-52 flex items-center justify-center hover:from-yellow-500 hover:to-amber-600 transition-all duration-300">
              <div className="text-center px-8">
                <h3 className="text-xl font-bold text-black mb-4">Charities</h3>
                <p className="text-black font-medium">Give and You Shall Receive</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="h-52 relative overflow-hidden">
              <Image
                src="/photoes/mission-min.jpg"
                alt="Mission-focused community activities"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Gifting */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 h-52 flex items-center justify-center hover:from-yellow-500 hover:to-amber-600 transition-all duration-300">
              <div className="text-center px-8">
                <h3 className="text-xl font-bold text-black mb-4">Gifting</h3>
                <p className="text-black font-medium">Personalize An Experience that Matters</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="h-52 relative overflow-hidden">
              <Image
                src="/photoes/charities-min.jpg"
                alt="Charitable activities and community support"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </section>
     
     <SelfieArtPage/>
     <AmbesdorPage />
      <CelebrityPage />
      <OurIconsFullPageSimple/>
      <FanMomentSimple/>
      <GetInTouchSimple />
      <FooterSimple/>   
    </div >
  );
}
