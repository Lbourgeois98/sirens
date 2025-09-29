// Stripe Crypto Onramp Configuration
export const STRIPE_CRYPTO_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO',
  environment: 'production',
  destinationWallet: '39zC2iwMf6qzmVVEcBdfXG6WpVn84Mwxzv',
  supportedCurrencies: ['btc', 'eth', 'usdc'],
  theme: 'dark'
};

// Stripe Crypto Onramp Service
export class StripeCryptoService {
  private static instance: StripeCryptoService;
  private publishableKey: string;

  private constructor() {
    this.publishableKey = STRIPE_CRYPTO_CONFIG.publishableKey;
  }

  public static getInstance(): StripeCryptoService {
    if (!StripeCryptoService.instance) {
      StripeCryptoService.instance = new StripeCryptoService();
    }
    return StripeCryptoService.instance;
  }

  async createCryptoSession(amount: number, customerEmail: string, customerName: string): Promise<{
    success: boolean;
    sessionUrl?: string;
    sessionId?: string;
    error?: string;
  }> {
    try {
      const backendUrl = import.meta.env.VITE_STRIPE_BACKEND_URL || 'http://localhost:3001';
      // Create Stripe Crypto Onramp session
      const response = await fetch(`${backendUrl}/api/stripe/create-crypto-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'usd',
          destination_currency: 'btc',
          destination_network: 'bitcoin',
          destination_wallet_address: STRIPE_CRYPTO_CONFIG.destinationWallet,
          customer_email: customerEmail,
          customer_name: customerName,
          theme: 'dark'
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to create crypto session');
      }

      const session = await response.json();
      
      return {
        success: true,
        sessionUrl: session.url,
        sessionId: session.id
      };
    } catch (error) {
      console.error('Stripe crypto session creation failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async openCryptoOnramp(amount: number, customerEmail: string, customerName: string): Promise<{
    success: boolean;
    amount?: number;
    transactionId?: string;
    sessionId?: string;
  }> {
    try {
      // Create the crypto session
      const sessionResult = await this.createCryptoSession(amount, customerEmail, customerName);
      
      if (!sessionResult.success || !sessionResult.sessionUrl) {
        throw new Error(sessionResult.error || 'Failed to create session');
      }

      // Open Stripe Crypto Onramp in popup
      const popup = window.open(
        sessionResult.sessionUrl,
        'stripe-crypto-onramp',
        'width=500,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no'
      );

      if (!popup) {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }

      // Monitor popup for completion
      return new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          try {
            if (popup.closed) {
              clearInterval(checkInterval);
              // Check session status after popup closes
              this.checkSessionStatus(sessionResult.sessionId!).then((status) => {
                resolve({
                  success: status.success,
                  amount: status.success ? amount : undefined,
                  transactionId: status.transactionId,
                  sessionId: sessionResult.sessionId
                });
              });
            }
          } catch (error) {
            // Handle cross-origin errors
            console.log('Checking popup status...');
          }
        }, 1000);

        // Timeout after 10 minutes
        setTimeout(() => {
          clearInterval(checkInterval);
          if (!popup.closed) {
            popup.close();
          }
          resolve({ success: false });
        }, 600000);
      });
    } catch (error) {
      console.error('Crypto onramp error:', error);
      return {
        success: false
      };
    }
  }

  async checkSessionStatus(sessionId: string): Promise<{
    success: boolean;
    transactionId?: string;
    amount?: number;
  }> {
    try {
      const backendUrl = import.meta.env.VITE_STRIPE_BACKEND_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/stripe/crypto-session-status/${sessionId}`);
      
      if (!response.ok) {
        return { success: false };
      }
      
      const status = await response.json();
      
      return {
        success: status.status === 'fulfilled',
        transactionId: status.transaction_id,
        amount: status.source_amount
      };
    } catch (error) {
      console.error('Error checking session status:', error);
      return { success: false };
    }
  }
}