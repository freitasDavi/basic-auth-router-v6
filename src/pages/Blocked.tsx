import { useContext } from "react"
import { AuthenticationContext } from "../context/AuthenticationContext"
import { useNavigate } from "react-router-dom"


export const Blocked = () => {
    const navigate = useNavigate()
    const { logout, username } = useContext(AuthenticationContext)

    const handleLogout = () => {
        logout();

        navigate("/");
    }

    return (
        <div className="container">
            <h1>Rota protegida</h1>
            <div>
                Olá, { username.split("@")[0] }
                <button onClick={() => handleLogout()}>Sair</button>
            </div>
        </div>
    )
}