import React, { useState } from 'react'
import StartContext from "./StartContext"


const CommonContext = (Props) => {
    const [count, setCount] = useState(0);
    const [details, setDetails] = useState({})
  return (
    <StartContext.Provider value={{count, setCount, details, setDetails}}>
        {Props.children}
    </StartContext.Provider>
  )
}

export default CommonContext
