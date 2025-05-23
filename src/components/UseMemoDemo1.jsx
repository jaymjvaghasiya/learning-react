import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {

  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);

  // let number = Math.floor(Math.random()*100);

  let number = useMemo(()=>{
    return Math.floor(Math.random()*100);
  },[flag2])

  return (
    <div style={{textAlign: "center"}}>
      {number} <br />
      <h3>{flag ? "true" : "false"}</h3> <br />

      <button onClick={()=>{setFlag(flag ? false : true)}}>Change</button>

      <h3>{flag2 ? "true" : "false"}</h3> <br />

      <button onClick={()=>{setFlag2(flag2 ? false : true)}}>Change 2</button>
    </div>
  )
}
