import React from 'react';
import { Anchor, Waves, Fish, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Logo Display */}
        <div className="mb-8 enchanted-entrance">
          <img 
            src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
            alt="Sirens Fortune"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full underwater-border treasure-shadow mystical-glow"
          />
        </div>

        {/* Main Heading */}
        <div className="mb-8 enchanted-entrance">
          <h1 className="fantasy-font text-4xl md:text-6xl lg:text-7xl text-sirens-gold mb-4 
                       transform hover:scale-105 transition-transform duration-300 mystical-glow">
            SIRENS FORTUNE
          </h1>
          <h2 className="fantasy-font text-2xl md:text-3xl lg:text-4xl text-sirens-teal mb-6 underwater-float">
            Mystical Aquatic Gaming Collection
          </h2>
          <p className="elegant-text text-lg md:text-xl text-sirens-pearl max-w-3xl mx-auto leading-relaxed">
            Dive into the depths of adventure with our enchanted collection of aquatic Nintendo Switch games. 
            Discover underwater worlds, mystical sea creatures, and oceanic treasures that await brave explorers.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="enchanted-bubble underwater-float">
            <Anchor className="w-12 h-12 text-sirens-gold mx-auto mb-4 mystical-glow" />
            <h3 className="fantasy-font text-xl text-sirens-gold mb-2">Deep Sea Adventures</h3>
            <p className="elegant-text text-sirens-pearl">
              Explore mysterious underwater realms filled with ancient secrets and hidden treasures.
            </p>
          </div>
          
          <div className="enchanted-bubble underwater-float" style={{ animationDelay: '0.5s' }}>
            <Waves className="w-12 h-12 text-sirens-teal mx-auto mb-4 mystical-glow" />
            <h3 className="fantasy-font text-xl text-sirens-teal mb-2">Oceanic Mysteries</h3>
            <p className="elegant-text text-sirens-pearl">
              Uncover the legends of mermaids, sea dragons, and mystical aquatic civilizations.
            </p>
          </div>
          
          <div className="enchanted-bubble underwater-float" style={{ animationDelay: '1s' }}>
            <Fish className="w-12 h-12 text-sirens-coral mx-auto mb-4 mystical-glow" />
            <h3 className="fantasy-font text-xl text-sirens-coral mb-2">Marine Life</h3>
            <p className="elegant-text text-sirens-pearl">
              Encounter magnificent sea creatures and build bonds with the ocean's most magical inhabitants.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="enchanted-entrance">
          <p className="mystical-text text-xl text-sirens-gold font-bold mb-6">
            🌊 Begin Your Underwater Journey Today! 🧜‍♀️
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mystical-text text-sirens-pearl">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-sirens-teal rounded-full mystical-glow"></span>
              Lightning Fast Payments
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-sirens-gold rounded-full mystical-glow"></span>
              Instant Digital Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-sirens-coral rounded-full mystical-glow"></span>
              Mystical Gaming Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;