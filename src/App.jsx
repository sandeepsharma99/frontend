import React from 'react'
import HomePage from './landing_page/home/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './landing_page/signup/signup'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import ProductPage from './landing_page/product/ProductPage'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
