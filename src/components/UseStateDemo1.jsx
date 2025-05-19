import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count+1);

  return (
    <>
        <h1>UseStateDemo1</h1>
        <h1>Count: {count}</h1>
        <div className="d-flex justify-content-center">
            <button class="btn btn-primary" onClick={()=>{increaseCount()}}>Increase</button>
        </div>
    </>
  )
}
