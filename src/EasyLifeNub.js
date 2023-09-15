import { useState, useEffect, useMemo } from "react";
import { ApplicationViews } from "./views/ApplicationViews"
import { SideNavBar } from "./components/nav/SideNavBar";

export const EasyLifeNub = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  return <>
    {
      token
        ? <SideNavBar token={token} setToken={setToken} /> : null
    }
    <ApplicationViews token={token} setToken={setToken} />
  </>
}
