// import { useEffect, useState } from "react";
// // import { getUserByToken } from "../../../managers/tokens";
// import { useNavigate, useParams, Route, Switch, Redirect } from "react-router-dom";
// import { Routes } from "../routes";
// // pages
// // import Presentation from "./Presentation";
// import DashboardOverview from "./dashboard/DashboardOverview";
// import BootstrapTables from "./tables/BootstrapTables";
// import Signin from "./examples/Signin";
// import Signup from "./examples/Signup";
// import ForgotPassword from "./examples/ForgotPassword";
// import ResetPassword from "./examples/ResetPassword";
// import Lock from "./examples/Lock";
// import NotFoundPage from "./examples/NotFound";
// import ServerError from "./examples/ServerError";

// // components
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import Preloader from "../components/Preloader";

// import Accordion from "./components/Accordion";
// import Badges from "./components/Badges";
// import Breadcrumbs from "./components/Breadcrumbs";
// import Buttons from "./components/Buttons";
// import Forms from "./components/Forms";
// import Modals from "./components/Modals";
// import Navs from "./components/Navs";
// import Navbars from "./components/Navbars";
// import Popovers from "./components/Popovers";
// // import Tables from "./components/Tables";
// import Tabs from "./components/Tabs";
// import Tooltips from "./components/Tooltips";
// // import Toasts from "./components/Toasts";

// export const QaPageContent = ({ token }) => {
//     const [user, setUser] = useState()
//     let navigate = useNavigate()

//     // useEffect(() => {
//     //     getUserByToken(token)
//     //         .then(setUser)
//     // }, [token])

//     return (
//         <div className="container-fluid pt-3 'container'">
//             <div className="row removable 'row'">
//                 <div className="col-lg-6 'col'"></div>
//                 <div className="col-lg-6 'col'">
//                     <div className="card border 'card'">
//                         <div className="card-body 'card-body'">
//                             <h4 className="card-title mb-0 'card-title'">Your Tickets Listings</h4>
//                             <div className="row 'card-row'">
//                                 <div className="ml-2 'ml-2'">
//                                     <h4 className="card-title text-dark mb-0 'card-title-text'">Software Development Engineer</h4>
//                                     <span className="text-xs text-muted mb-0 'text-muted'">Facebook</span>
//                                 </div>
//                                 <button className="btn btn-sm ml-auto btn-outline-dark 'btn'">Details</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const RouteWithLoader = ({ component: Component, ...rest }) => {
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoaded(true), 1000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
//     );
// };

// const RouteWithSidebar = ({ component: Component, ...rest }) => {
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoaded(true), 1000);
//         return () => clearTimeout(timer);
//     }, []);

//     const localStorageIsSettingsVisible = () => {
//         return localStorage.getItem('settingsVisible') === 'false' ? false : true
//     }


//     return (
//         <Route {...rest} render={props => (
//             <>
//                 <Preloader show={loaded ? false : true} />
//                 <Sidebar />

//                 <main className="content">
//                     <Navbar />
//                     <Component {...props} />
//                 </main>
//             </>
//         )}
//         />
//     );
// };

// export default () => (
//     <Switch>
//         <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
//         <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
//         <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
//         <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
//         <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
//         <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
//         <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

//         {/* pages */}
//         <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
//         {/* <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} /> */}

//         <Redirect to={Routes.NotFound.path} />
//     </Switch>
// );


