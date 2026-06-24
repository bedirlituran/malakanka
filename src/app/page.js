import React from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;