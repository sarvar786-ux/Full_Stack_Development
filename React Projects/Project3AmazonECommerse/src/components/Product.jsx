import React from 'react'
import {Link} from 'react-router-dom'
const Product = ({product}) => {
  return (
     <div className="product-card">

  <img src={product.image} alt="" />

  <div className="product-content">

    <h4 className="product-title">
      {product.title.slice(0, 50)}
    </h4>

    <p className="product-price">
      ${product.price}
    </p>

    <button className="product-btn">
      View
    </button>

  </div>

</div>
  )
}

export default Product