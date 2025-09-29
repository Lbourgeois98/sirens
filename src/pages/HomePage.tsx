import React from 'react';
import { Facebook, MessageCircle, Wallet, DollarSign } from 'lucide-react';

interface HomePageProps {
  onShowPayment: (type: 'deposit' | 'withdrawal') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onShowPayment }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
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
              src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
              alt="Sirens Fortune Logo" 
              className="h-48 sm:h-56 md:h-72 lg:h-80 w-auto mx-auto rounded-2xl shadow-2xl shadow-cyan-400/30 border-4 border-cyan-400/70 hover:border-yellow-400/90 transition-all duration-700 hover:scale-110 hover:rotate-1 hover:shadow-yellow-400/40"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold mb-8 bg-gradient-to-r from-cyan-400 via-teal-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
            Sirens Fortune
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-200 mb-10 leading-relaxed font-medium drop-shadow-lg">
            Dive into the depths of fortune where mystical sirens guard treasures beyond imagination
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-teal-300 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Join our exclusive underwater casino realm by connecting with us on Facebook to set up your account and begin your legendary journey
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12">
            <a
              href="https://www.facebook.com/sirens2fortune/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-400/30 flex items-center gap-4 w-full sm:w-auto justify-center border-2 border-blue-400/30 hover:border-blue-300/60"
            >
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-bounce" />
              <span className="drop-shadow-lg">Visit Our Facebook</span>
            </a>
            
            <a
              href="https://m.me/sirens2fortune"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 hover:from-teal-500 hover:via-cyan-500 hover:to-teal-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/30 flex items-center gap-4 w-full sm:w-auto justify-center border-2 border-cyan-400/30 hover:border-cyan-300/60"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
              <span className="drop-shadow-lg">Message Us Now</span>
            </a>
          </div>
          
          {/* Quick Payment Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onShowPayment('deposit')}
              className="group bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 hover:from-orange-500 hover:via-yellow-500 hover:to-orange-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-400/30 flex items-center gap-3 w-full sm:w-auto justify-center border-2 border-orange-400/30 hover:border-orange-300/60"
            >
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              <span className="drop-shadow-lg">Deposit</span>
            </button>
            
            <button
              onClick={() => onShowPayment('withdrawal')}
              className="group bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 hover:from-green-500 hover:via-emerald-500 hover:to-green-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/30 flex items-center gap-3 w-full sm:w-auto justify-center border-2 border-green-400/30 hover:border-green-300/60"
            >
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              <span className="drop-shadow-lg">Withdraw</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};