import React from 'react'
import { useFetchApi } from '../../hooks/FetchApiHook'
import { Loader } from '../Loader';

export const ApiDemo4 = () => {

    const {data, loading, refetch} = useFetchApi("https://node5.onrender.com/product/getall");
    
  return (
    <div style={{textAlign: "center"}}>
        <h3>ApiDemo4</h3>
        {loading && <Loader/>}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d)=>{
                        return (
                            <tr>
                                <td>{d._id}</td>
                                <td>{d.name}</td>
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
