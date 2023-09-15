import { Col, Row } from "@themesberg/react-bootstrap";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { useEffect, useState } from "react";
// import { getUserByToken } from "../../../managers/tokens";
import { useNavigate, useParams, Route, Switch, Redirect } from "react-router-dom";

export const QaPageContentHome = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.street" />
                <TextField source="phone" />
                <TextField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
    );
}


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


