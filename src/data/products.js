// data/products.js

const products = Array.from({ length: 30 }).map((_, index) => ({
    id: index + 1,
    name: `Cute T-Shirt #${index + 1}`,
    brand: "KidsFun",
    image: `https://via.placeholder.com/250x250?text=Kid+Tee+${index + 1}`,
    price: 499 + (index % 5) * 50,
    oldPrice: 999,
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 1000),
    discount: Math.floor(Math.random() * 50 + 20),
  }));
  
  export default products;
  