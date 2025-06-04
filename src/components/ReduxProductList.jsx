import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice';

export const ReduxProductList = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState([
        {
            id: 101,
            name: "TV",
            price: 1200,
            description: "128 gb"
        },
        {
            id: 102,
            name: "FRIDGT",
            price: 800,
            description: "500 gb"
        },
        {
            id: 103,
            name: "MONITOR",
            price: 3000,
            description: "256 gb"
        }
    ])

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Product Display</h1>
            <div className="row">
                {data && data.length > 0 ? (
                    data.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">
                                        <strong>Price:</strong> ${product.price}
                                    </p>
                                    {/* <button onClick={() => { dispatch(addToCart(product)) }} className='btn btn-primary'>ADD TO CART</button> */}
                                    <button
                                        onClick={() => dispatch(addToCart(product))}
                                        className='btn btn-primary'
                                    >
                                        ADD TO CART
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p>No products available.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
