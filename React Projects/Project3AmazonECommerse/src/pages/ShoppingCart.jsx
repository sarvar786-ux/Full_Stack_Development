import React, { useContext } from 'react'
import './ShoppingCart.css'
import ProductContext from '../contexts/ProductContext'
const ShoppingCart = () => {

    const { products, 
    cartitems,
    removeFromCart } 
    = useContext(ProductContext)
    const totalAmount = products
    .filter((prod) => cartitems[prod.id] > 0)
    .reduce((total, prod) => {
        return total +
        cartitems[prod.id] * prod.price
    }, 0)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .filter((prod) => cartitems[prod.id] > 0)
                        .map((prod) => {
                            if (cartitems[prod.id] > 0) {
                                return (
                                    <tr key={prod.id}>
                                        <td>{prod.title}</td>
                                        <td><img id="prod-image" src={prod.image} /></td>
                                        <td>{cartitems[prod.id]}</td>
                                        <td>{cartitems[prod.id] * prod.price}</td>
                                        <td><button className="add-to-cart"
                                            onClick={() => removeFromCart(prod.id)}
                                        >
                                            Remove
                                        </button></td>
                                    </tr>
                                )
                            }
                        }
                        )}
                </tbody>
                <div className="cart-total">
                    <h2>
                        Total Amount:
                        <span>
                        ${totalAmount.toFixed(2)}
                        </span>
                    </h2>
                </div>
            </table>
        </>
    )
}

export default ShoppingCart