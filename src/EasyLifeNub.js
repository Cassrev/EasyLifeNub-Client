import { useState } from "react";
import { ApplicationViews } from "./views/ApplicationViews"
import { SideNavBar } from "./components/nav/SideNavBar";
import { TopNavBar } from "components/nav/TopNavBar";


export const EasyLifeNub = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  return <>
    {
      token
        ?
        <>
          <SideNavBar token={token} setToken={setToken} />
          <TopNavBar token={token} setToken={setToken} />
        </>
        : null
    }
    {/* <div id="main-content" className="relative h-screen lg:ml-64"> */}
    <div id="main-content" className="relative h-screen">
      <ApplicationViews token={token} setToken={setToken} />
    </div>
  </>
}
