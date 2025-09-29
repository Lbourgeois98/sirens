import React, { useState } from 'react';
import { Crown, Star, Coins } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const [activeBonus, setActiveBonus] = useState(0);

  const bonuses = [
    {
      title: "50% Signup Bonus",
      description: "New players receive a 50% bonus on their first deposit when they join our underwater realm",
      amount: "50% Match",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      details: "Applied automatically on your first deposit"
    },
    {
      title: "50% Referral Bonus",
      description: "Refer friends and earn 50% bonus - redeemable with max cashout of 5x deposit",
      amount: "50% Referral",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      details: "Max cashout: 5x your deposit amount"
    },
    {
      title: "Rebate & Wheel Bonuses",
      description: "Special rebate and wheel spin bonuses with guaranteed minimum and maximum rewards",
      amount: "Min/Max $50",
      icon: <Coins className="w-8 h-8 text-yellow-400" />,
      details: "Fixed $50 minimum and maximum bonus amounts"
    }
  ];

  return (
    <section id="bonuses" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Treasured Bonuses
          </h2>
          <p className="text-lg sm:text-xl text-cyan-200 max-w-2xl mx-auto">
            Discover the riches that await in our underwater treasure vault
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/80 to-teal-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                activeBonus === index
                  ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20'
                  : 'border-cyan-400/30 hover:border-cyan-400/60'
              }`}
              onMouseEnter={() => setActiveBonus(index)}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  {bonus.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
                  {bonus.title}
                </h3>
                <p className="text-cyan-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {bonus.description}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full py-2 sm:py-3 px-4 sm:px-6 inline-block mb-4">
                  {bonus.amount}
                </div>
                <p className="text-xs sm:text-sm text-teal-300 font-medium">
                  {bonus.details}
                </p>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bonus Terms */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-yellow-400/30">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 text-center">
              Bonus Terms & Conditions
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-cyan-200">
              <div className="space-y-2">
                <p>• 50% signup bonus on first deposit</p>
                <p>• 50% referral bonus (max cashout 5x deposit)</p>
                <p>• Minimum deposit: $10</p>
              </div>
              <div className="space-y-2">
                <p>• All bonuses subject to wagering requirements</p>
                <p>• Rebate/wheel bonuses: min/max $50</p>
                <p>• Terms apply to all promotional offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};