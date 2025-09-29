import React from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard, ExternalLink, Crown } from 'lucide-react';
import { CartItem } from '../types';
import { useShopifyCart } from '../hooks/useShopify';
import { shopifyService } from '../services/shopify';
import SpeedCheckoutButton from './SpeedCheckoutButton';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const { cart, checkout, loading } = useShopifyCart();
  const isShopifyConfigured = shopifyService.isConfigured();

  const handleShopifyCheckout = async () => {
    if (isShopifyConfigured && cart) {
      // Use Shopify checkout
      await checkout();
    } else {
      // Fallback to demo checkout
      alert('Redirecting to secure checkout! In a real implementation, this would integrate with your payment processor.');
    }
  };

  const handleSpeedCheckoutSuccess = (response: any) => {
    console.log('Lightning Payment Success:', response);
    
    // Show success message
    const event = new CustomEvent('checkoutSuccess', {
      detail: {
        provider: 'lightning',
        transactionId: response.transactionId,
        orderId: response.orderId,
        amount: response.amount
      }
    });
    window.dispatchEvent(event);

    // Close cart after successful checkout
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleSpeedCheckoutError = (error: string) => {
    console.error('Lightning Payment Error:', error);
    
    // Show error notification
    const event = new CustomEvent('checkoutError', {
      detail: {
        provider: 'lightning',
        error
      }
    });
    window.dispatchEvent(event);
  };

  const getShopifyCheckoutButtonText = () => {
    if (isShopifyConfigured) {
      return (
        <>
          <ExternalLink className="w-5 h-5" />
          SHOPIFY CHECKOUT
        </>
      );
    }
    return (
      <>
        <CreditCard className="w-5 h-5" />
        DEMO CHECKOUT
      </>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-gray-800 bg-opacity-95
                      mystical-bg underwater-border border-l-8 border-sirens-teal z-50 transform transition-transform duration-300 
                      backdrop-blur-sm
                      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sirens-teal to-sirens-purple text-sirens-pearl p-4 underwater-border border-b-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 mystical-glow" />
              <h2 className="fantasy-font text-2xl">TREASURE CHEST</h2>
            </div>
            <button
              onClick={onClose}
              className="text-sirens-pearl hover:text-sirens-gold transition-colors duration-300 
                       p-1 rounded-full hover:bg-sirens-deep underwater-float"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <p className="mystical-text mt-1 text-sirens-gold">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
          </p>

          {/* Payment Status Indicators */}
          <div className="mt-2 flex items-center gap-4 text-xs">
            {isShopifyConfigured && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sirens-teal rounded-full mystical-glow"></div>
                <span className="mystical-text text-sirens-teal">Shopify</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sirens-gold rounded-full mystical-glow"></div>
              <span className="mystical-text text-sirens-gold">Lightning Network</span>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 max-h-96">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="enchanted-bubble">
                <Crown className="w-16 h-16 text-sirens-gold mx-auto mb-4 mystical-glow" />
                <p className="mystical-text text-lg text-sirens-pearl font-bold">
                  Your treasure chest is empty!
                </p>
                <p className="elegant-text text-sirens-pearl mt-2">
                  Start collecting some mystical Pokemon treasures!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="mystical-bg p-4 rounded-2xl underwater-border backdrop-blur-sm treasure-shimmer">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg underwater-border"
                    />
                    
                    <div className="flex-1">
                      <h3 className="mystical-text font-bold text-sirens-gold text-sm mb-1">
                        {item.name}
                      </h3>
                      <p className="elegant-text text-xs text-sirens-pearl mb-2">
                        {item.console} • Gen {item.generation}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-sirens-coral text-sirens-navy rounded-full 
                                     flex items-center justify-center hover:bg-sirens-purple 
                                     transition-colors duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="mystical-text font-bold text-lg w-8 text-center text-sirens-pearl">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-sirens-coral text-sirens-navy rounded-full 
                                     flex items-center justify-center hover:bg-sirens-purple 
                                     transition-colors duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="fantasy-font text-lg text-sirens-gold mystical-glow">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-xs text-sirens-coral hover:text-sirens-purple 
                                     mystical-text underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout Options */}
        {cartItems.length > 0 && (
          <div className="border-t-4 border-sirens-teal p-4 space-y-4 mystical-bg backdrop-blur-sm">
            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="fantasy-font text-2xl text-sirens-pearl">TOTAL:</span>
              <span className="fantasy-font text-3xl text-sirens-gold mystical-glow">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Shopify Cart Info */}
            {isShopifyConfigured && cart && (
              <div className="mystical-bg rounded-lg p-3 underwater-border">
                <div className="flex justify-between text-sm">
                  <span className="mystical-text text-sirens-pearl">Shopify Total:</span>
                  <span className="mystical-text text-sirens-gold">
                    ${cart.totalPrice.amount} {cart.totalPrice.currencyCode}
                  </span>
                </div>
                {cart.totalTax.amount !== '0.00' && (
                  <div className="flex justify-between text-sm">
                    <span className="mystical-text text-sirens-pearl">Tax:</span>
                    <span className="mystical-text text-sirens-pearl">
                      ${cart.totalTax.amount}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Lightning Checkout Button */}
            <SpeedCheckoutButton
              cartItems={cartItems}
              totalAmount={totalPrice}
              onSuccess={handleSpeedCheckoutSuccess}
              onError={handleSpeedCheckoutError}
            />

            {/* Shopify Checkout Button */}
            <button
              onClick={handleShopifyCheckout}
              disabled={loading}
              className="w-full enchanted-button font-bold py-4 px-6 rounded-full mystical-text 
                       text-xl transform hover:scale-105 transition-all duration-300 
                       treasure-shadow flex items-center justify-center gap-2
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-sirens-navy border-t-transparent rounded-full"></div>
                  PROCESSING...
                </>
              ) : (
                getShopifyCheckoutButtonText()
              )}
            </button>

            <p className="text-xs text-sirens-pearl text-center mystical-text">
              Mystical payment options • Lightning Network • Enchanted Security • Instant Delivery
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;