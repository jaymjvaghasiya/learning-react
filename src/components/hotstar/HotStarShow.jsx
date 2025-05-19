import React from 'react'
import { MyButton } from '../MyButton'

export const HotStarShow = () => {

  const playShows = (n) => {
    alert("Show Plating..." + n);
  }

  return (
    <>
      <h1>Shows</h1>
      <MyButton class="btn btn-danger" name="Play Shows" myFun={playShows}></MyButton>
    </>
  )
}