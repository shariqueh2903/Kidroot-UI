import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ShopByAge from './components/ShopByAge';
import ToyAppeal from './components/ToyAppeal';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HeroSection />
      <CategorySection />
      <ShopByAge />
      <ToyAppeal />
    </div>
  );
}

export default App;
