import React from 'react';
import { Anchor, Wallet, Shield } from 'lucide-react';

export const PaymentsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <Anchor className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Payments
            </h1>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-yellow-400/30 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <a
                  href="/api/deposit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-400/30 flex items-center gap-3 justify-center"
                >
                  <Wallet className="w-6 h-6" />
                  Deposit
                </a>
              </div>
            </div>

            {/* Payment Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Wallet className="w-6 h-6" />
                  Deposits
                </h3>
                <ul className="text-green-200 space-y-2">
                  <li>• Minimum: $10</li>
                  <li>• Maximum: $500</li>
                  <li>• Instant processing</li>
                  <li>• 50% signup bonus</li>
                </ul>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border-2 border-cyan-400/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Security
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-cyan-200">
                <ul className="space-y-2">
                  <li>• Enterprise security</li>
                  <li>• Bank-level encryption</li>
                  <li>• No payment info stored</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Real-time fraud detection</li>
                  <li>• 24/7 transaction monitoring</li>
                  <li>• Secure processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
