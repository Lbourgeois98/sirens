import React, { useState, useEffect, useRef } from 'react';
declare global {
  interface Window {
    StripeOnramp?: any;
  }
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { BonusesPage } from './pages/BonusesPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { RulesPage } from './pages/RulesPage';
import { ContactPage } from './pages/ContactPage';
import { DepositForm } from './components/DepositForm';
// ...existing code...

function App() {
  const [showPayment, setShowPayment] = useState<'deposit' | 'withdrawal' | null>(null);
  const [depositData, setDepositData] = useState<{ name: string; username: string; amount: number } | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  // Fetch Stripe Onramp client secret after deposit form
  useEffect(() => {
    if (depositData && showPayment === 'deposit') {
  fetch('/api/create-onramp-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(() => setClientSecret(null));
    } else {
      setClientSecret(null);
    }
  }, [depositData, showPayment]);

  // Stripe Onramp Widget component
  function StripeOnrampWidget({ clientSecret }: { clientSecret: string }) {
    const widgetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (clientSecret && widgetRef.current) {
        // Inject Stripe script if not present
        if (!document.getElementById('stripe-onramp-script')) {
          const script = document.createElement('script');
          script.id = 'stripe-onramp-script';
          script.src = 'https://js.stripe.com/v3/';
          script.async = true;
          document.body.appendChild(script);
          script.onload = () => {
            if (window.StripeOnramp) {
              window.StripeOnramp('pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO').mount(widgetRef.current, { clientSecret });
            }
          };
        } else {
          if (window.StripeOnramp) {
            window.StripeOnramp('pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO').mount(widgetRef.current, { clientSecret });
          }
        }
      }
    }, [clientSecret]);
    return <div ref={widgetRef} style={{ minHeight: 400 }} />;
  }

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
        
        {/* Stripe Crypto Onramp Modal */}
        {showPayment === 'deposit' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 rounded-3xl p-8 sm:p-12 border-2 border-yellow-400/30 max-w-lg w-full shadow-2xl relative">
              <button
                className="absolute top-4 right-4 text-cyan-400 hover:text-yellow-400 text-xl font-bold"
                onClick={() => { setShowPayment(null); setDepositData(null); }}
                aria-label="Close"
              >
                ×
              </button>
              {!depositData ? (
                <DepositForm onSubmit={data => setDepositData(data)} />
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Proceed to Deposit</h2>
                  <p className="text-cyan-200 mb-6">Name: <span className="font-bold text-white">{depositData.name}</span></p>
                  <p className="text-cyan-200 mb-6">Username: <span className="font-bold text-white">{depositData.username}</span></p>
                  <p className="text-cyan-200 mb-8">Amount: <span className="font-bold text-white">${depositData.amount}</span></p>
                  <div className="bg-slate-900/70 rounded-xl p-6 border border-cyan-400/30 mb-4">
                    <p className="text-yellow-400 font-bold mb-2">Stripe Crypto Onramp</p>
                    <p className="text-cyan-200 text-sm mb-2">Complete your deposit securely below:</p>
                    {clientSecret ? (
                      <StripeOnrampWidget clientSecret={clientSecret} />
                    ) : (
                      <p className="text-cyan-400">Loading Stripe Onramp...</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;