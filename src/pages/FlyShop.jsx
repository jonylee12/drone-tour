import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import './FlyShop.css';
import FlyshopCarousel from '../components/FlyshopCarousel';
import GalleryModal from "../components/GalleryModal";

const products = [
  {
    id: 1,
    name: "Zenmuse H30T Worry Free Basic Combo",
    price: 10200,
    image: "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main.jpg",
    gallery: [
      "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main.jpg",
      "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main1.jpg",
      "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main2.jpg",
      "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main3.jpg",
      "/drone-tour/product/Zenmuse_H30T_Worry_Free_Basic_Combo/main4.jpg"
    ],
    description: "High-performance drone with multispectral camera for industrial use."
  },
  {
    id: 2,
    name: "Zenmuse H30 Worry Free Basic Combo",
    price: 3800,
    image: "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main.jpg",
    gallery: [
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main.jpg",
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main1.jpg",
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main2.jpg",
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main3.jpg",
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main4.jpg",
      "/drone-tour/product/Zenmuse_H30_Worry_Free_Basic_Combo/main5.jpg"
    ],
    description: "Compact and efficient drone system for aerial photography."
  },
  {
    id: 3,
    name: "TB51 Intelligent Battery Hub",
    price: 790,
    image: "/drone-tour/product/TB51_Intelligent_Battery_Hub/main.jpg",
    gallery: [
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main.jpg",
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main1.jpg",
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main2.jpg",
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main3.jpg",
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main4.jpg",
      "/drone-tour/product/TB51_Intelligent_Battery_Hub/main5.jpg"
    ],
    description: "Smart charging hub for multiple drone batteries."
  },
  {
    id: 4,
    name: "Matrice 300 Series Dual Gimbal Connector",
    price: 210,
    image: "/drone-tour/product/Matrice_300_Series_Dual_Gimbal_Connector/main.jpg",
    gallery: [
      "/drone-tour/product/Matrice_300_Series_Dual_Gimbal_Connector/main.jpg",
      "/drone-tour/product/Matrice_300_Series_Dual_Gimbal_Connector/main1.jpg",
      "/drone-tour/product/Matrice_300_Series_Dual_Gimbal_Connector/main2.jpg"
    ],
    description: "Accessory for dual camera operation on Matrice 300."
  },
  {
    id: 5,
    name: "Hasselblad X2D 100C Mirrorless Digital Camera",
    price: 7369,
    image: "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main.jpg",
    gallery: [
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main.jpg",
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main1.jpg",
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main2.jpg",
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main3.jpg",
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main4.jpg",
      "/drone-tour/product/Hasselblad_X2D_100C_Mirrorless_Digital_Camera/main5.jpg"
    ],
    description: "Professional-grade camera with high-resolution imaging."
  },
  {
    id: 6,
    name: "Hasselblad 907X Optical Viewfinder",
    price: 459,
    image: "/drone-tour/product/Hasselblad_907X_Optical_Viewfinder/main.jpg",
    gallery: [
      "/drone-tour/product/Hasselblad_907X_Optical_Viewfinder/main.jpg",
      "/drone-tour/product/Hasselblad_907X_Optical_Viewfinder/main1.jpg",
      "/drone-tour/product/Hasselblad_907X_Optical_Viewfinder/main2.jpg",
      "/drone-tour/product/Hasselblad_907X_Optical_Viewfinder/main3.jpg"
    ],
    description: "Precision viewfinder for Hasselblad cameras."
  },
  {
    id: 7,
    name: "DJI Zenmuse L2 Worry-Free Basic Combo",
    price: 11341,
    image: "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main.jpg",
    gallery: [
      "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main.jpg",
      "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main1.jpg",
      "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main2.jpg",
      "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main3.jpg",
      "/drone-tour/product/DJI_Zenmuse_L2_Worry-Free_Basic_Combo/main4.jpg"
    ],
    description: "Advanced LiDAR solution for terrain mapping."
  },
  {
    id: 8,
    name: "DJI TransmissionCombo Standard Combo",
    price: 1997,
    image: "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main.jpg",
    gallery: [
      "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main.jpg",
      "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main1.jpg",
      "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main2.jpg",
      "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main3.jpg",
      "/drone-tour/product/DJI_TransmissionCombo_Standard_Combo/main4.jpg"
    ],
    description: "Wireless video transmission system for professional filming."
  }
];

function FlyShop() {
  const [message, setMessage] = useState("");
  const [selectedGallery, setSelectedGallery] = useState(null);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`✔️ ${product.name} a fost adăugat în coș!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flyshop-wrapper">
      <div className="flyshop-header">
        <h1 className="flyshop-title">Next-Gen Drone Technology</h1>
        <p className="flyshop-subtitle">Explore innovation, precision, and power with DroneTour.</p>

        {/* 🔁 Înlocuit caruselul static cu cel din componentă */}
        <FlyshopCarousel />
      </div>

      {message && <div className="flyshop-toast">{message}</div>}

      <h2 className="section-title">Drone Store</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => setSelectedGallery(product.gallery)}
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">€{product.price.toLocaleString()}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Pay Now
            </button>
          </div>
        ))}
      </div>

      {selectedGallery && (
        <GalleryModal
          images={selectedGallery}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </div>
  );
}

export default FlyShop;
