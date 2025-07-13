import React, { useContext } from 'react';
import './Home.css';
import { CartContext } from '../context/CartContext';
import PromoCarousel from '../components/PromoCarousel';

const promoProducts = [
  
  {
    id: 2,
    name: "Zenmuse H30 Worry Free Basic Combo",
    price: 3800,
    image: "/drone-tour/product/Homepage/Zenmuse_H30_Worry_Free_Basic_Combo/main.jpg"
  },
  {
    id: 3,
    name: "Matrice 300 Series Dual Gimbal Connector",
    price: 210,
    image: "/drone-tour/product/Homepage/Matrice_300_Series_Dual_Gimbal_Connector/main.jpg"
  },
  {
    id: 4,
    name: "Hasselblad X2D 100C Mirrorless Digital Camera",
    price: 7369,
    image: "/drone-tour/product/Homepage/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main.jpg"
  },
  {
    id: 5,
    name: "Hasselblad 907X Optical Viewfinder",
    price: 459,
    image: "/drone-tour/product/Homepage/Hasselblad_907X_Optical_Viewfinder/main.jpg"
  },
  {
    id: 6,
    name: "DJI Zenmuse L2 Worry-Free Basic Combo",
    price: 11341,
    image: "/drone-tour/product/Homepage/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main.jpg"
  },
  {
    id: 7,
    name: "DJI TransmissionCombo Standard Combo",
    price: 1997,
    image: "/drone-tour/product/Homepage/DJI_TransmissionCombo_Standard_Combo/main.jpg"
  },
  {
    id: 8,
    name: "DJI RS 4 Pro Combo Handheld Gimbal Stabiliser",
    price: 950,
    image: "/drone-tour/product/Homepage/DJI_RS_4_Pro_Combo_Handheld_Gimbal_Stabiliser/main.jpg"
  },
  {
    id: 9,
    name: "DJI Ronin 4D 4 Axis Cinema Camera 8K Combo",
    price: 8650,
    image: "/drone-tour/product/Homepage/DJI_Ronin_4D_4_Axis_Cinema_Camera_8K_Combo/main.jpg"
  }
];

const testimonials = [
  {
    name: "Alex Carter",
    quote: "Fantastic drone! Easy to fly and the camera is outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Maria Lopez",
    quote: "Great customer service and fast delivery. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Jonas Müller",
    quote: "The accessories are premium quality. Worth every euro!",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="home-wrapper">
      <div className="home-page">
        <div className="hero">
          <h1>Easy Flight</h1>
          <p>Discover the best drones for your journey</p>
        </div>

        <PromoCarousel />

        <h2 className="section-title promo-highlight">
          <span className="spark">⚡</span> Limited Time Promo Accessories <span className="spark">⚡</span>
        </h2>

        <div className="promo-section">
          {promoProducts.map((product, index) => (
            <div className="promo-card" key={index}>
              <img src={product.image} alt={product.name} className="promo-img" />
              <div className="promo-overlay">
                <h3>{product.name}</h3>
                <p className="price">€{product.price}</p>
                <button className="buy-btn" onClick={() => handleAddToCart(product)}>
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials">
            {testimonials.map((review, index) => (
              <div key={index} className="testimonial-card">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <blockquote>"{review.quote}"</blockquote>
                <p className="author">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

