import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">❌🛒 Your shopping cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>€{item.price}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id || index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: €{total}</h2>
            <button className="checkout-button">Complete Your Order</button>
            <button className="clear-button" onClick={clearCart}>
              all Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
