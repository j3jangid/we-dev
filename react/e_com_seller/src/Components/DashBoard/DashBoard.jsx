import React, { useContext } from 'react'
import StartContext from '../ContextDataFol/StartContext'

const DashBoard = () => {
  const commonData = useContext(StartContext);
  // console.log(commonData.userAuth);
  
  return (
    <div>
      DashBoard
    </div>
  )
}

export default DashBoard
