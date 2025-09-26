import React from 'react';
import { MessageCircle, Facebook, Star, Waves } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Waves className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent">
            Ready to Dive In?
          </h2>
          <p className="text-lg sm:text-xl text-cyan-200 mb-12 leading-relaxed">
            Your underwater adventure awaits. Message us on Facebook to create your account and claim your place among the legendary players of Sirens Fortune.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
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

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-cyan-400">Account Setup</h4>
                <ul className="text-cyan-200 text-sm space-y-2">
                  <li>• Message us on Facebook</li>
                  <li>• Provide your player information</li>
                  <li>• Verify your identity</li>
                  <li>• Start playing immediately</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-yellow-400">Support Hours</h4>
                <ul className="text-yellow-200 text-sm space-y-2">
                  <li>• 24/7 Facebook Messenger</li>
                  <li>• Quick response times</li>
                  <li>• Friendly customer service</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};