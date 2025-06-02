import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

export const ProductsubList = () => {

    const {products, title} = useContext(ProductContext);

  return (
    <div>
        <h3>ProductsubList {title}</h3>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p)=>{
                        return (
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
