import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Anchor, Waves, Fish } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartToggle, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'mermaid-legends', label: 'Mermaid Legends', icon: <Anchor className="w-4 h-4" /> },
    { id: 'ocean-depths', label: 'Ocean Depths', icon: <Waves className="w-4 h-4" /> },
    { id: 'aquatic-gaming', label: 'Aquatic Gaming', icon: <Fish className="w-4 h-4" /> },
    { id: 'sea-creatures', label: 'Sea Creatures', icon: <Fish className="w-4 h-4" /> },
    { id: 'underwater-reviews', label: 'Reviews', icon: <Anchor className="w-4 h-4" /> },
    { id: 'aquatic-community', label: 'Community', icon: <Waves className="w-4 h-4" /> }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="mystical-bg underwater-border border-b-4 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer underwater-float"
            onClick={() => onPageChange('home')}
          >
            <img 
              src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
              alt="Sirens Fortune"
              className="w-12 h-12 rounded-full underwater-border mystical-glow"
            />
            <div>
              <h1 className="fantasy-font text-2xl md:text-3xl text-sirens-gold mystical-glow">
                SIRENS FORTUNE
              </h1>
              <p className="elegant-text text-sm text-sirens-teal">
                Mystical Aquatic Gaming
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center gap-2 mystical-text font-bold text-sirens-pearl 
                         hover:text-sirens-gold transition-colors duration-300 
                         transform hover:scale-105 underwater-float"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={onCartToggle}
              className="relative enchanted-button p-3 rounded-full mystical-text font-bold
                       transform hover:scale-110 transition-all duration-300 treasure-shadow"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sirens-coral text-sirens-navy 
                               text-xs font-bold rounded-full w-6 h-6 flex items-center 
                               justify-center mystical-glow animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden enchanted-button p-3 rounded-full
                       transform hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-sirens-teal enchanted-entrance">
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-3 w-full p-3 mystical-text font-bold 
                           text-sirens-pearl hover:text-sirens-gold transition-colors duration-300
                           hover:bg-sirens-deep rounded-lg underwater-border"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;