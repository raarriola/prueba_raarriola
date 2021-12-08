import React from 'react'
import { Route, Navigate, Link } from 'react-router-dom'
import { isSigned } from '../utils/api'

export const ProtectedRoute = ({children }) => {
    const [isSign,setIsSign] = React.useState(false)
    const [isLoading,setIsLoading] = React.useState(true)
    React.useEffect(async() => {
        const data = await isSigned()
        console.log('data',data)
        setIsSign(data.signed)
        setIsLoading(false)
    },[])
    return (
            isLoading?null:(
            isSign ? children : <Navigate to="/login" />)
    )
}

