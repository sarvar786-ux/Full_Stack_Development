import React, { useContext, useState } from 'react'
import './CheckOut.css'
import ProductContext from '../contexts/ProductContext'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {

    const navigate = useNavigate()

    const {
        products,
        cartitems
    } = useContext(ProductContext)

    const [promocode, setPromocode] = useState("")
    const [discount, setDiscount] = useState(0)

    function calculateTotal() {

        return products.reduce((total, prod) => {

            const quantity =
                cartitems[prod.id] || 0

            return total +
                (prod.price * quantity)

        }, 0)
    }

    const carttotal = calculateTotal()

    const shippingFee = carttotal * 0.05

    const totalPayable =
        carttotal + shippingFee - discount

    function proceedToPayment() {
        navigate("/payment")
    }

    function handlePromoOnChange(event) {
        setPromocode(event.target.value)
    }

    function applyPromoCode() {

        if (promocode === "EXL10") {

            const promoDiscount =
                carttotal * 0.10

            setDiscount(promoDiscount)

        } else {

            alert(`${promocode} is Invalid Code`)
        }
    }

    return (

        <div className="checkout-page">

            <div className="checkout-card">

                <h1 className="checkout-title">
                    Cart Summary
                </h1>

                {/* CART TOTAL */}

                <div className="summary-row">

                    <p>Cart Total Amount</p>

                    <span>
                        ₹ {(carttotal - discount).toFixed(2)}
                    </span>

                </div>

                {/* SHIPPING */}

                <div className="summary-row">

                    <p>Shipping Fee</p>

                    <span>
                        ₹ {shippingFee.toFixed(2)}
                    </span>

                </div>

                {/* TOTAL */}

                <div className="summary-row total-row">

                    <p>Total Payable</p>

                    <span className="total-amount">
                        ₹ {totalPayable.toFixed(2)}
                    </span>

                </div>

                {/* PROMO */}

                <div className="promo-section">

                    <p>
                        Do you have any coupon?
                    </p>

                    <div className="promo-box">

                        <input
                            type="text"
                            placeholder="Promo Code"
                            value={promocode}
                            onChange={handlePromoOnChange}
                        />

                        <button
                            onClick={applyPromoCode}
                        >
                            Apply
                        </button>

                    </div>

                </div>

                {/* PAYMENT BUTTON */}

                <button
                    className="payment-btn"
                    onClick={proceedToPayment}
                >
                    Proceed To Payment
                </button>

            </div>

        </div>
    )
}

export default CheckOut