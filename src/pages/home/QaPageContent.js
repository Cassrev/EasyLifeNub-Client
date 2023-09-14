import { Col, Row } from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";
// import { getUserByToken } from "../../../managers/tokens";
import { useNavigate, useParams, Route, Switch, Redirect } from "react-router-dom";

export const QaPageContentHome = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    // useEffect(() => {
    //     getUserByToken(token)
    //         .then(setUser)
    // }, [token])

    
    return (
        <div className="container-fluid pt-3 'container'">
            <Row>
                <Col xs={12} xl={12} className="mb-4">
                    <Col xs={12} xl={8} className="mb-4">
                        <Row>
                            <Col xs={12} className="mb-4">
                                test
                                {/* <PageVisitsTable /> */}
                            </Col>

                            <Col xs={12} lg={6} className="mb-4">
                                another col tsttt
                                {/* <TeamMembersWidget /> */}
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
            <div className="row removable 'row'">
                <div className="col-lg-6 'col'"></div>
                <div className="col-lg-6 'col'">
                    <div className="card border 'card'">
                        <div className="card-body 'card-body'">
                            <h4 className="card-title mb-0 'card-title'">Your Tickets Listings</h4>
                            <div className="row 'card-row'">
                                <div className="ml-2 'ml-2'">
                                    <h4 className="card-title text-dark mb-0 'card-title-text'">Software Development Engineer</h4>
                                    <span className="text-xs text-muted mb-0 'text-muted'">Facebook</span>
                                </div>
                                <button className="btn btn-sm ml-auto btn-outline-dark 'btn'">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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


