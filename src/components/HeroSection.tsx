import React from 'react';
import { Facebook, MessageCircle, Wallet, DollarSign } from 'lucide-react';

interface HeroSectionProps {
  onShowPayment: (type: 'deposit' | 'withdrawal') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShowPayment }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-60"></div>
        
        {/* Floating Bubbles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-cyan-400 bg-opacity-20 rounded-full animate-bounce opacity-30`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/public/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
              alt="Sirens Fortune Logo" 
              className="h-32 sm:h-40 md:h-48 w-auto mx-auto rounded-lg shadow-2xl border-4 border-cyan-400/50 hover:border-yellow-400/70 transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Sirens Fortune
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-200 mb-8 leading-relaxed">
            Dive into the depths of fortune where mystical sirens guard treasures beyond imagination
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-teal-300 mb-12 max-w-2xl mx-auto">
            Join our exclusive underwater casino realm by connecting with us on Facebook to set up your account and begin your legendary journey
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <a
              href="https://www.facebook.com/sirens2fortune/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              Visit Our Facebook
            </a>
            
            <a
              href="https://m.me/sirens2fortune"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              Message Us Now
            </a>
          </div>
          
          {/* Quick Payment Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onShowPayment('deposit')}
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              Make Deposit
            </button>
            
            <button
              onClick={() => onShowPayment('withdrawal')}
              className="group bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};