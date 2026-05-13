import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import NavBar1 from './components/NavBar1'
import Loader from './components/Loader'
import LandingPage from './pages/LandingPage'
import AllProductsPage2 from './pages/AllProductsPage2'
import RictTextBox2 from './pages/RictTextBox2'
import SingleProduct2 from './pages/SingleProduct2'
import ShoppingCart from './pages/ShoppingCart'
const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  // LOADER
  if (loading) {
    return <Loader />
  }

  return (

    <Router>

      <NavBar1 />

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/shop"
          element={<AllProductsPage2 />}
        />

        <Route
          path="/rich"
          element={<RictTextBox2 />}
        />

        <Route
          path="/single/:prodid"
          element={<SingleProduct2 />}
        />

        <Route
          path="/cart"
          element={<ShoppingCart />}
        />

      </Routes>

    </Router>
  )
}

export default App