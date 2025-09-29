import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { BonusesPage } from './pages/BonusesPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { RulesPage } from './pages/RulesPage';
import { ContactPage } from './pages/ContactPage';
import { HelioPayment } from './components/HelioPayment';

function App() {
  const [showPayment, setShowPayment] = useState<'deposit' | 'withdrawal' | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-900 to-cyan-900 text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage onShowPayment={setShowPayment} />} />
            <Route path="/bonuses" element={<BonusesPage />} />
            <Route path="/payments" element={<PaymentsPage onShowPayment={setShowPayment} />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/80 border-t border-cyan-400/20 py-8 sm:py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-cyan-300 mb-4">© 2025 Sirens Fortune. All treasures reserved.</p>
            <p className="text-teal-400 text-sm">
              Play responsibly. Must be 18+ to participate.
            </p>
          </div>
        </footer>
        
        {/* Helio Payment Modal */}
        {showPayment && (
          <HelioPayment
            type={showPayment}
            onClose={() => setShowPayment(null)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;