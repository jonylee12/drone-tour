import React from 'react';
import './ProductCard.css'; // asigură-te că ai acest fișier creat

const ProductCard = ({ title, image, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">€{price}</p>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        Adaugă în coș
      </button>
    </div>
  );
};

export default ProductCard;
