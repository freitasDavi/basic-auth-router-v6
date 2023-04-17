import { useContext, useEffect, useState } from "react"
import { AuthenticationContext } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, token } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const handleUserLogin = () => {
        console.log("Email: "   + email + " Password: " + password);

        if (!!email.trim()) {
            login(email);

            navigate("/");

        }
    }

    useEffect(() => {
        if (token.length > 0) {
            navigate("/");
        }
    }, [token]);   


    return (
        <div className="container">
            <h1>Login</h1>

            <form onSubmit={handleUserLogin}>
                <label id="email">
                    Email:
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        id="email" 
                        type="email" 
                        name="email" 
                    />
                </label>
                <label id="password">
                    Password:
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        id="password" 
                        type="password" 
                        name="password" 
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}