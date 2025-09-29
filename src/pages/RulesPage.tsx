import React from 'react';
import { Shield, Crown, AlertTriangle, CheckCircle } from 'lucide-react';

export const RulesPage: React.FC = () => {
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

  const securityRules = [
    "Valid government-issued ID required",
    "Account verification before first cashout",
    "Anti-fraud protection measures",
    "Secure payment processing",
    "SSL encryption for all transactions"
  ];

  const bonusConditions = [
    "Signup bonus: 50% of first deposit",
    "Referral bonus: 50% with 5x max cashout",
    "Wheel/rebate bonuses: $50 fixed amount",
    "All bonuses subject to wagering requirements",
    "Bonus terms apply to all promotional offers"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Cashout Rules & Terms
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200">
              Clear and fair rules for claiming your treasures
            </p>
          </div>

          {/* Main Cashout Rules */}
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-cyan-400/30 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8 text-center flex items-center justify-center gap-3">
              <Shield className="w-8 h-8" />
              Primary Cashout Rules
            </h2>
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
          </div>

          {/* Additional Rules Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Security Requirements */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-3xl p-8 border-2 border-green-400/30">
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Security Requirements
              </h3>
              <ul className="space-y-3">
                {securityRules.map((rule, index) => (
                  <li key={index} className="text-green-200 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Bonus Conditions */}
            <div className="bg-gradient-to-br from-slate-800/90 to-yellow-900/90 rounded-3xl p-8 border-2 border-yellow-400/30">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                <Crown className="w-6 h-6" />
                Bonus Conditions
              </h3>
              <ul className="space-y-3">
                {bonusConditions.map((condition, index) => (
                  <li key={index} className="text-yellow-200 flex items-start gap-3">
                    <Crown className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-2 border-red-400/30 rounded-3xl p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              Important Notice
            </h3>
            <div className="text-red-200 space-y-3">
              <p className="text-sm sm:text-base">
                • All players must be 18+ years of age to participate
              </p>
              <p className="text-sm sm:text-base">
                • Sirens Fortune reserves the right to verify player identity and suspend accounts for suspicious activity
              </p>
              <p className="text-sm sm:text-base">
                • Terms and conditions are subject to change - players will be notified of any updates
              </p>
              <p className="text-sm sm:text-base font-medium">
                • Play responsibly and within your means
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};