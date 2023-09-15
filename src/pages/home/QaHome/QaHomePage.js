import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByToken } from "../../../managers/tokens";
import { CustomizedTablesCardTicket } from "./testcontenthome";

export const QaHomePageMain = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    useEffect(() => {
        getUserByToken(token)
            .then(setUser)
    }, [token])

    return (
        <section className="userPageContent">
            <CustomizedTablesCardTicket/>

        </section>
    );
};