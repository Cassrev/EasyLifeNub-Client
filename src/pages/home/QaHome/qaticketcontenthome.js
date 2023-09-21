import { useEffect, useState } from "react";
import { viewUserTicket } from '../../../managers/tickets';
import { Link } from 'react-router-dom';
import { Text } from "components/ui/uiexport";

export const HomeUserTicket = () => {
    const [userTickets, setUserTickets] = useState([]);
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

    useEffect(() => {
        viewUserTicket({ token }).then((ticketData) => setUserTickets(ticketData))
    }, [])


    return (
        <>
            <div className="mt-10">
                <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-fit">
                    <Text
                        className="text-gray-900 text-2xl"
                        size="txtGilroySemiBold18"
                    >
                        Your Tickets
                    </Text>
                </div>

                <div className="grid px-4 pt-6 xl:grid-cols-2 xl:gap-4 w-fit">
                    {userTickets.map((ticket) => (
                        <div className="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 w-full">
                    
                                <Text
                                className="text-gray-900_01 text-xl w-fit"
                                    size="txtGilroyBold18"
                                >
                                    <Link to={`/tickets/${ticket.id}`}>
                                        {ticket.issue_title}
                                    </Link>
                                </Text>

                            <div className="flex flex-row items-start justify-between w-fit">
                                <Text
                                    className="pb-0.5 pt-[5px] px-[9px] rounded text-base w-fit"
                                    size="txtGilroyRegular14"
                                >
                                    {ticket?.game?.title}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}