import React from 'react'

export const MyButton = (props) => {
  return (
    <button className={props.class || "btn btn-light"} onClick={()=>{props.myFun(5)}}>{props.name || "test"}</button>
  )
}
