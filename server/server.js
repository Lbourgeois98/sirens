const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'https://sirens-fortune-xr3h.bolt.host',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));

// Raw body parser for webhook signature verification
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Stripe crypto session creation endpoint
app.post('/api/stripe/create-crypto-session', async (req, res) => {
  try {
    const { 
      amount, 
      currency, 
      destination_currency, 
      destination_network, 
      destination_wallet_address, 
      customer_email, 
      customer_name,
      theme 
    } = req.body;
    
    console.log('Creating Stripe crypto session:', { 
      amount, 
      destination_currency, 
      destination_wallet_address, 
      customer_email 
    });
    
    // This would integrate with actual Stripe Crypto Onramp API
    // For now, we'll create a session URL that opens Stripe's crypto onramp
    const cryptoSession = {
      id: `cos_${Date.now()}`,
      url: `https://crypto.stripe.com/buy?${new URLSearchParams({
        client_reference_id: `sirens_${customer_email}_${Date.now()}`,
        destination_currency: destination_currency,
        destination_exchange_amount: amount.toString(),
        destination_network: destination_network,
        lock_wallet_address: 'true',
        wallet_address: destination_wallet_address,
        theme: theme || 'dark'
      }).toString()}`,
      amount: amount,
      destination_currency: destination_currency,
      destination_wallet_address: destination_wallet_address,
      customer: {
        email: customer_email,
        name: customer_name
      },
      status: 'created',
      created_at: new Date().toISOString()
    };
    
    res.json(cryptoSession);
  } catch (error) {
    console.error('Stripe crypto session creation error:', error);
    res.status(500).json({ error: 'Crypto session creation failed' });
  }
});

// Stripe crypto session status endpoint
app.get('/api/stripe/crypto-session-status/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    console.log('Checking crypto session status:', sessionId);
    
    // This would check the actual Stripe Crypto Onramp session status
    // For demo purposes, we'll simulate different statuses
    const isRecent = sessionId.includes(Date.now().toString().slice(0, -4));
    
    const sessionStatus = {
      id: sessionId,
      status: isRecent ? 'fulfilled' : 'pending',
      source_amount: isRecent ? 100 : null,
      transaction_id: isRecent ? `btc_${Date.now()}` : null,
      destination_wallet_address: '39zC2iwMf6qzmVVEcBdfXG6WpVn84Mwxzv',
      updated_at: new Date().toISOString()
    };
    
    res.json(sessionStatus);
  } catch (error) {
    console.error('Crypto session status check error:', error);
    res.status(500).json({ error: 'Status check failed' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Sirens Fortune Stripe Backend running on port ${PORT}`);
  console.log(`📡 Stripe Crypto API: http://localhost:${PORT}/api/stripe/create-crypto-session`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});