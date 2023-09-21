import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTickets } from "../../managers/tickets";
import { deleteTickets } from "../../managers/tickets"
import { getUserByToken } from "../../managers/tokens";
import { TicketEdit } from "../../components/tickets/TicketEditPopupForm";
import { Text } from "components/ui/uiexport";
import { Button } from "flowbite-react";

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
      <Button
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
      </Button>
    );
  }


  return (
    <>
      <div className="mt-10">
        <div className="flex flex-1 flex-col justify-center md:mt-0 mt-[39px] w-fit">
          <Text
            className="text-gray-900 text-2xl"
            size="txtGilroySemiBold18"
          >
            Issue Tickets
          </Text>
          <Button onClick={() => navigate(`/ticketForm`)}>Create Ticket</Button>
        </div>

        <div className="grid px-4 pt-6 grid-cols-3 xl:gap-4 w-fit">
          {tickets.map((ticket) => (
            <div className="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 w-full">
              <Text
                className="text-xl w-fit"
                size="txtGilroyBold18"
              >
                <Link to={`/tickets/${ticket?.id}`}>{ticket?.issue_title}</Link>
              </Text>

              <Text
                className="pb-0.5 pt-[5px] px-[9px] rounded text-base w-fit"
                size="txtGilroyRegular14"
              >
                {ticket?.game?.title}
              </Text>
              <Text
                className="pb-0.5 pt-[5px] px-[9px] rounded text-base  w-fit"
                size="txtGilroyRegular14"
              >
                Qa: {ticket?.qa.first_name}
              </Text>

              {currentUser && currentUser.id === ticket?.qa.id && (
                <footer className="flex w-fit">
                  {handleDelete(ticket)}
                  < TicketEdit ticket={ticket} />
                </footer>
              )}

            </div>
          ))}
        </div>
      </div>
    </>
  )
}
