import { createContext, useContext, useRef } from "react"

const LoginContext = createContext()

export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
    const username = useRef()
    const password = useRef()

    return (
        <LoginContext.Provider value={{ username, password }}>
            {children}
        </LoginContext.Provider>
    )
}
