import React, { useState, useEffect } from 'react';
import { ShoppingCart, Anchor, Waves, Fish, Crown } from 'lucide-react';
import { Product } from './types';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import SearchFilters from './components/SearchFilters';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import InfoPage from './components/InfoPage';
import ShopifyIntegration from './components/ShopifyIntegration';

function App() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    isOpen: isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    setIsOpen: setCartOpen
  } = useCart();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Filter products based on search and filters
  const handleSearch = (search: string) => {
    setSearchTerm(search);
    filterProducts(search, {});
  };

  const handleFiltersChange = (filters: any) => {
    filterProducts(searchTerm, filters);
  };

  const filterProducts = (search: string, filters: any) => {
    let filtered = products;

    // Search filter
    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.features.some(feature => 
          feature.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // Price category filter
    if (filters.priceCategories && filters.priceCategories.length > 0) {
      filtered = filtered.filter(product =>
        filters.priceCategories.includes(product.priceCategory)
      );
    }

    // Generation filter
    if (filters.generation && filters.generation.length > 0) {
      filtered = filtered.filter(product =>
        filters.generation.includes(product.generation)
      );
    }

    // Category filter
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.includes(product.category)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showAddToCartNotification(product.name);
  };

  const showAddToCartNotification = (productName: string) => {
    setNotificationMessage(`${productName} added to treasure chest!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Listen for checkout events
  useEffect(() => {
    const handleCheckoutSuccess = (event: CustomEvent) => {
      const { provider, amount } = event.detail;
      setNotificationMessage(`Payment of $${amount} successful via ${provider}!`);
      setShowNotification(true);
      clearCart();
      setCartOpen(false);
      setTimeout(() => setShowNotification(false), 5000);
    };

    const handleCheckoutError = (event: CustomEvent) => {
      const { provider, error } = event.detail;
      setNotificationMessage(`Payment failed: ${error}`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    };

    window.addEventListener('checkoutSuccess', handleCheckoutSuccess as EventListener);
    window.addEventListener('checkoutError', handleCheckoutError as EventListener);

    return () => {
      window.removeEventListener('checkoutSuccess', handleCheckoutSuccess as EventListener);
      window.removeEventListener('checkoutError', handleCheckoutError as EventListener);
    };
  }, [clearCart, setCartOpen]);

  if (currentPage !== 'home') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <img 
            src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
            alt="Sirens Fortune Background"
            className="w-full h-full object-cover deep-sea-drift"
          />
          
          {/* Swimming Fish */}
          <div className="fish">🐠</div>
          <div className="fish">🐟</div>
          <div className="fish">🦈</div>
          <div className="fish">🐙</div>
          
          {/* Floating Bubbles */}
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          
          {/* Mystical Particles */}
          <div className="absolute top-1/4 left-1/4 text-2xl magical-particles">🫧</div>
          <div className="absolute top-1/3 right-1/3 text-xl magical-particles">⭐</div>
          <div className="absolute bottom-1/4 left-1/3 text-lg magical-particles">🌊</div>
          <div className="absolute top-2/3 right-1/4 text-xl magical-particles">💎</div>
          <div className="absolute bottom-1/3 right-1/2 text-lg magical-particles">🐚</div>
          <div className="absolute top-1/2 left-1/6 text-2xl magical-particles">🧜‍♀️</div>
        </div>

        <InfoPage page={currentPage} onBackToHome={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
          alt="Sirens Fortune Background"
          className="w-full h-full object-cover deep-sea-drift"
        />
        
        {/* Swimming Fish */}
        <div className="fish">🐠</div>
        <div className="fish">🐟</div>
        <div className="fish">🦈</div>
        <div className="fish">🐙</div>
        
        {/* Floating Bubbles */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        
        {/* Mystical Particles */}
        <div className="absolute top-1/4 left-1/4 text-2xl magical-particles">🫧</div>
        <div className="absolute top-1/3 right-1/3 text-xl magical-particles">⭐</div>
        <div className="absolute bottom-1/4 left-1/3 text-lg magical-particles">🌊</div>
        <div className="absolute top-2/3 right-1/4 text-xl magical-particles">💎</div>
        <div className="absolute bottom-1/3 right-1/2 text-lg magical-particles">🐚</div>
        <div className="absolute top-1/2 left-1/6 text-2xl magical-particles">🧜‍♀️</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header 
          cartItemCount={totalItems}
          onCartToggle={toggleCart}
          onPageChange={handlePageChange}
        />
        
        <Hero />
        
        <FeaturedCarousel onAddToCart={handleAddToCart} />
        
        <main className="container mx-auto px-4 py-8">
          <SearchFilters 
            onSearchChange={handleSearch}
            onFiltersChange={handleFiltersChange}
          />
          
          <ProductGrid
            products={filteredProducts}
            title="Mystical Aquatic Adventures"
            onAddToCart={handleAddToCart}
          />
          
          {/* Shopify Integration Section */}
          <section className="mt-12">
            <div className="text-center mb-8">
              <h2 className="fantasy-font text-3xl md:text-4xl text-sirens-gold mb-4">
                Payment Integration
              </h2>
              <div className="w-24 h-1 bg-sirens-teal mx-auto rounded-full mystical-glow"></div>
            </div>
            <ShopifyIntegration />
          </section>
        </main>
        
        <Footer onPageChange={handlePageChange} />
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 enchanted-entrance">
          <div className="mystical-bg p-4 rounded-2xl underwater-border treasure-shadow">
            <div className="flex items-center gap-3">
              <img 
                src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg" 
                alt="Sirens Fortune"
                className="w-8 h-8 rounded-full"
              />
              <p className="mystical-text text-sirens-pearl font-bold">
                {notificationMessage}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;