import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
import "./Product.css"

const Product = ({ product }) => {

    const { addToCart, cartitems } = useContext(ProductContext)

    console.log(cartitems)

    const handleAddToCart = (e) => {

        // Current product image
        const productCard =
            e.currentTarget.closest('.product-card')

        const img =
            productCard.querySelector('.product-img')

        // Cart icon
        const cart =
            document.getElementById('cart-icon')

        // Fallback
        if (!img || !cart) {
            addToCart(product.id)
            return
        }

        // Clone image
        const imgClone = img.cloneNode(true)

        const imgRect = img.getBoundingClientRect()
        const cartRect = cart.getBoundingClientRect()

        imgClone.style.position = 'fixed'
        imgClone.style.left = `${imgRect.left}px`
        imgClone.style.top = `${imgRect.top}px`
        imgClone.style.width = `${imgRect.width}px`
        imgClone.style.height = `${imgRect.height}px`
        imgClone.style.objectFit = 'contain'
        imgClone.style.zIndex = '9999'
        imgClone.style.transition =
            "all 1.4s cubic-bezier(0.19, 1, 0.22, 1)"
        imgClone.style.borderRadius = '20px'
        imgClone.style.pointerEvents = 'none'
        imgClone.style.boxShadow =
        "0 20px 40px rgba(0,0,0,0.25)"

        imgClone.style.borderRadius = "20px"
        document.body.appendChild(imgClone)

        // Animation start
        requestAnimationFrame(() => {

            imgClone.style.left =
                `${cartRect.left + 10}px`

            imgClone.style.top =
                `${cartRect.top + 10}px`

            imgClone.style.width = '20px'
            imgClone.style.height = '20px'

            imgClone.style.opacity = '0.4'

            imgClone.style.transform =
                "scale(0.2) rotate(18deg)"

                imgClone.style.filter =
                "blur(2px)"
        })

        // Remove clone + bounce cart
        setTimeout(() => {

            document.body.removeChild(imgClone)

            cart.classList.add('cart-bounce')

            setTimeout(() => {
                cart.classList.remove('cart-bounce')
            }, 500)

            addToCart(product.id)

        }, 900)
    }

    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <div className="card h-100 shadow-sm border-0 product-card">

                <Link to={`/single/${product.id}`}>

                    <div className="image-wrapper">

                        <img
                            src={product.image}
                            className="card-img-top product-img"
                            alt={product.title}
                        />

                    </div>

                </Link>

                <div className="card-body d-flex flex-column">

                    <h6 className="card-title fw-bold text-truncate">
                        {product.title}
                    </h6>

                    <p className="text-muted small mb-1">
                        {product.category}
                    </p>

                    <p className="card-text small flex-grow-1">
                        {product.description.substring(0, 60)}...
                    </p>
                    <h4 className="price">
                    ${product.price}
                    </h4>
                    <button
                        className="add-to-cart"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Product