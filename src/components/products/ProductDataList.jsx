import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { Loader } from '../Loader';

export const ProductDataList = () => {

    const {data, loading} = useContext(ProductContext);

  return (
    <div style={{textAlign: "center"}}> 
        <h3>ProductDataList</h3>
        {loading && <Loader/>}
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d)=>{
                        return (
                            <tr>
                                <td>{d.name}</td>
                                <td>{d.description}</td>
                                <td>{d.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>  

  )
}
