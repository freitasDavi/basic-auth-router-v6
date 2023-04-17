import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthenticationContext } from "../context/AuthenticationContext"


export const Home = () => {
    const { token } = useContext(AuthenticationContext);

    return (
        <div className="container">
            <Link to="/login">
                <button disabled={token.length > 0}>
                    Login
                </button>
            </Link>
            <Link to="/private">
                <button>
                    Logged Only
                </button>
            </Link>
        </div>
    )
}