import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { ProductsubList } from './ProductsubList';

export const ProductsList = () => {

    const {products, deleteUser} = useContext(ProductContext);

  return (
    <div style={{textAlign: "center"}}>
        <h2>ProductsList</h2>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
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
                                <td><button className='btn btn-danger' onClick={()=>{deleteUser(p.id)}}>DELETE</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <ProductsubList></ProductsubList>
    </div>
  )
}
