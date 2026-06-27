import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Features from './components/Features';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <About />
      <WhatsAppButton />
    </div>
  );
}

export default Home;