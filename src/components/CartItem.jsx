import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2);
  };

  const calculateItemSubtotal = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        <h3 className="cart-total">Total Amount: ${calculateTotalAmount()}</h3>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty. Head back to the plant shop to find your next
            favorite houseplant!
          </p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Unit Price: ${item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name} quantity`}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </div>
                  <p className="item-subtotal">Subtotal: ${calculateItemSubtotal(item)}</p>
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>

      {showCheckoutModal && (
        <div className="checkout-modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="checkout-modal-icon">🌱</div>
            <h3>Checkout is on its way!</h3>
            <p>
              We're busy potting the final details of online checkout. Thanks
              for your patience — soon you'll be able to bring these plants
              home with just a click.
            </p>
            <button
              className="checkout-modal-close"
              onClick={() => setShowCheckoutModal(false)}
            >
              Back to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
