import React, { useState } from 'react'

export const UseStateDemo4 = () => {
    
    const [user, setUser] = useState({id: 123, name: "Ram", age: 24});

    const leap = (n) => {
        setUser({...user, age:user.age+n,child:1})
    }

  return (
    <>
        <h1>UseStateDemo4</h1>
        <div>

            {/* {
                Object.entries(user).map(([key, value]) => (
                  <h2 key ={key} className="d-flex justify-content-center">
                    {key} : {value}
                  </h2>  
                ))
            } */}

            <h2 className="d-flex justify-content-center">ID: {user.id}</h2>
            <h2 className="d-flex justify-content-center">Name: {user.name}</h2>
            <h2 className="d-flex justify-content-center">Age: {user.age}</h2>
            {
                user.child &&
                <h2 className="d-flex justify-content-center">Child: {user.child}</h2>
            }
            <br/><div className="d-flex justify-content-center">
                <button class="btn btn-primary" onClick={()=>{leap(2)}}>Leap</button>
            </div>
        </div>
    </>
  )
}
