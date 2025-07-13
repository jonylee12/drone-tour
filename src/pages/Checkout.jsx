// src/pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      ...formData,
      items: cartItems,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();
    navigate("/orders");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>🚚 Place Order</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h3>{item.name}</h3>
                  <p>€{item.price}</p>
                </div>
              </div>
            ))}
            <h3 className="checkout-total">Total: €{total}</h3>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              name="name"
              placeholder="Nume"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              name="address"
              placeholder="Adresă"
              onChange={handleChange}
              value={formData.address}
              required
            />
            <button type="submit">Submit Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
