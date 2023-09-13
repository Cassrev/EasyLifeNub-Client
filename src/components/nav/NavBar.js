import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate()
  const navbar = useRef()
  const hamburger = useRef()

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbarDiv" role="navigation" aria-label="mainNavn">
      <div className="navbar-brand">

      </div>

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          
              <>
                <Link to="/tickets" className="navbar-item">Tickets</Link>
                <Link to="/my-tickets" className="navbar-item">My Tickets</Link>
                <Link to="/games" className="navbar-item">Games</Link>
                <Link to="/ticketForm" className="navbar-item">Create Ticket</Link>



              </>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                token
                  ?
                  <button className="button" onClick={() => {
                    setToken('')
                    navigate('/login')
                  }}>Logout</button>
                  :
                  <>
                    <Link to="/register" className="button is-link">Register</Link>
                    <Link to="/login" className="button is-outlined">Login</Link>

                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
