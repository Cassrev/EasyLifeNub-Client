import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login.js"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { QaPageDetail } from "../components/users/QaTester/QaPageDetail.js"
import { TicketList } from "../components/tickets/TicketList.js"
import { CreateTicketForm } from "../components/tickets/CreateTicketForm.js"

export const ApplicationViews = ({ token, setToken, }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token}/>}>
        <Route path="/" element={<QaPageDetail token={token} />} />

        <Route path="/tickets" element={<TicketList token={token} />} />
        <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />

      </Route>
    </Routes>
  );
}

