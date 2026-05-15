import React from 'react'
import './OrderConfirmation.css'

const OrderConfirmation = () => {
  return (
    <div className="success-container">

      <div className="circle">
        <div className="checkmark">✓</div>
      </div>

      <h1>Order Confirmed!</h1>

      <p>Your order has been placed successfully.</p>

    </div>
  )
}

export default OrderConfirmation
