import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
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
  const handleCheckoutSuccess = (response: any) => {
    console.log('Checkout successful:', response);
    // Dispatch success event
    const event = new CustomEvent('checkoutSuccess', {
      detail: { provider: 'Strike Lightning', amount: totalPrice, response }
    });
    window.dispatchEvent(event);
  };

  const handleCheckoutError = (error: string) => {
    console.error('Checkout error:', error);
    // Dispatch error event
    const event = new CustomEvent('checkoutError', {
      detail: { provider: 'Strike Lightning', error }
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md mystical-bg underwater-border border-l-4 
                      transform transition-transform duration-300 z-50 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-sirens-teal">
          <div className="flex items-center gap-3">
            <img 
              src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
              alt="Sirens Fortune"
              className="w-8 h-8 rounded-full"
            />
            <h2 className="fantasy-font text-2xl text-sirens-gold mystical-glow">
              Treasure Chest
            </h2>
          </div>
          <button
            onClick={onClose}
            className="enchanted-button p-2 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full">
          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-sirens-teal mx-auto mb-4 mystical-glow" />
                <p className="mystical-text text-lg text-sirens-pearl mb-2">
                  Your treasure chest is empty
                </p>
                <p className="elegant-text text-sirens-pearl">
                  Add some aquatic adventures to begin your journey!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="enchanted-bubble p-4">
                    <div className="flex gap-4">
                      {/* Game Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg underwater-border"
                      />
                      
                      {/* Game Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="mystical-text font-bold text-sirens-gold text-sm mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="elegant-text text-xs text-sirens-pearl mb-2">
                          {item.console} • Gen {item.generation}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-sirens-teal hover:bg-sirens-coral 
                                       text-sirens-navy flex items-center justify-center
                                       transform hover:scale-110 transition-all duration-300"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            
                            <span className="mystical-text font-bold text-sirens-pearl w-8 text-center">
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-sirens-teal hover:bg-sirens-coral 
                                       text-sirens-navy flex items-center justify-center
                                       transform hover:scale-110 transition-all duration-300"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-sirens-coral hover:text-sirens-gold 
                                     transform hover:scale-110 transition-all duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Price */}
                        <div className="mt-2 text-right">
                          <span className="fantasy-font text-lg text-sirens-gold mystical-glow">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Section */}
          {cartItems.length > 0 && (
            <div className="border-t-2 border-sirens-teal p-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="mystical-text text-lg font-bold text-sirens-pearl">
                  Total Treasure:
                </span>
                <span className="fantasy-font text-2xl text-sirens-gold mystical-glow">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <SpeedCheckoutButton
                cartItems={cartItems}
                totalAmount={totalPrice}
                onSuccess={handleCheckoutSuccess}
                onError={handleCheckoutError}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;