// src/products.js
import imageMap from './imageMap';


const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: "Babyhug 100% Cotton Knit Half Sleeves Cut & Sew Polo T-Shirt With Text Graphics - White & Orange",
    brand: ["Minicult", "Googo Gaaga", "BE AWARA", "KUCHIPOO"][i % 4],
    price: Math.floor(Math.random() * 500) + 199,
    oldPrice: Math.floor(Math.random() * 500) + 700,
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: imageMap[i + 1],
    reviews: Math.floor(Math.random() * 300) + 1,
  }));

  
  
  export default products;