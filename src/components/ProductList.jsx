import React from "react";
import "./ProductList.css";
import ProductItem from './ProductItem.jsx';
import PriceSummary from './PriceSummary.jsx';
import Offers from './Offers.jsx';
import shirtImage from '../assets/images/kidWhiteShirt.jpg';
import jeansImage from '../assets/images/kidBlackJeans.jpg';
import blackShirtImage from '../assets/images/blackshirt.jpg';


const ProductList = () => {
    const products = [
        {
            id: 1,
            brand: "HEREASON",
            name: "Boy Opaque Casual Shirt",
            price: 735,
            originalPrice: 2299,
            discount: 68,
            size: "40",
            qty: 1,
            deliveryDate: "7 Apr 2025",
            seller: "10th hour",
            returnPolicy: "14 days return available",
            image: shirtImage
        },

        {
            id: 2,
            brand: "HEREASON",
            name: "Boy Loose Relaxed Fit Pure Cotton Cargo Jeans",
            price: 1499,
            originalPrice: 2299,
            discount: 35,
            size: "30",
            qty: 1,
            deliveryDate: "12 Apr 2025",
            seller: "16th OPT GLOBAL",
            image: jeansImage,
            returnPolicy: "14 days return available",
        },

        {
            id: 3,
            brand: "WROOM",
            name: "Skin Fit Boy Casual Shirt",
            price: 748,
            originalPrice: 2299,
            discount: 53,
            size: "40",
            qty: 1,
            returnPolicy: "14 days return available",
            deliveryDate: "10 Apr 2025",
            seller: "Transact Commerce",
            image: blackShirtImage
        }
    ];

    return(
        <>
        <div className="product-list-container">
            <Offers />
            
            <div className="selected-count">
                9/9 ITEMS SELECTED
            </div>
            
            <div className="products-section">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            
            <PriceSummary total={50470} discount={14901} />

        </div>
        </>
    )

}

export default ProductList;