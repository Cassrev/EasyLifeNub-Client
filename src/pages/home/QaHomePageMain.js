import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
// import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { useEffect, useState } from "react";
// import { getUserByToken } from "../../../managers/tokens";
import { useNavigate, useParams } from "react-router-dom";
import { QaPageContentHome } from './QaPageContent';

// this is dashboardoverview(mainpage)
export const QaHomePageMain = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    // useEffect(() => {
    //     getUserByToken(token)
    //         .then(setUser)
    // }, [token])




    return (
        <>
            <QaPageContentHome />
        </>
    );
};


// OLD DO NOT TOUCH UNLESS NEED
// import { useEffect, useState } from "react";
// import { getUserByToken } from "../../../managers/tokens";
// import { useNavigate, useParams } from "react-router-dom";

// export const QaHomePageMain = ({ token }) => {
//     const [user, setUser] = useState()
//     let navigate = useNavigate()
    
//     useEffect(() => {
//         getUserByToken(token)
//             .then(setUser)
//     }, [token])

//     return (
//         <section className="userPage">

//             <div className="user_email">Email: {user?.user.email}</div>

//         </section>
//     );
// };