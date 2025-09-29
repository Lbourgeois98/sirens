import React from 'react';
import { MessageCircle, Facebook, Star, Waves, Clock, Users, Shield, Headphones } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Waves className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto mb-8 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent">
            Ready to Dive In?
          </h1>
          <p className="text-lg sm:text-xl text-cyan-200 mb-12 leading-relaxed">
            Your underwater adventure awaits. Message us on Facebook to create your account and claim your place among the legendary players of Sirens Fortune.
          </p>
        </div>
        
        {/* Main Contact Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 max-w-4xl mx-auto">
          <a
            href="https://www.facebook.com/sirens2fortune/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Facebook className="w-6 h-6 group-hover:animate-bounce" />
            Visit Our Facebook
          </a>
          
          <a
            href="https://m.me/sirens2fortune"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            Start Your Journey
            <Star className="w-6 h-6 group-hover:animate-spin" />
          </a>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Account Setup */}
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8" />
              Account Setup
            </h2>
            <div className="space-y-4 text-cyan-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm mt-1">1</div>
                <p>Message us on Facebook Messenger</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm mt-1">2</div>
                <p>Provide your player information and preferred username</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm mt-1">3</div>
                <p>Verify your identity with valid government ID</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm mt-1">4</div>
                <p>Make your first deposit and claim 50% signup bonus</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm mt-1">5</div>
                <p>Start playing immediately in our underwater casino</p>
              </div>
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-gradient-to-br from-slate-800/90 to-yellow-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/30">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <Headphones className="w-8 h-8" />
              Customer Support
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-bold text-white">24/7 Support</h3>
                  <p className="text-yellow-200 text-sm">Available around the clock via Facebook Messenger</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-bold text-white">Quick Response</h3>
                  <p className="text-yellow-200 text-sm">Average response time under 15 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-bold text-white">Secure Communication</h3>
                  <p className="text-yellow-200 text-sm">All conversations are private and encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-bold text-white">Multi-Language</h3>
                  <p className="text-yellow-200 text-sm">Support available in multiple languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">How do I create an account?</h3>
                <p className="text-cyan-200 text-sm">Simply message us on Facebook with your details and we'll set up your account immediately.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">What's the minimum deposit?</h3>
                <p className="text-cyan-200 text-sm">The minimum deposit is $10, and you'll receive a 50% signup bonus on your first deposit.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">How long do cashouts take?</h3>
                <p className="text-cyan-200 text-sm">Cashouts must be claimed within 12 hours of your deposit and are processed within 24-48 hours.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">Is my information secure?</h3>
                <p className="text-cyan-200 text-sm">Yes, all transactions use SSL encryption and we never store your payment information.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-cyan-200 text-sm">We accept credit cards, cryptocurrency, bank transfers, and Helio Pay through our secure payment system.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Can I refer friends?</h3>
                <p className="text-cyan-200 text-sm">Yes! You'll earn a 50% referral bonus with a maximum cashout of 5x your deposit amount.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};