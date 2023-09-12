import { useEffect, useState } from "react";
import { getUserByToken } from "../../../managers/tokens";
import { useNavigate, useParams } from "react-router-dom";

export const QaPageDetail = ({ token }) => {
    const [user, setUser] = useState()
    let navigate = useNavigate()
    
    useEffect(() => {
        getUserByToken(token)
            .then(setUser)
    }, [token])

    return (
        <section className="userPage">

            <div className="user_email">Email: {user?.user.email}</div>

        </section>
    );
};