import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Loader';

export const ApiDemo2 = () => {

    const [flag, setflag] = useState(false);

    const addData = async () => {
        setflag(true);

        let data = {
            name: "Ram",
            age: 22,
            email: "ram@gmail.com",
            status: true
        }
        
        const res = await axios.post("https://node5.onrender.com/user/user", data);
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        
        setflag(false);

        if(res.status == 201) {
            alert("Data added successfully.");
        }
    }

  return (
    <div style={{textAlign: "center"}}>
        <h3>ApiDemo2</h3>
        {flag && <Loader />}
        <button onClick={()=>{addData()}}>Add Data</button>
    </div>
  )
}
