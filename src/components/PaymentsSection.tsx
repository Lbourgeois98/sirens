import React from 'react';
import { Anchor, Coins, Shield, Star, CreditCard, Wallet, DollarSign } from 'lucide-react';

interface PaymentsSectionProps {
  onShowPayment: (type: 'deposit' | 'withdrawal') => void;
}

export const PaymentsSection: React.FC<PaymentsSectionProps> = ({ onShowPayment }) => {
  return (
    <section id="payments" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-yellow-400/30">
          <div className="text-center mb-8">
            <Anchor className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Secure Payments
            </h2>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Fast, secure, and seamless transactions for your gaming experience
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-cyan-400/20 mb-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Payment Methods Accepted</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-cyan-200 mb-8">
                <div className="bg-teal-800/50 rounded-lg p-4">
                  <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">Crypto</span>
                </div>
                <div className="bg-teal-800/50 rounded-lg p-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">Bank Transfer</span>
                </div>
                <div className="bg-teal-800/50 rounded-lg p-4">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">Digital Wallet</span>
                </div>
                <div className="bg-teal-800/50 rounded-lg p-4">
                  <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">Credit Cards</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onShowPayment('deposit')}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Wallet className="w-5 h-5" />
                  Instant Deposit
                </button>
                <button
                  onClick={() => onShowPayment('withdrawal')}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <DollarSign className="w-5 h-5" />
                  Quick Withdrawal
                </button>
              </div>
            </div>
          </div>

          {/* Payment Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Deposits
              </h4>
              <ul className="text-green-200 text-sm space-y-2">
                <li>• Minimum: $10</li>
                <li>• Maximum: $500</li>
                <li>• Instant processing</li>
                <li>• 50% signup bonus</li>
              </ul>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Withdrawals
              </h4>
              <ul className="text-yellow-200 text-sm space-y-2">
                <li>• Minimum: 3x deposit + bonus</li>
                <li>• Maximum: 8x deposit</li>
                <li>• 12-hour claim window</li>
                <li>• Secure processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};