import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsArray } from './plantsData';
import Navbar from './Navbar';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: plant.image,
        cost: plant.cost,
      })
    );
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Navbar />

      <div className="product-list-container">
        {plantsArray.map((category) => (
          <div key={category.category} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <span className="sale-badge">SALE</span>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
