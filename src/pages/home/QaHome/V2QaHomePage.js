import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByToken } from "../../../managers/tokens";
import { NewCustomizedTablesCardTicket } from "./qaticketcontenthome";
import { Img, Line, List, Slider, Text } from "components/ui/uiexport";


export const SecondQaHomePageMain = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()

    useEffect(() => {
        getUserByToken(token)
            .then(setUser)
    }, [token])

    return (
        <>
        
            <NewCustomizedTablesCardTicket />

        </>
    )
}