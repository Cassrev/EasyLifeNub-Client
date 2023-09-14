import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login.js"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TicketList } from "../components/tickets/TicketList.js"
import { CreateTicketForm } from "../components/tickets/CreateTicketForm.js"
import { TicketDetail } from "../components/tickets/TicketDetails.js"
import { QaPageMainDetail } from "../components/users/QaPageDetail.js"
import { QaHomePageMain } from "../pages/home/QaHomePageMain.js"

export const ApplicationViews = ({ token, setToken, }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token}/>}>
        {/* <Route path="/" element={<QaPageMainDetail token={token} />} /> */}
        <Route path="/" element={<QaHomePageMain token={token} />} />

        <Route path="/tickets" element={<TicketList token={token} />} />
        <Route path="/tickets/:ticketId" element={<TicketDetail token={token} />} />
        <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />

      </Route>
    </Routes>
  );
}


// export const Routes = {
//   // pages
//   DashboardOverview: { path: "/dashboard/overview" },
//   BootstrapTables: { path: "/tables/bootstrap-tables" },
//   Signin: { path: "/examples/sign-in" },
//   Signup: { path: "/examples/sign-up" },
//   ForgotPassword: { path: "/examples/forgot-password" },
//   ResetPassword: { path: "/examples/reset-password" },
//   Lock: { path: "/examples/lock" },
//   NotFound: { path: "/examples/404" },
//   ServerError: { path: "/examples/500" },

// };