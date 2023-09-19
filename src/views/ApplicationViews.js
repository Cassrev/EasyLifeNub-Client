import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login.js"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TicketList } from "../pages/ticket/TicketList.js"
import { CreateTicketForm } from "../pages/ticket/CreateTicketForm.js"
import { TicketDetail } from "../pages/ticket/TicketDetails.js"
import TasklistPage from "pages/Tasklist/index.js"
// import EmailSigninPage from "pages/EmailSignin/index.jsx"
import CustomFormPage from "pages/CustomForm/index.js"
// import SignupLoginModulePage from "pages/SignupLoginModule/index.jsx"
import KanbanBoardPage from "pages/QATracker/KanbanBoard/index.js"
import { DashboardPage } from "pages/QATracker/Dashboard/index.js"
import { UserAccountPage } from "pages/UserAccount/index.js"
import { SecondQaHomePageMain } from "pages/home/QaHome/V2QaHomePage.js"

export const ApplicationViews = ({ token, setToken, }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token}/>}>
        <Route path="/" element={<SecondQaHomePageMain token={token} />} />

        <Route path="/tickets" element={<TicketList token={token} />} />
        <Route path="/tickets/:ticketId" element={<TicketDetail token={token} />} />
        <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />
      </Route>
    </Routes>
  )
}
