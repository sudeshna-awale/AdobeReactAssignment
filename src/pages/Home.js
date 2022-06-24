import React from 'react';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import Navbar from '../components/navbar/Navbar';
import ProductBar from '../components/product-bar/ProductBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ProductBar />
      <Footer/>
    </>
  )
}

export default Home