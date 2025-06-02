import React, { useState } from 'react'
import { ProductsList } from './ProductsList'
import { ProductContext } from './ProductContext'

export const Products = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'TV', price: 123 },
        { id: 2, name: 'Fridge', price: 453 },
        { id: 3, name: 'Mobile', price: 998 }
    ]);

    const title="Context";

    const deleteUser = (id) => {
        alert(id);
        let x = products.filter((p)=>p.id !== id);
        setProducts(x);
    }

    return (
        <div>
            <h2>Products</h2>
            <ProductContext.Provider value={{products, title, deleteUser}} >
                <ProductsList></ProductsList>
            </ProductContext.Provider>
        </div>
    )
}