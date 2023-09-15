import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login.js"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TicketList } from "../pages/ticket/TicketList.js"
import { CreateTicketForm } from "../pages/ticket/CreateTicketForm.js"
import { TicketDetail } from "../pages/ticket/TicketDetails.js"
import { QaHomePageMain } from "../pages/home/QaHome/QaHomePage.js"

export const ApplicationViews = ({ token, setToken, }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token}/>}>
        <Route path="/" element={<QaHomePageMain token={token} />} />

        <Route path="/tickets" element={<TicketList token={token} />} />
        <Route path="/tickets/:ticketId" element={<TicketDetail token={token} />} />
        <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />

      </Route>
    </Routes>
  )
}
