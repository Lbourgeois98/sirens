// Coinbase Onramp Configuration
export const COINBASE_ONRAMP_CONFIG = {
  appId: import.meta.env.VITE_COINBASE_ONRAMP_APP_ID || 'your_coinbase_onramp_app_id',
  experienceLoggedIn: 'embedded', // or 'popup'
  experienceLoggedOut: 'popup',
  theme: 'dark',
  environment: 'production', // or 'sandbox' for testing
  defaultNetwork: 'ethereum',
  defaultPaymentMethod: 'card',
  defaultPurchaseAmount: 100,
  destinationWallets: [
    {
      address: '', // Player's wallet address - will be set dynamically
      blockchains: ['ethereum', 'bitcoin', 'polygon'],
      assets: ['ETH', 'BTC', 'USDC', 'MATIC']
    }
  ]
};

// Coinbase Onramp Service
export class CoinbaseOnrampService {
  private static instance: CoinbaseOnrampService;

  private constructor() {}

  public static getInstance(): CoinbaseOnrampService {
    if (!CoinbaseOnrampService.instance) {
      CoinbaseOnrampService.instance = new CoinbaseOnrampService();
    }
    return CoinbaseOnrampService.instance;
  }

  generateOnrampURL(playerWallet: string, amount: number = 100): string {
    const params = new URLSearchParams({
      appId: COINBASE_ONRAMP_CONFIG.appId,
      destinationWallets: JSON.stringify([{
        address: playerWallet,
        blockchains: ['ethereum', 'bitcoin', 'polygon'],
        assets: ['ETH', 'BTC', 'USDC', 'MATIC']
      }]),
      defaultExperience: 'send',
      presetFiatAmount: amount.toString(),
      fiatCurrency: 'USD',
      theme: 'dark'
    });

    return `https://pay.coinbase.com/buy/select-asset?${params.toString()}`;
  }

  openOnramp(playerWallet: string, amount: number = 100): void {
    const onrampURL = this.generateOnrampURL(playerWallet, amount);
    window.open(onrampURL, '_blank', 'width=500,height=700,scrollbars=yes,resizable=yes');
  }
}