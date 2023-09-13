export const getTickets = () => {
  return fetch("http://localhost:8000/tickets", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then(res => res.json());
};

export const getTicketsById = (id) => {
  return fetch(`http://localhost:8000/tickets/${id}`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
  .then(res => res.json());
};

export const getTicketsByUser = (userId) => {
  return fetch(`http://localhost:8000/posts?user=${userId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then(res => res.json());
};

export const viewUserTicket = ({ token }) => {
  return fetch(`http://localhost:8000/tickets?user=current`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then((res) => res.json());
};

export const postTickets = (newTicket) => {
  return fetch("http://localhost:8000/tickets", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
      },
    body: JSON.stringify(newTicket)
  }).then(res => res.json());
};

export const putTicket = (ticket) => {
  return fetch(`http://localhost:8000/tickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(ticket)
  })
}

export const deleteTickets = (ticketId) => {
  return fetch(`http://localhost:8000/tickets/${ticketId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
        })
        .then(() => {
            window.location.reload()
        })
}


