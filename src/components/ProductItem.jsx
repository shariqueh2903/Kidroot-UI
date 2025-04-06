import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
        <div className="product-image-container">
            <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = '/images/placeholder.jpg'; // Fallback image
                }}
            />
            {product.discount > 50 && (
                <div className="discount-badge">{product.discount}% OFF</div>
            )}
        </div>

        <div className="product-details">
            <div className="product-header">
                <span className="product-brand">{product.brand}</span>
                <span className="product-seller">Sold by: {product.seller}</span>
            </div>
            
            <h3 className="product-name">{product.name}</h3>
            <p className="product-seller">Sold by: {product.seller}</p>
            
            <div className="product-details">
                <span>Size: {product.size} - Qty: 1 - </span>
            </div>
        
            <div className="product-pricing">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">{product.discount}% OFF</span>
            </div>
        
            <div className="product-delivery">
                <span className="return-policy">✓ {product.returnPolicy}</span>
                <span className="delivery-date">✓ Delivery by <strong>{product.deliveryDate}</strong></span>
            </div>
        </div>
    </div>
  );
};

export default ProductItem;