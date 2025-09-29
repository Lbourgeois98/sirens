import React, { useState } from 'react';
import { ShoppingCart, Star, Monitor, Sparkles, Crown } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    
    // Add visual feedback
    const button = document.querySelector(`#add-to-cart-${product.id}`);
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
      }, 1000);
    }
  };

  const handleImageError = () => {
    setImageError(true);
    console.warn(`Failed to load image: ${product.image}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Create fallback image URL
  const getFallbackImage = () => {
    return `https://via.placeholder.com/400x300/FFD700/000000?text=${encodeURIComponent(product.name)}`;
  };

  // Get optimized image path
  const getImagePath = () => {
    // Ensure the path starts with / for public folder
    if (product.image.startsWith('/')) {
      return product.image;
    }
    return `/${product.image}`;
  };

  const getRarityColor = () => {
    if (product.rating >= 4.7) return 'from-sirens-gold to-sirens-coral'; // Legendary
    if (product.rating >= 4.5) return 'from-sirens-purple to-sirens-teal'; // Epic
    if (product.rating >= 4.2) return 'from-sirens-teal to-sirens-purple'; // Rare
    return 'from-sirens-deep to-sirens-ocean'; // Common
  };

  const getRarityBorder = () => {
    if (product.rating >= 4.7) return 'border-sirens-gold shadow-sirens-gold/50';
    if (product.rating >= 4.5) return 'border-sirens-purple shadow-sirens-purple/50';
    if (product.rating >= 4.2) return 'border-sirens-teal shadow-sirens-teal/50';
    return 'border-sirens-deep shadow-sirens-deep/50';
  };

  const getRarityName = () => {
    if (product.rating >= 4.7) return 'LEGENDARY';
    if (product.rating >= 4.5) return 'EPIC';
    if (product.rating >= 4.2) return 'RARE';
    return 'COMMON';
  };

  return (
    <div 
      className={`mystical-card relative w-full perspective-1000 group underwater-float
                 ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card Container */}
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700">
        
        {/* Front of Card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden
                        bg-gradient-to-br ${getRarityColor()} p-0.5 md:p-1 rounded-lg md:rounded-2xl
                        ${getRarityBorder()} border-2 md:border-4 shadow-lg md:shadow-2xl
                        transform transition-all duration-500 hover:scale-105 treasure-shimmer
                        ${isHovered ? 'shadow-xl md:shadow-2xl' : ''}`}>
          
          {/* Inner Card */}
          <div className="w-full h-full mystical-bg rounded-md md:rounded-xl overflow-hidden relative backdrop-blur-sm flex flex-col">
            
            {/* Holographic Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-sirens-teal/20 to-transparent
                           opacity-0 transition-opacity duration-500 pointer-events-none
                           ${isHovered ? 'opacity-100' : ''}`} />
            
            {/* Rarity Badge - Smaller on mobile */}
            <div className={`absolute top-1 left-1 px-1 py-0.5 md:px-2 md:py-1 rounded-full text-xs md:text-xs font-bold 
                           mystical-text uppercase tracking-wide z-10
                           bg-gradient-to-r ${getRarityColor()} text-white
                           transform transition-all duration-300 hover:scale-110`}>
              <span className="hidden sm:inline">{getRarityName()}</span>
              <span className="sm:hidden"><Crown className="w-3 h-3" /></span>
            </div>

            {/* Generation Badge - Smaller on mobile */}
            <div className="absolute top-1 right-1 w-4 h-4 md:w-6 md:h-6 bg-sirens-gold rounded-full 
                           flex items-center justify-center text-sirens-navy font-bold text-xs z-10
                           transform transition-all duration-300 hover:rotate-180">
              {product.generation}
            </div>

            {/* Product Image - Responsive height with loading states */}
            <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 overflow-hidden flex-shrink-0">
              {/* Loading placeholder */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400 text-xs">Loading...</div>
                </div>
              )}
              
              {/* Main image */}
              <img
                src={imageError ? getFallbackImage() : getImagePath()}
                alt={`${product.name} - Pokemon Game Cover Art`}
                className={`w-full h-full object-cover transition-all duration-700
                           ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}
                           ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
                decoding="async"
              />
              
              {/* Error state */}
              {imageError && (
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <div className="text-center text-xs text-gray-300">
                    <div className="mb-1">📷</div>
                    <div>Image Unavailable</div>
                  </div>
                </div>
              )}
              
              {/* Floating Sparkles - Hidden on very small screens */}
              <div className={`absolute top-1 right-1 transition-all duration-1000 hidden sm:block
                             ${isHovered ? 'animate-bounce' : ''}`}>
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-sirens-gold mystical-glow" />
              </div>
              
              {/* Energy Lines */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 md:h-1 
                             bg-gradient-to-r ${getRarityColor()}
                             transform transition-all duration-500
                             ${isHovered ? 'h-1 md:h-2' : ''}`} />
            </div>

            {/* Card Content - Compact Layout */}
            <div className="p-1.5 md:p-3 flex flex-col flex-grow justify-between min-h-0">
              {/* Title - Responsive text size */}
              <div className="mb-1 md:mb-2">
                <h3 className={`fantasy-font text-xs sm:text-sm md:text-base text-sirens-gold leading-tight
                             transition-all duration-300 line-clamp-2 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem]
                             ${isHovered ? '' : ''}`}>
                  {product.name}
                </h3>
              </div>

              {/* Rating and Console - Compact Row */}
              <div className="flex items-center justify-between mb-1 md:mb-2 flex-shrink-0">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2 h-2 md:w-3 md:h-3 transition-all duration-300 delay-${i * 100}
                        ${i < Math.floor(product.rating) 
                          ? 'text-sirens-gold fill-current mystical-glow' 
                          : 'text-sirens-deep'}
                        ${isHovered ? 'animate-pulse' : ''}`}
                    />
                  ))}
                  <span className="ml-1 text-xs mystical-text font-bold text-sirens-pearl hidden sm:inline">
                    {product.rating}
                  </span>
                </div>
                
                {/* Console Icon - Hidden on very small screens */}
                <div className="hidden sm:flex items-center gap-1">
                  <Monitor className="w-2 h-2 md:w-3 md:h-3 text-sirens-teal" />
                  <span className="mystical-text text-xs text-sirens-pearl hidden md:inline">Switch</span>
                </div>
              </div>

              {/* Price Display - Responsive size */}
              <div className="text-center py-1 md:py-2 flex-shrink-0">
                <span className={`fantasy-font text-lg sm:text-xl md:text-2xl text-sirens-gold 
                               ${isHovered ? 'mystical-glow' : 'mystical-glow'}`}>
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart Button - Responsive sizing */}
              <button
                id={`add-to-cart-${product.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                disabled={!product.inStock}
                className={`w-full py-1.5 md:py-2 px-1 md:px-2 rounded-full comic-border transition-all duration-300 
                           transform hover:scale-105 comic-button relative overflow-hidden
                           flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm flex-shrink-0
                           ${product.inStock 
                             ? 'enchanted-button text-sirens-navy treasure-shadow' 
                             : 'bg-sirens-deep text-sirens-pearl cursor-not-allowed'}
                           ${isHovered ? 'underwater-float' : ''}`}
              >
                <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="mystical-text font-bold whitespace-nowrap hidden sm:inline">
                  ADD TO CART
                </span>
                <span className="mystical-text font-bold whitespace-nowrap sm:hidden">
                  ADD
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Back of Card - Responsive content */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180
                        mystical-bg p-0.5 md:p-1 rounded-lg md:rounded-2xl
                        border-2 md:border-4 border-sirens-teal shadow-lg md:shadow-2xl`}>
          
          <div className="w-full h-full mystical-bg rounded-md md:rounded-xl p-2 md:p-4 overflow-y-auto backdrop-blur-sm">
            <div className="space-y-2 md:space-y-3">
              {/* Back Header */}
              <div className="text-center border-b border-sirens-teal pb-2 md:pb-3">
                <h3 className="fantasy-font text-sm md:text-lg text-sirens-gold mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2 md:gap-3 text-xs">
                  <span className="mystical-text text-sirens-pearl">
                    {new Date(product.releaseDate).getFullYear()}
                  </span>
                  <span className="mystical-text text-sirens-pearl">Gen {product.generation}</span>
                </div>
              </div>

              {/* Description - Truncated on mobile */}
              <div>
                <h4 className="mystical-text font-bold text-sirens-pearl mb-1 text-xs md:text-sm">Description:</h4>
                <p className="elegant-text text-sirens-pearl text-xs leading-relaxed line-clamp-2 md:line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Features - Fewer on mobile */}
              <div>
                <h4 className="mystical-text font-bold text-sirens-pearl mb-1 text-xs md:text-sm">Features:</h4>
                <div className="space-y-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div
                      key={feature}
                      className={`mystical-bg text-sirens-pearl px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg 
                               text-xs mystical-text transition-all duration-300
                               delay-${index * 100} hover:bg-sirens-teal hover:text-sirens-navy treasure-shimmer`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Click to flip back */}
              <div className="text-center pt-1 md:pt-2 border-t border-sirens-deep">
                <p className="mystical-text text-xs text-sirens-pearl">
                  Tap to flip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;