'use client';
import React, { useState } from 'react';
import { FaHome, FaUser, FaPhone, FaSitemap, FaQuoteRight } from 'react-icons/fa';
import Dock from '../components/lightswind/dock.tsx';
import HomeContent from './homeContent/page.tsx';
import AboutContent from './aboutContent/page.tsx';
import ProfileContent from './profileContent/page.tsx';
import SkillContent from './skillContent/page.tsx';
import ContactContent from './contactContent/page.tsx';
import AnimatedBubbleParticles from '../components/lightswind/animated-bubble-particles.tsx';



export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'about' | 'skill' | 'contact'>('home');


  const items = [
    {
      icon: <FaHome size={20} />,
      label: 'Anasayfa',
      onClick: () => setActiveTab('home'),
    },
    {
      icon: <FaUser size={20} />,
      label: 'Profil',
      onClick: () => setActiveTab('profile'),

    },
    {
      icon: <FaQuoteRight size={20} />,
      label: 'Hakkımda',
      onClick: () => setActiveTab('about'),

    },
    {
      icon: <FaSitemap size={20} />,
      label: 'Beceriler',
      onClick: () => setActiveTab('skill'),

    },
    {
      icon: <FaPhone size={20} />,
      label: 'İletişim',
      onClick: () => setActiveTab('contact'),

    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent />;
      case 'profile':
        return <ProfileContent />;
      case 'about':
        return <AboutContent />;
      case 'skill':
        return <SkillContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return null;
    }
  };

  return (
    <div className="relative font-sans min-h-screen flex flex-col">
      <AnimatedBubbleParticles
        className="absolute inset-0"
        particleColor="white"
        particleSize={20}
        spawnInterval={200}
        enableGooEffect={true}
        blurStrength={25}
        zIndex={0}
      />
      <div className="relative z-10">
        <main className="flex-grow p-8 pb-32 sm:p-20 sm:pb-40">
          {renderContent()}
        </main>

        {/* Sabit alt Dock */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Dock items={items} />
        </div>
      </div>
    </div>
  );
}
