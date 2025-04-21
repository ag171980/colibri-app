import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '../screens/Index/Index'
import Services from '../screens/Services/Services'
import Products from '../screens/Products/Products'
import Repair from '../screens/Repair/Repair'
import FAQ from '../screens/FAQ/FAQ'
import Checkout from '../screens/Checkout/Checkout'
import Transferences from "../screens/Checkout/methods/Transferences/Transferences"
import Product from '../screens/Product/Product'
import Login from '../screens/Login/Login'
import NotFound from '../screens/NotFound/NotFound'
import HomeAdmin from '../screens/HomeAdmin/HomeAdmin'
import CategoriesAdmin from '../screens/CategoriesAdmin/CategoriesAdmin'

// Payments State
import Approved from "../screens/States/Approved/Approved"
import Pending from "../screens/States/Pending/Pending"
import Refused from "../screens/States/Refused/Refused"
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
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/transferencia' element={<Transferences />} />
        <Route path='/admin' element={<Login />} />
        <Route path='/admin/home' element={<HomeAdmin />} />
        <Route path='/admin/categorias' element={<CategoriesAdmin />} />

        <Route path='/pago/aprobado' element={<Approved />} />
        <Route path='/pago/pendiente' element={<Pending />} />
        <Route path='/pago/rechazado' element={<Refused />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
