import React from 'react'
import { IPLData } from './IPLData'

export const IPLHome = () => {

    let sponcer = "TATA";
    let org = {name:"BCCI",year:2025,host:"JAY SHAH"};
    let team = ["GT","CSK","MI","RCB","DL"];

  return (
    <>
        <h1>IPLHome</h1>
        <IPLData sponcer={sponcer} org={org} teams={team}></IPLData>
    </>
  )
}
