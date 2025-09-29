import React, { useState } from 'react';
import { ShoppingCart, Menu, Crown, Waves, X } from 'lucide-react';

interface HeaderProps {
  onCartToggle: () => void;
  cartItemCount: number;
  onNavigate: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartToggle, cartItemCount, onNavigate }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigationItems = [
    { label: 'All Games', action: () => onNavigate('all') },
    { label: 'New Releases', action: () => onNavigate('new') },
    { label: 'Popular Games', action: () => onNavigate('popular') },
    { label: 'Generation 4', action: () => onNavigate('gen4') },
    { label: 'Generation 7', action: () => onNavigate('gen7') },
    { label: 'Generation 8', action: () => onNavigate('gen8') },
    { label: 'Generation 9', action: () => onNavigate('gen9') }
  ];

  return (
    <header className="mystical-bg underwater-border border-b-4 border-sirens-teal sticky top-0 z-50 backdrop-blur-sm">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-transform duration-300 underwater-float"
          >
            <div className="relative">
              <Crown className="w-10 h-10 text-sirens-gold mystical-glow" />
              <Waves className="w-5 h-5 text-sirens-teal absolute -bottom-1 -right-1 wave-motion" />
            </div>
            <div className="text-sirens-pearl">
              <h1 className="fantasy-font text-2xl md:text-3xl text-sirens-gold 
                           transform group-hover:scale-105 transition-transform duration-300">
                SIRENS OF FORTUNE
              </h1>
              <p className="mystical-text text-xs -mt-1 text-sirens-teal">
                Mystical Gaming Emporium
              </p>
            </div>
          </button>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-sirens-pearl hover:text-sirens-gold 
                       transition-colors duration-300 hover:scale-110 transform mystical-glow"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Cart */}
            <button
              onClick={onCartToggle}
              className="relative text-sirens-pearl hover:text-sirens-gold 
                       transition-all duration-300 transform hover:scale-110 
                       enchanted-button underwater-float"
            >
              <ShoppingCart className="w-7 h-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sirens-gold 
                               text-sirens-navy text-xs font-bold rounded-full w-6 h-6 
                               flex items-center justify-center underwater-border 
                               mystical-glow">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mystical-bg border-t-2 border-sirens-teal backdrop-blur-sm ocean-gradient">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6 py-2">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sirens-pearl hover:text-sirens-gold whitespace-nowrap
                         mystical-text font-bold transition-all duration-300 
                         hover:transform hover:scale-110 px-2 py-1 rounded-lg
                         hover:bg-sirens-teal hover:bg-opacity-20 treasure-shimmer text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden py-3 enchanted-entrance">
              <div className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.action();
                      setShowMobileMenu(false);
                    }}
                    className="text-sirens-pearl hover:text-sirens-gold text-center
                             mystical-text font-bold transition-all duration-300 
                             hover:transform hover:scale-105 px-2 py-1 rounded-lg
                             hover:bg-sirens-teal hover:bg-opacity-20 text-xs treasure-shimmer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;