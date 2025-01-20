import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '../screens/Index/Index'
import Services from '../screens/Services/Services'
import Products from '../screens/Products/Products'
import Repair from '../screens/Repair/Repair'
import FAQ from '../screens/FAQ/FAQ'
import Product from '../screens/Product/Product'
import NotFound from '../screens/NotFound/NotFound'

export default function RouterPage () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/productos/:category/:id' element={<Product />} />
        <Route path='/reparacion' element={<Repair />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
