import { createContext, useContext, useRef } from "react"

const RegisterContext = createContext()

export const useRegister = () => useContext(RegisterContext)

export const RegisterProvider = ({ children }) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordDialog = useRef()

    return (
        <RegisterContext.Provider
            value={{ firstName, lastName, email, username, password, passwordDialog }}
        >
            {children}
        </RegisterContext.Provider>
    )
}
