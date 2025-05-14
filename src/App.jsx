import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'
import ApparelTryon from './pages/apparel-tryon'
import MakeupTryon from './pages/makeup-tryon'
import WatchTryon from './pages/watch-tryon'
import ShoeTryon from './pages/shoe-tryon'
import VirtualAssistant from './pages/virtual-assistant';
import ThreeD from './pages/three-d';
import MobileUI from './pages/mobile-ui';
import AOS from 'aos'
import "aos/dist/aos.css";
import './App.css'


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <Router>
        <Routes>
			    <Route exact path="/" element={<Home/>} />
			    <Route exact path="/about-us" element={<About/>} />
			    <Route exact path="/contact-us" element={<Contact/>} />
			    <Route exact path="/products" element={<Products/>} />
			    <Route exact path="/product/vtryon/apparel" element={<ApparelTryon/>} />
          <Route exact path="/product/vtryon/makeup" element={<MakeupTryon/>} />
          <Route exact path="/product/vtryon/watch" element={<WatchTryon/>} />
          <Route exact path="/product/vtryon/shoe" element={<ShoeTryon/>} />
          <Route exact path="/product/vtryon/shoe" element={<ShoeTryon/>} />
          <Route exact path="/product/three-d" element={<ThreeD/>} />
          <Route exact path="/product/virtual-assistant" element={<VirtualAssistant/>} />
          <Route exact path="/product/mobile-ui" element={<MobileUI/>} />
        </Routes>
	</Router>
  )
}

export default App
