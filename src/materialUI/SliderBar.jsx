import Box from '@mui/material/Box'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import { useFetchApi } from '../hooks/FetchApiHook';
import { Loader } from '../components/Loader';
import Button from '@mui/material/Button';

export const SliderBar = () => {

    const { data, loading } = useFetchApi("https://node5.onrender.com/product/getall");

    const [value, setValue] = useState([20000, 200000]);
    const [filteredData, setFilteredData] = useState();

    useEffect(()=>{
        setFilteredData(data);
    }, [data])

    const handleChang = (event, newValue) => {
        setValue(newValue);
    }

    function valuetext(value) {
        return `$${value}`;
    }

    const applyChange = () => {
        let newData = data.filter(item => item.price >= value[0] && item.price <= value[1]);
        setFilteredData(newData);
    }

    return (
        <div style={{ textAlign: "center" }}>

            <Box sx={{ width: "100%", mt: 5 }}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: 5}}>
                    <Slider
                        sx={{ width: 300 }}
                        getAriaLabel={() => 'Amount range'}
                        value={value}
                        onChange={handleChang}
                        aria-label='Default'
                        getAriaValueText={valuetext}
                        valueLabelFormat={valuetext}
                        valueLabelDisplay='auto'
                        min={500}
                        max={500000}
                        step={500}
                    />
                    <Button variant='contained' color='success' onClick={()=>{applyChange()}}>Apply</Button>
                </Box>
                {loading && <Loader />}
                <div className="container mt-4">
                    <h1 className="mb-4">Product Display</h1>
                    <div className="row">
                        {filteredData && filteredData.length > 0 ? (
                            filteredData.map((product, index) => (
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

            </Box>

        </div>
    )
}
