import React from 'react';
import { 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  Crown,
  Waves
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Pokemon History', action: () => onNavigate('pokemon-history') },
    { label: 'Game Generations', action: () => onNavigate('game-generations') }, 
    { label: 'Nintendo Switch Info', action: () => onNavigate('nintendo-switch') },
    { label: 'Pokemon Trading', action: () => onNavigate('pokemon-trading') },
    { label: 'Game Reviews', action: () => onNavigate('game-reviews') },
    { label: 'Pokemon Community', action: () => onNavigate('pokemon-community') }
  ];

  const handleContactClick = (type: string) => {
    switch (type) {
      case 'phone':
        window.open('tel:1-800-POKEMON');
        break;
      case 'email':
        window.open('mailto:support@pokeshop.com');
        break;
      default:
        break;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-sirens-deep to-sirens-navy text-sirens-pearl backdrop-blur-sm">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 underwater-float"
            >
              <Crown className="w-8 h-8 text-sirens-gold mystical-glow" />
              <Waves className="w-6 h-6 text-sirens-teal wave-motion" />
              <h3 className="fantasy-font text-3xl text-sirens-gold">SIRENS OF FORTUNE</h3>
            </button>
            <p className="mystical-text text-sirens-teal font-bold">
              Mystical Pokemon Gaming Emporium!
            </p>
            <p className="elegant-text text-sm leading-relaxed">
              Your mystical sanctuary for authentic Pokemon treasures for Nintendo Switch. 
              We specialize in enchanted digital and physical Pokemon game collections with magical pricing!
            </p>
            
            {/* Social Media - Facebook Only */}
            <div className="flex space-x-4 pt-4">
              <button
                onClick={() => window.open('https://facebook.com', '_blank', 'noopener,noreferrer')}
                className="bg-sirens-gold text-sirens-navy p-2 rounded-full 
                         hover:bg-sirens-teal transition-all duration-300 
                         transform hover:scale-110 underwater-border group mystical-glow"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:underwater-float" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="fantasy-font text-xl text-sirens-gold">MYSTICAL POKEMON LORE</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="block mystical-text hover:text-sirens-gold 
                           transition-all duration-300 hover:translate-x-2 
                           transform text-left w-full"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="fantasy-font text-xl text-sirens-gold">MYSTICAL CONTACT</h4>
            
            <div className="space-y-3">
              <button
                onClick={() => handleContactClick('phone')}
                className="flex items-center space-x-3 hover:text-sirens-gold 
                         transition-colors duration-300 group w-full text-left"
              >
                <Phone className="w-5 h-5 text-sirens-teal group-hover:underwater-float" />
                <div>
                  <p className="mystical-text font-bold">1-800-SIRENS</p>
                  <p className="elegant-text text-sm">Mon-Fri 9AM-9PM EST</p>
                </div>
              </button>
              
              <button
                onClick={() => handleContactClick('email')}
                className="flex items-center space-x-3 hover:text-sirens-gold 
                         transition-colors duration-300 group w-full text-left"
              >
                <Mail className="w-5 h-5 text-sirens-teal group-hover:underwater-float" />
                <div>
                  <p className="mystical-text font-bold">support@sirensfortune.com</p>
                  <p className="elegant-text text-sm">24/7 Mystical Support</p>
                </div>
              </button>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sirens-teal" />
                <div>
                  <p className="mystical-text font-bold">Underwater Sanctuary</p>
                  <p className="elegant-text text-sm">Worldwide Mystical Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-sirens-abyss bg-opacity-50 py-4 border-t-2 border-sirens-teal">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="elegant-text text-sm">
              © 2025 Sirens of Fortune. All rights reserved. Mystical game emporium.
            </p>
            
            <div className="flex items-center space-x-4 text-sm mystical-text">
              <button 
                onClick={() => alert('Privacy Policy - This would open the privacy policy page')}
                className="hover:text-sirens-gold transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => alert('Terms of Service - This would open the terms page')}
                className="hover:text-sirens-gold transition-colors duration-300"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button 
                onClick={() => handleContactClick('email')}
                className="hover:text-sirens-gold transition-colors duration-300"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;