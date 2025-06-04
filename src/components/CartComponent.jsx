import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/CartSlice';

export const CartComponent = () => {

    const [data, setData] = useState([]);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        console.log(cart);
        setData(cart);
    }, []);

    const removeProduct = (product) => {
        dispatch(removeFromCart(product));
        const updatedData = data.filter(item => item.id !== product.id);
        setData(updatedData);
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Cart Product Display</h1>
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
                                        onClick={() => removeProduct(product)}
                                        className='btn btn-danger'
                                    >
                                        REMOVE FROM CART
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
