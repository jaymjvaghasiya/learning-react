import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const [users, setUsers] = useState(["Ram", "Shyam", "Shiv", "Krishan", "Maruti"]);

    const addUser = () => {
        let text = "qwertyuiopasdfghjklzxcvbnm";
        let name = "";
        for(let i = 0; i < 4; i++) {
            var index = Math.floor(Math.random()*text.length);
            var char = text[index];
            name += char;
        }
        setUsers([...users, name]);
    }

  return (
    <>
        <h1>UseStateDemo3</h1>
        <div className="d-flex justify-content-center">
            <button class="btn btn-primary" onClick={()=>{addUser()}}>Add Names</button>
        </div>
        <ul>
            {
                users.map((u) => {
                    return (
                        <li>{u}</li>
                    )
                })
            }
        </ul>
    </>
  )
}
