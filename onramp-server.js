const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const stripe = Stripe('sk_live_your_secret_key'); // <-- Replace with your actual Stripe secret key

app.post('/api/create-onramp-session', async (req, res) => {
  try {
    // You can pass more parameters here, e.g. wallet address, amount, currency, etc.
    const session = await stripe.crypto.onrampSessions.create({
      // customer: req.body.customerId, // optional
      // destination_wallet_address: req.body.walletAddress, // optional
    });
    res.json({ clientSecret: session.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log('Stripe Onramp backend running on port 3001'));
