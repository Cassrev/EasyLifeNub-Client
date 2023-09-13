import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTickets } from "../../managers/tickets";
import { deleteTickets } from "../../managers/tickets"
import { getUserByToken } from "../../managers/tokens";
import { TicketEdit } from "./TicketEditPopupForm";

export const TicketList = ({ token }) => {
  const navigate = useNavigate()
  const [tickets, setTicket] = useState([])
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    if (token) {
      getUserByToken(token).then(data => setCurrentUser(data.user))
    }
  }, [token])

  useEffect(() => {
    getTickets().then((ticketsData) => setTicket(ticketsData));
  }, []);

  const handleDelete = (ticket) => {
    return (
        <button
          onClick={() => {
            const shouldDelete = window.confirm("Are you sure you want to delete this ticket?");
            if (shouldDelete) {
              deleteTickets(ticket.id).then(() => {
                navigate(`/tickets`)
              });
            }
          }}
          className="submission__delete"
        >
          Delete
        </button>
      );
    }

  return (
    <div className="ticketList">
      <h1 className="title">Issue Tickets</h1>
      <button onClick={() => navigate(`/ticketForm`)}>Create Ticket</button>

        
      <div className="tickets">
        {tickets.map((ticket) => (
          <section className="ticket" key={ticket?.id}>
            <div>==============================</div>
            <div>Title:</div>  <div className="ticketTitle"><Link to={`/tickets/${ticket?.id}`}>{ticket?.issue_title}</Link></div>
            <div>Game:</div><div className="gameTitle">{ticket?.game.title}</div>
            <div>Qa Tester:</div><div className="ticketTitle">{ticket?.qa.first_name}</div>
            {currentUser && currentUser.id === ticket?.qa.id && (
              <footer>
                {handleDelete(ticket)}
                <TicketEdit ticket={ticket} />
              </footer>
              )}
          </section>
        ))}
      </div>
    </div>
  );
};
