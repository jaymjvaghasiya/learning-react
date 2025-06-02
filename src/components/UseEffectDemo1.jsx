import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Use Effect called");
    }, [count])

  return (
    <div style={{textAlign: "center"}}>
        <h2>UseEffectDemo1</h2>
        <button onClick={()=>{setCount(count + 1)}}>Count</button>
        <p>Count = {count}</p>

    </div>
  )
}
