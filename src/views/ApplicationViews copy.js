// import { Route, Routes } from "react-router-dom"
// import { Login } from "../components/auth/Login.js"
// import { Register } from "../components/auth/Register"
// import { Authorized } from "./Authorized"
// import { TicketList } from "../pages/ticket/TicketList.js"
// import { CreateTicketForm } from "../pages/ticket/CreateTicketForm.js"
// import { TicketDetail } from "../pages/ticket/TicketDetails.js"
// import { QaHomePageMain } from "../pages/home/QaHome/QaHomePage.js"
// import TasklistPage from "pages/Tasklist/index.js"
// // import EmailSigninPage from "pages/EmailSignin/index.jsx"
// import CustomFormPage from "pages/CustomForm/index.js"
// // import SignupLoginModulePage from "pages/SignupLoginModule/index.jsx"
// import Home, { QaHome } from "pages/home/hometest.js"
// import KanbanBoardPage from "pages/QATracker/KanbanBoard/index.js"
// import { DashboardPage } from "pages/QATracker/Dashboard/index.js"
// import QATrackerPage from "pages/home/QaHome/QaTrackerTest.js"
// import { UserAccountPage } from "pages/UserAccount/index.js"
// import { SecondQaHomePageMain } from "pages/home/QaHome/V2QaHomePage.js"

// export const ApplicationViews = ({ token, setToken, }) => {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login setToken={setToken} />} />
//       <Route path="/register" element={<Register setToken={setToken} />} />
//       <Route element={<Authorized token={token}/>}>
//         {/* <Route path="/" element={<QaHomePageMain token={token} />} /> */}
//         <Route path="/" element={<SecondQaHomePageMain token={token} />} />

//         <Route path="/tickets" element={<TicketList token={token} />} />
//         <Route path="/tickets/:ticketId" element={<TicketDetail token={token} />} />
//         <Route path="/ticketForm" element={<CreateTicketForm token={token} />} />

//         <Route path="/tasklist" element={<TasklistPage />} />
//         <Route path="/hometest" element={<QaHome />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/kanbanboard" element={<KanbanBoardPage />} />
//         <Route path="/qatracker" element={<QATrackerPage />} />
//         {/* <Route path="/emailsignin" element={<EmailSigninPage />} /> */}
//         {/* <Route path="/customform" element={<CustomFormPage />} /> */}
//         {/* <Route path="/login" element={<LoginPage />} /> */}
//         {/* <Route path="/signuploginmodule" element={<SignupLoginModulePage />} /> */}
//         <Route path="/useraccount" element={<UserAccountPage />} />
//       </Route>
//     </Routes>
//   )
// }
