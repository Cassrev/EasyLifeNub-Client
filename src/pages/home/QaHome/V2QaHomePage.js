import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByToken } from "../../../managers/tokens";
import { HomeUserTicket } from "./qaticketcontenthome";

export const SecondQaHomePageMain = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    useEffect(() => {
        getUserByToken(token)
            .then(setUser)
    }, [token])

    return (
        <>
            <HomeUserTicket />
        </>
    )
}