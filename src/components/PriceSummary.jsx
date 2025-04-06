import React from 'react';

const PriceSummary = ({ total, discount }) => {
  return (
    <div className="price-summary">
      <h3>PRICE DETAILS (9 Items)</h3>
      
      <div className="price-row">
        <span>Total MRP</span>
        <span>₹25,461</span>
      </div>
      
      <div className="price-row">
        <span>Discount on MRP</span>
        <span>-₹{discount}</span>
      </div>
      
      <div className="price-row">
        <span>Coupon Discount</span>
        <span className="apply-link">Apply Coupons</span>
      </div>
      
      <div className="price-row">
        <span>Platform Fee</span>
        <span>Know More</span>
      </div>
      
      <div className="price-row">
        <span>Shipping Fee</span>
        <span>Know More</span>
      </div>
      
      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
};

export default PriceSummary;