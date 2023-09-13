import React, { useState, useEffect } from "react";
import { postTickets, deleteTicket } from "../../managers/tickets";
import { useNavigate } from "react-router-dom";
import { getGames } from "../../managers/games";

export const TicketDetail = ({ ticket, currentUser }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteTicket(ticket.id)
            .then(() => {
                navigate(`/tickets`);
            })
    };

    return (
        <div>
            <h2>Ticket Details</h2>
            <p>Issue Title: {ticket.issue_title}</p>
            <p>Bug Description: {ticket.bug_description}</p>
            <p>Expected Result: {ticket.expected_result}</p>
            <p>Repeat Step: {ticket.repeat_step}</p>

            {currentUser && currentUser.id === ticket.qa_id && (
                <button onClick={handleDelete}>Delete Ticket</button>
            )}
        </div>
    );
};
