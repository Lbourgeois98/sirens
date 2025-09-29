import React from 'react';
import { MessageCircle, X } from 'lucide-react';

interface PaymentProps {
  onClose: () => void;
  type: 'deposit' | 'withdrawal';
}

export const HelioPayment: React.FC<PaymentProps> = ({ onClose, type }) => {
  const handleContactSupport = () => {
    window.open('https://m.me/sirens2fortune', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-800 via-teal-900 to-cyan-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {type === 'deposit' ? 'Deposit' : 'Withdraw'}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300 hover:rotate-90 transform"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 rounded-xl p-6 border border-cyan-400/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              {type === 'deposit' ? 'Make a Deposit' : 'Withdraw Funds'}
            </h3>
            <p className="text-cyan-200 mb-6">
              {type === 'deposit' 
                ? 'To make a deposit and start playing, please contact us on Facebook Messenger.'
                : 'To withdraw your winnings, please contact us on Facebook Messenger with your withdrawal request.'
              }
            </p>
            <button
              onClick={handleContactSupport}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};