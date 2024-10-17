// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {

    let auth = JSON.parse(localStorage.getItem("loggedin")) || {}
    return auth.email ? <Outlet /> : <Navigate to="/" />
}

export default PrivateComponent
