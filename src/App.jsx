import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from '../public/landing_page/home/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import PricingPage from '../public/landing_page/pricing/PricingPage'
import AboutPage from '../public/landing_page/about/AboutPage'
import SupportPage from '../public/landing_page/support/SupportPage'
import ProductsPage from '../public/landing_page/products/ProductPage'
import Navbar from '../public/landing_page/home/Navbar'
import Footer from '../public/landing_page/home/Footer'
import Signup from '../public/landing_page/signup/Signup'
import NotFound from "../public/landing_page/NotFound"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Products" element={<ProductsPage />}/>
        <Route path="/Pricing" element={<PricingPage />}/>
        <Route path="/Support" element={<SupportPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
