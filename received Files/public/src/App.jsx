// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Register from './Ragister'
import Home from './Home'
import "./App.css"
import Navbar from './Navbar'
import PrivateComponent from './PrivateComponent'
import ProductDetails from './Components.jsx/ProductDetails'
// import Register from './Ragister'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/productDetails' element={<ProductDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
