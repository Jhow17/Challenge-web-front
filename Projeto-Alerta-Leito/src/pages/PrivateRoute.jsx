import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useAuth } from '../shared/components/Auth'

const PrivateRoute = () => {
    const {user, loading} = useAuth()
    if (loading){
          return (
    <div>Entrando...</div>
  )
    }
    if(!user){
        return(
             <Navigate to="/" replace/>
        )
    }
    return <Outlet/>


}

export default PrivateRoute