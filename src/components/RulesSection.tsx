import React from 'react';
import { Shield, Crown } from 'lucide-react';

export const RulesSection: React.FC = () => {
  const cashoutRules = [
    "Minimum deposit: $10 - Maximum deposit: $500",
    "50% signup bonus on first deposit",
    "50% referral bonus (redeemable, max cashout 5x deposit)",
    "Minimum cashout: 3x deposit + bonus",
    "Maximum cashout: 8x deposit",
    "All cashouts must be claimed within 12 hours of deposit",
    "Rebate/wheel spin bonuses: min/max $50",
    "Valid ID verification required for all cashouts"
  ];

  return (
    <section id="rules" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Cashout Rules
            </h2>
            <p className="text-lg sm:text-xl text-cyan-200">
              Clear and fair rules for claiming your treasures
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-cyan-400/30">
            <div className="space-y-4 sm:space-y-6">
              {cashoutRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover:bg-teal-800/20 rounded-2xl p-4 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300 text-sm">
                    {index + 1}
                  </div>
                  <p className="text-base sm:text-lg text-cyan-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl">
              <p className="text-yellow-200 text-center font-medium flex items-center justify-center gap-2 flex-wrap">
                <Crown className="w-5 h-5" />
                <span className="text-sm sm:text-base">
                  All cashout requests are processed securely through our verified payment partners
                </span>
              </p>
            </div>

            {/* Additional Rules */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-700/30 rounded-xl p-6 border border-cyan-400/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Requirements
                </h3>
                <ul className="text-cyan-200 text-sm space-y-2">
                  <li>• Valid government-issued ID required</li>
                  <li>• Account verification before first cashout</li>
                  <li>• Anti-fraud protection measures</li>
                  <li>• Secure payment processing system</li>
                </ul>
              </div>
              
              <div className="bg-slate-700/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Bonus Conditions
                </h3>
                <ul className="text-yellow-200 text-sm space-y-2">
                  <li>• Signup bonus: 50% of first deposit</li>
                  <li>• Referral bonus: 50% with 5x max cashout</li>
                  <li>• Wheel/rebate bonuses: $50 fixed amount</li>
                  <li>• All bonuses subject to terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};