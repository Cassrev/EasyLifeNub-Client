import { useState, useEffect, useMemo } from "react";
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
// import { SideNav } from "./components/ui/testside"
// import { NavBarDash } from "./components/nav/NavBarcopy";
import { SideNavBarDash } from "./components/nav/SideNavBarcopy";

export const EasyLifeNub = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  return <>
    <SideNavBarDash token={token} setToken={setToken} />
    <ApplicationViews token={token} setToken={setToken} />
  </>
}
