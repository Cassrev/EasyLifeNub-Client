import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { viewUserTicket } from '../../../managers/tickets';
import { Link } from 'react-router-dom';
import { Table, TableContainer, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Sidebar } from "react-pro-sidebar";
import { Button, Img, Input, Line, Text } from "components/ui/uiexport";

export const NewCustomizedTablesCardTicket = () => {
    const [userTickets, setUserTickets] = useState([]);
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

    useEffect(() => {
        viewUserTicket({ token }).then((ticketData) => setUserTickets(ticketData))
    }, [])


    return (
        <>
            <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-fit">
                <Text
                    className="text-gray-900 text-2xl"
                    size="txtGilroySemiBold18"
                >
                    Your Tickets
                </Text>
            </div>

            <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 justify-center min-h-[auto] w-fit">
                {userTickets.map((ticket) => (
                    <div className="bg-orange-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-fit">
                        <div className="flex flex-col items-start justify-start w-full">
                            <Text
                                className="text-gray-900_01 text-xl"
                                size="txtGilroyBold18"
                            >
                                <Link to={`/tickets/${ticket.id}`}>
                                    {ticket.issue_title}
                                </Link>
                            </Text>
                            <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                    className="bg-white-A700 h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange-400 text-base w-[81px]"
                                    size="txtGilroyRegular14"
                                >
                                    {ticket?.game?.title}
                                </Text>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


{/* <>
    <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[39px] w-full">
                    <Text
                        className="text-gray-900 text-lg"
                        size="txtGilroySemiBold18"
                    >
                        Project Management
                    </Text>
                    <div className="flex flex-col gap-8 items-center justify-end w-full">
                        <div className="flex flex-col items-center justify-end w-full">
                            <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                                        <div className="flex flex-row items-start justify-between w-full">
                                            <Text
                                                className="bg-deep_orange-A100_33 h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange-400 text-xs w-[81px]"
                                                size="txtGilroyMedium12"
                                            >
                                                Low Priority
                                            </Text>
                                            <Img
                                                className="h-6 w-6"
                                                src="images/img_user_24X24.svg"
                                                alt="user One"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <Text
                                                className="text-gray-900_01 text-lg"
                                                size="txtGilroySemiBold18Gray90001"
                                            >
                                                Brainstorming
                                            </Text>
                                            <Text
                                                className="leading-[20.00px] mt-1 text-blue_gray-400 text-xs w-full"
                                                size="txtGilroyMedium12Bluegray400"
                                            >
                                                <>
                                                    Brainstorming brings team members&#39; diverse
                                                    experience into play.{" "}
                                                </>
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</> */}