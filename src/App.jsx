import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'
import ApparelTryon from './pages/apparel-tryon'
import MakeupTryon from './pages/makeup-tryon'
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
			    <Route exact path="/product/try-on-apparel" element={<ApparelTryon/>} />
                <Route exact path="/product/try-on-makeup" element={<MakeupTryon/>} />
        </Routes>
	</Router>
  )
}

export default App
