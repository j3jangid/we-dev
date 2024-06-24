import React from 'react'
import cloudImg from "./images/cloudy.png";

let later = require("./images/later.png")

const img = () => {
  return (
    <>
        <img src="7.jpeg" width={550}/>
        <img src={require("./images/delete.png")} width={200}/>
        <img src={cloudImg} width={200}/>
        <img src={later} width={200}/>
      
    </>
  )
}

export default img
