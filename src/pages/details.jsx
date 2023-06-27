import React from 'react';
import ReactDOM from 'react-dom';
import './ProductDetailsModal.css'; 

const ProductDetailsModal = ({ product, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="close-button" onClick={onClose}>
          Close
        </div>
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </>,
    document.body 
  );
};

export default ProductDetailsModal;
