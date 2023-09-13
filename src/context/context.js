// // guide with examples: https://smashingtips.com/programming/mastering-react-context-api-2023-best-practices-examples/
// // https://javascript.plainenglish.io/react-context-the-ultimate-handbook-a13db7d6f14c

// import { createContext, useContext, useEffect, useRef, useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { loginUser } from "../managers/AuthManager"


// // Create the context variable using createContext
// const LoginContext = createContext()

// // Define the provider function which houses all of your data and data management, it takes children as a parameter
// export const LoginProvider = ({ children }) => {
//     const username = useRef()
//     const password = useRef()
//     const navigate = useNavigate()

//     const handleLogin = (e) => {
//         e.preventDefault()
//         const user = {
//             username: username.current.value,
//             password: password.current.value
//         }

//         loginUser(user)
//             .then(res => {
//                 if ("valid" in res && res.valid) {
//                     // if ("valid" in res && res.valid) {
//                     setToken(res.token)
//                     navigate("/")
//                 }
//             })
//         }
//         /*--------------------------------------------------------------------*/
//     // Autofill email/Password by default streamline devolopment process 
//     useEffect(
//         () => {
//             username.current.value = "ches@eet.com"
//             password.current.value = "lemmon"
//         },
//         []
//     )
//     /*--------------------------------------------------------------------*/
//     return (<LoginContext.Provider
//             value={{ username, password, settlementId, handleLogin, navigate, deleteButton }}
//             >
//                 {children}
//         </LoginContext.Provider>)
        
//         <>

//         <article className="container--login">
//             <form className="form--login" onSubmit={handleLogin}>
//                 <h2>Please sign in</h2>

//                 <fieldset>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input ref={username} type="text" id="email" className="form-control" placeholder="Email" />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputPassword"> Password </label>
//                     <input ref={password} type="password" id="password" className="form-control" placeholder="Password" />
//                 </fieldset>


//                 <button className="button" type="submit" >Sign In</button>
//             </form>

//             <div className="controlReg">
//                 <Link to="/register" className="button">Not a member yet?</Link>
//             </div>
//         </article>
//     </>
//     )
// }

// // useLocation, useParams, useNavigate, useState, useEffect, and even fetch requests


// // Finally, export a custom hook so the child can access this component
// export const useLogin = () => useContext(LoginContext)