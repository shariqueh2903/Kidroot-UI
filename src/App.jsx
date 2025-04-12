import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ShopByAge from './components/ShopByAge'; 
import ToyAppeal from './components/ToyAppeal';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CategorySection />
      <ShopByAge />
      <ToyAppeal />
    </div>
  );
}

export default App;
