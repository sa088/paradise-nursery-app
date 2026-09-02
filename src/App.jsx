import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Logo from "./components/Logo";
import AboutUs from "./components/AboutUs";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-left">
        <div className="landing-left-overlay">
          <Logo size={56} />
          <h1 className="company-name">
            Welcome To
            <br />
            Paradise Nursery
          </h1>
          <div className="tagline-divider" />
          <p className="tagline">Where Green Meets Serenity</p>
          <button
            className="get-started-btn"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="landing-right">
        <AboutUs inline />
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/paradise-nursery-app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
