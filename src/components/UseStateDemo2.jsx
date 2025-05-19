import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [loading, setLoading] = useState(true);

    const stopLoading = (milis) => {
        setTimeout(() => {
            setLoading(false);
        }, milis);
    }

  return (
    <>
        <h1>UseStateDemo2</h1>
        { loading ? 
            (
                <>
                    <h1>Loading...</h1> 
                    <div className="d-flex justify-content-center">
                        <button class="btn btn-primary" onClick={()=>{stopLoading(2000)}}>Stop Loading</button>
                    </div>
                </>
            )
             :
            (
                <h2 className="text-success text-center">✅ Loading Stopped</h2>
            )
        }
    </>
  )
}
