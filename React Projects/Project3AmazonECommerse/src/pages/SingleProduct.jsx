import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import axios from 'axios'


const SingleProduct = () => {
   const {prodid} = useParams()
   console.log(prodid)

   const [product,setProduct]=useState(null)
   useEffect(
    ()=>{
        loadSingleProduct()
    },[prodid]
   )

   async function loadSingleProduct()
   {
        try {
            const apiproducts = await axios.get(`https://fakestoreapi.com/products/${prodid}`)
            //const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            console.log(apiproducts) //single object {header,status,ok, data}
            setProduct(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
   }
  return (
  <div className="single-product-page">

    {product ? (
      <div className="single-product-container">

        {/* IMAGE */}
        <div className="single-product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* DETAILS */}
        <div className="single-product-details">

          <h1 className="single-product-title">
            {product.title}
          </h1>

          <span className="single-product-category">
            {product.category}
          </span>

          <p className="single-product-description">
            {product.description}
          </p>

          <h2 className="single-product-price">
            ${product.price}
          </h2>

          <button className="single-product-btn">
            Add to Cart
          </button>

        </div>

      </div>
    ) : (
      <h2 style={{ textAlign: "center", marginTop: "100px", color: "#94a3b8" }}>
        Fetching Product Info...
      </h2>
    )}

  </div>
)
}

export default SingleProduct