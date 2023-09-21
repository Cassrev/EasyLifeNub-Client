import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTicketsById } from "../../managers/tickets";

export const TicketDetail = ({ ticket }) => {
    const [ticketInfo, setTicketInfo] = useState(ticket)
    const { ticketId } = useParams()


    useEffect(() => {
        fetchTicketDetails()
    }, [ticketId])

    const fetchTicketDetails = () => {
        getTicketsById(ticketId)
            .then((data) => {
                setTicketInfo(data);
            })
    }


    return (<>
        <div>
            <h2>Ticket Details</h2>
            <p>Qa Name: {ticketInfo?.qa.first_name}</p>
            <p>Issue Title: {ticketInfo?.issue_title}</p>
            <p>Game: {ticketInfo?.game.title}</p>
            <p>Bug Description: {ticketInfo?.bug_description}</p>
            <p>Expected Result: {ticketInfo?.expected_result}</p>
            <p>Repeat Step: {ticketInfo?.repeat_step}</p>
        </div>
        </>
    )
}
