import React from 'react';
import { Anchor, Waves, Fish, Crown, Shell, Compass } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const quickLinks = [
    { id: 'mermaid-legends', label: 'Mermaid Legends', icon: <Anchor className="w-4 h-4" /> },
    { id: 'ocean-depths', label: 'Ocean Depths', icon: <Waves className="w-4 h-4" /> },
    { id: 'aquatic-gaming', label: 'Aquatic Gaming', icon: <Fish className="w-4 h-4" /> },
    { id: 'sea-creatures', label: 'Sea Creatures', icon: <Shell className="w-4 h-4" /> },
    { id: 'underwater-reviews', label: 'Reviews', icon: <Crown className="w-4 h-4" /> },
    { id: 'aquatic-community', label: 'Community', icon: <Compass className="w-4 h-4" /> }
  ];

  return (
    <footer className="mystical-bg underwater-border border-t-4 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
                alt="Sirens Fortune"
                className="w-16 h-16 rounded-full underwater-border mystical-glow"
              />
              <div>
                <h3 className="fantasy-font text-3xl text-sirens-gold mystical-glow">
                  SIRENS FORTUNE
                </h3>
                <p className="elegant-text text-sirens-teal">
                  Mystical Aquatic Gaming Paradise
                </p>
              </div>
            </div>
            
            <p className="elegant-text text-sirens-pearl leading-relaxed mb-6">
              Dive into the depths of adventure with our enchanted collection of aquatic Nintendo Switch games. 
              Discover underwater worlds, mystical sea creatures, and oceanic treasures that await brave explorers 
              in the realm of Sirens Fortune.
            </p>
            
            <div className="flex items-center gap-4 text-sm mystical-text text-sirens-pearl">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sirens-teal rounded-full mystical-glow"></span>
                Lightning Fast Payments
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sirens-gold rounded-full mystical-glow"></span>
                Instant Digital Delivery
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="fantasy-font text-xl text-sirens-gold mb-6 mystical-glow">
              Aquatic Adventures
            </h4>
            <nav className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => onPageChange(link.id)}
                  className="flex items-center gap-3 mystical-text text-sirens-pearl 
                           hover:text-sirens-gold transition-colors duration-300
                           transform hover:scale-105 underwater-float"
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="fantasy-font text-xl text-sirens-teal mb-6 mystical-glow">
              Ocean Community
            </h4>
            <nav className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => onPageChange(link.id)}
                  className="flex items-center gap-3 mystical-text text-sirens-pearl 
                           hover:text-sirens-gold transition-colors duration-300
                           transform hover:scale-105 underwater-float"
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-sirens-teal mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
                alt="Sirens Fortune"
                className="w-8 h-8 rounded-full"
              />
              <p className="elegant-text text-sirens-pearl">
                © 2025 Sirens Fortune. All treasures reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm mystical-text text-sirens-pearl">
              <span>🧜‍♀️ Mermaid Approved</span>
              <span>🌊 Ocean Certified</span>
              <span>⚡ Lightning Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;