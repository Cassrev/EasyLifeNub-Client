import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"

export const Login = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid) {
          // if ("valid" in res && res.valid) {
          setToken(res.token)
          navigate("/")
        }
      })
  }
  /*--------------------------------------------------------------------*/
  // Autofill email/Password by default streamline devolopment process 
  useEffect(
    () => {
      username.current.value = "ches@eet.com"
      password.current.value = "lemmon"
    },
    []
  )
  /*--------------------------------------------------------------------*/
  return (<>
    <article className="container--login">
      <form className="form--login" onSubmit={handleLogin}>
        <h2>Please sign in</h2>
        {/* <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input type="email"
            className="form-control"
            ref={email} />
        </fieldset> */}

        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input ref={username} type="text" id="email" className="form-control" placeholder="Email" />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input ref={password} type="password" id="password" className="form-control" placeholder="Password" />
        </fieldset>


        <button className="button" type="submit" >Sign In</button>
      </form>

      <div className="controlReg">
        <Link to="/register" className="button">Not a member yet?</Link>
      </div>
    </article>
    </>
  )
}
