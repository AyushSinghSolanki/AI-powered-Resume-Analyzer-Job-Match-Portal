import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Number from '../components/Number';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="bg-white" id="page">
      <Navbar />
      <Hero />
      <Number/>
      <Footer/>
    </div>
  );
}

export default Home
