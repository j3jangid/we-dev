import React, { createContext, useState } from 'react'

const StartContext = createContext();

const CommonContextProvider = (props) => {
    const [systemItems, setSystemItems] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
  return (
    <StartContext.Provider value={{systemItems, setSystemItems, filterData, setFilterData, selectedItems, setSelectedItems}}>
        {props.children}
    </StartContext.Provider>
  )
}

export {StartContext, CommonContextProvider};
