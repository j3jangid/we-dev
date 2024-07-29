import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const UseReducre = () => {
    const reduce=(state, action)=>{
        if (action.type==="Inc") {
            return state+1
        }
        if (action.type==="Dec") {
            return state-1
        }
    }

    const [state, dispatch] = useReducer(reduce, 0)
  return (
    <div>
        <button onClick={()=>dispatch({type:"Dec"})}> - Decerese</button>
        <span className='fs-5 btn btn-dark'>{state}</span>
        <button onClick={()=>dispatch({type:"Inc"})}> + Incerese </button>
    </div>
  )
}

export default UseReducre
