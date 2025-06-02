import React from 'react'
import { useFetchApi } from '../../hooks/FetchApiHook'
import { ProductDataList } from './ProductDataList';
import { ProductContext } from './ProductContext';

export const ProductData = () => {

    const { data, loading } = useFetchApi("https://node5.onrender.com/product/getall");

    return (
        <div style={{ textAlign: "center" }}>
            <h1>ProductData</h1>
            <ProductContext.Provider value={{data, loading}}>
                <ProductDataList></ProductDataList>
            </ProductContext.Provider>
        </div>
    )
}
