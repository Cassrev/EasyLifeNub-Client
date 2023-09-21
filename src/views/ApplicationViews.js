import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { TicketList } from "../pages/ticket/TicketList.js"
import { CreateTicketForm } from "../pages/ticket/CreateTicketForm.js"
import { TicketDetail } from "../pages/ticket/TicketDetails.js"
import { SecondQaHomePageMain } from "pages/home/QaHome/V2QaHomePage.js"

import { TabLoginRegisterTest } from "pages/LoginRegister/TabLoginRegisterTest"

export const ApplicationViews = ({ token, setToken, }) => {
  return (
    <Routes>
      <Route path="/login" element={<TabLoginRegisterTest setToken={setToken} />} />

      <Route element={<Authorized token={token} />}>
        <Route path="/" element={<SecondQaHomePageMain token={token} />} />

        <Route path="/tickets" element={<TicketList token={token} />} />
        <Route path="/tickets/:ticketId" element={<TicketDetail token={token} />} />
        <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />
      </Route>
    </Routes>
  )
}
