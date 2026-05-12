import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      
      <div className="background-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-section">
        <h1 className="hero-title">
          Welcome to <span>ShopSphere</span>
        </h1>

        <p className="hero-description">
          Discover trending products, amazing deals, and a seamless
          shopping experience — all in one place.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn" onClick={() => navigate('/shop')}>Shop Now</button>
          <button className="explore-btn" onClick={() => navigate('/shop')}>Explore</button>
        </div>
      </div>

    </div>
  )
}

export default LandingPage