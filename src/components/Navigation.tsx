import React, { useState } from 'react';
import { Menu, X, Anchor, Crown, Shield, DollarSign, MessageCircle, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/bonuses', label: 'Bonuses', icon: <Crown className="w-4 h-4" /> },
    { path: '/payments', label: 'Payments', icon: <DollarSign className="w-4 h-4" /> },
    { path: '/rules', label: 'Rules', icon: <Shield className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <MessageCircle className="w-4 h-4" /> }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Name Only */}
          <Link to="/" className="group">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-cyan-400 transition-all duration-300">
              Sirens Fortune
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg'
                    : 'text-cyan-200 hover:text-white hover:bg-cyan-800/30'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-cyan-800/30 text-cyan-200 hover:text-white hover:bg-cyan-700/50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-cyan-400/20 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg'
                      : 'text-cyan-200 hover:text-white hover:bg-cyan-800/30'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};