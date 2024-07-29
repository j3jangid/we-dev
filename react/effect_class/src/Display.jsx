import React from 'react'

const Display = ({data}) => {
  return (
    <div style={{backgroundColor:"blue", color:"white"}}>
        <hr />
        <br />
        name : {data.name},
        <br />
        <br />
        age : {data.age},
        <br />
        <br />
        city : {data.city}
        <br />
        <hr />
    </div>
  )
}

export default Display
