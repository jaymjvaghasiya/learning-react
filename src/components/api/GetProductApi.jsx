import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MyButton } from '../MyButton';
import { Loader } from '../Loader';

export const GetProductApi = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{getProductData()}, []);

    const getProductData = async () => {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        console.log("res...", res);
        setProducts(res.data.products);
        setLoading(false);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>GetProductApi</h2>
            {loading && <Loader />}
            <MyButton class='btn btn-primary' name='Get Products' myFun={() => getProductData()}></MyButton>
            {products.length > 0 && (
                <table className='table' style={{ marginTop: "1rem" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CATEGORIES</th>
                            <th>PRICE</th>
                            <th>TAGS</th>
                            <th>BRAND</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p) => {
                                return (
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.category}</td>
                                        <td>{p.price}</td>
                                        <td>{
                                            p.tags?.map((t, i) => {
                                                return (
                                                    <span key={i}>
                                                        {t}{i < p.tags.length - 1 ? ', ' : ''}
                                                    </span>
                                                )
                                            })
                                        }</td>
                                        <td>{p.brand}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}
