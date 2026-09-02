import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '');

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <Logo size={40} />
        <div className="navbar-brand-text">
          <span className="navbar-brand-name">Paradise Nursery</span>
          <span className="navbar-brand-tagline">Where Green Meets Serenity</span>
        </div>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/products" className={linkClass}>Plants</NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            'nav-link cart-link' + (isActive ? ' nav-link-active' : '')
          }
        >
          <span className="cart-icon" aria-hidden="true">🛒</span>
          Cart
          <span className="cart-count">{totalQuantity}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
