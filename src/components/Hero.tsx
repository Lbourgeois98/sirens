import React from 'react';
import { Crown, Waves, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onViewGames: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow, onViewGames }) => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-sirens-gold 
                        rounded-full coral-sway opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-sirens-teal 
                        rounded-full underwater-float opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-sirens-purple 
                        rounded-full mystical-glow opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-sirens-coral 
                        rounded-full wave-motion opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="enchanted-bubble inline-block enchanted-entrance mb-4">
            <h1 className="fantasy-font text-3xl md:text-5xl text-sirens-gold mb-3 
                         transform hover:scale-105 transition-transform duration-300">
              MYSTICAL POKEMON TREASURES!
            </h1>
            <p className="mystical-text text-lg md:text-xl text-sirens-pearl font-bold">
              Dive into the Ultimate Pokemon Game Collection from the Depths!
            </p>
          </div>

          {/* Mystical Crown Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Crown className="w-20 h-20 md:w-24 md:h-24 text-sirens-gold mystical-glow 
                           drop-shadow-2xl underwater-float" />
              <Waves className="w-12 h-12 text-sirens-teal absolute -bottom-2 -right-2 wave-motion" />
              <Sparkles className="w-8 h-8 text-sirens-pearl absolute -top-2 -left-2 magical-particles" />
              <div className="absolute inset-0 bg-sirens-gold rounded-full blur-xl opacity-20 
                            mystical-glow"></div>
            </div>
          </div>

          {/* Hero Description */}
          <div className="mystical-bg underwater-border rounded-2xl p-4 md:p-6 mb-6 treasure-shadow 
                          transform hover:rotate-1 transition-transform duration-300 backdrop-blur-sm">
            <p className="elegant-text text-base md:text-lg text-sirens-pearl font-bold leading-relaxed">
              Discover Authentic Pokemon Games from our Enchanted Collection! 
              From ancient remakes to the newest mystical adventures. 
              <span className="text-sirens-gold"> Treasured prices</span>, 
              <span className="text-sirens-coral"> authentic magical products</span>, and 
              <span className="text-sirens-teal"> instant mystical delivery!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              onClick={onShopNow}
              className="enchanted-button text-sirens-navy font-bold 
                       py-3 px-6 rounded-full mystical-text text-lg 
                       transform hover:scale-105 transition-all duration-300 
                       treasure-shadow underwater-float"
            >
              EXPLORE TREASURES NOW!
            </button>
            <button 
              onClick={onViewGames}
              className="mystical-bg hover:bg-sirens-deep text-sirens-pearl font-bold 
                       py-3 px-6 rounded-full underwater-border mystical-text text-lg 
                       transform hover:scale-105 transition-all duration-300 
                       backdrop-blur-sm coral-sway"
            >
              VIEW ALL TREASURES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;