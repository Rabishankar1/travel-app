import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/carousel/ImgCarousel';
import './index.css'
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div className='myClass'>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  )
}

export default App;