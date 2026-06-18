import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  // State variable to control which page is displayed
  // Possible values: 'landing' | 'products' | 'cart'
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Navigate to product list — sets showProductList to true
  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleNavigateToCart = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleNavigateToLanding = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  // Show Cart page
  if (showCart) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <span
            className="navbar-brand"
            onClick={handleNavigateToLanding}
            style={{ cursor: 'pointer' }}
          >
            🌿 Paradise Nursery
          </span>
          <div className="navbar-links">
            <a onClick={handleNavigateToLanding} style={{ cursor: 'pointer' }}>Home</a>
            <a onClick={handleContinueShopping} style={{ cursor: 'pointer' }}>Plants</a>
            <button
              className="cart-icon-wrapper"
              onClick={handleNavigateToCart}
              aria-label="View cart"
            >
              🛒
            </button>
          </div>
        </nav>
        <CartItem onContinueShopping={handleContinueShopping} />
      </div>
    );
  }

  // Show Product List page — triggered when showProductList is true
  if (showProductList) {
    return (
      <div className="products-page">
        <ProductList
          onNavigateToCart={handleNavigateToCart}
          onNavigateToLanding={handleNavigateToLanding}
        />
      </div>
    );
  }

  // Default: Landing Page
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p className="tagline">
          Bring nature indoors. Discover hand-picked houseplants that transform
          any space into your own green paradise.
        </p>
        {/* onClick sets showProductList state to true */}
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
