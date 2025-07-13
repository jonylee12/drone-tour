import React, { useEffect, useState } from "react";
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <h2>My Orders</h2>
        <p>👉 You have no orders placed</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.map((order, index) => {
        const total = order.items.reduce((sum, item) => sum + item.price, 0);
        return (
          <div key={index} className="order-card">
            <h4>Orders #{index + 1} – {order.date}</h4>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <ul className="order-items">
              {order.items.map((item, idx) => (
                <li key={idx}>{item.name} – <strong>€{item.price}</strong></li>
              ))}
            </ul>
            <p className="order-total"><strong>Total Orders:</strong> €{total}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
