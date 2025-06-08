import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export const RatingBar = () => {

    // let res = "";
    const [res, setRes] = useState(2);

  return (
    <Box>
        <Rating 
            name='simple-uncontrolled' 
            onChange={(event, newValue)=>{
                console.log(newValue);
                setRes(newValue);
            }}
            defaultValue={2}
        >
        </Rating>
        {
            res == 1 ? "Poor" : res == 2 ? "Fair" : res == 3 ? "Good" : res == 4 ? "Very Good" : "Excellent"
        }
    </Box>
  )
}
