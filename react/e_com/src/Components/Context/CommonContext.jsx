import React, { useState } from 'react'
import StartContext from './StartContext';

const CommonContext = (Props) => {
    const [userStatus, setUserStatus] = useState([]);
  return (
    <StartContext.Provider value={{userStatus, setUserStatus}}>
        {Props.children}
    </StartContext.Provider>
  )
}

export default CommonContext
