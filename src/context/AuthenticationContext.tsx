import { ReactNode, createContext, useState } from "react"

interface AuthenticationContextProps {
    token: string;
    username: string;
    login: (username: string) => void;
    logout: () => void;
}

export const AuthenticationContext = 
    createContext<AuthenticationContextProps>({ } as AuthenticationContextProps);

type AuthenticationContextProviderProps = {
    children: ReactNode;
}

export const AuthenticationContextProvider = ({ children }: AuthenticationContextProviderProps) => {
    const [token, setToken] = useState("");
    const [name, setUsername] = useState("");

    const login = (name: string) => {
        // secret: "segredo"
        // Exemplo de onde vocês poderiam realizar o login, mas o token deve ser armazenado nos Cookies da aplicação ou no localstorage
        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpXVCB0ZXN0ZSwgYWNoYXJhbT8iLCJpYXQiOjE1MTYyMzkwMjJ9.jIjwc9XIKYfBAiyKkWk6k0qGPvZiPTHim6hdE2qLgP0");
        setUsername(name);
    }

    const logout = () => {
        setToken("");
        setUsername("");
    }


    return (
        <AuthenticationContext.Provider
            value={{
                token,
                username: name,
                login,
                logout
            }}    
        >
            { children }
        </AuthenticationContext.Provider>
    )
}
