import React, { useState } from 'react'

export const UseMemoDemo2 = () => {
  const [fruits, setfruits] = useState(["apple","banana","watermelon","litchi","mango","kiwi"])
  const [filterfruits, setfilterfruits] = useState([])

    const [query, setquery] = useState("")
    const searchFruit =(event)=>{
        // console.log(event.target.value) //w
        //a
        var filtFruits = fruits.filter((f)=>{
            return f.includes(event.target.value)
        })
        //["",""]
        // console.log(filtFruits)
        setfilterfruits(filtFruits)
        // setfruits(filtFruits)

    }

    console.log(filterfruits.length);
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO 2</h1>
        
        <input type='text' placeholder='search' onChange={(event)=>{searchFruit(event)}} ></input>
        {
            filterfruits.length == 0 ? fruits.map((f)=>{return <li>{f}</li>}):filterfruits.map((f)=>{return <li>{f}</li>})
        } 
    </div>
  )
}
