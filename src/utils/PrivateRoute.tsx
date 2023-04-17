import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthenticationContext } from "../context/AuthenticationContext"


export const PrivateRoutes = () => {
    const { token } = useContext(AuthenticationContext)

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}