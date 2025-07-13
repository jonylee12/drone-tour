// src/components/GalleryModal.jsx
import React, { useState } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={images[index]} alt={`Gallery ${index}`} className="gallery-image" />
        {images.length > 1 && (
          <>
            <button className="nav left" onClick={prev}>←</button>
            <button className="nav right" onClick={next}>→</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
