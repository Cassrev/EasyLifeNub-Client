import { useEffect, useState } from "react"
import Popup from 'reactjs-popup'
import { useNavigate, useParams } from "react-router-dom"
import { putTicket } from "../../managers/tickets"
import "../../assets/styles/ticketEditPopUp.css"


export const TicketEdit = ({ticket}) => {
    const [editTicket, setEditTicket] = useState(ticket)
    const [categories, setCategories] = useState([])
    const { ticketId } = useParams()
    const navigate = useNavigate()

    const changeTicketState = (domEvent) => {
        const { name, value } = domEvent.target
        setEditTicket((prevTicket) => ({
            ...prevTicket,
            [name]: value,
        }))
    }


    const handleTicketEdit = (evt, close) => {
        evt.preventDefault()

        const shouldEdit = window.confirm("Are you sure you want to make ticket changes?")
        if (shouldEdit) {
            putTicket(editTicket).then(() => {
                close()
                window.location.reload(true, { replace: true })
                // navigate(`/tickets`, { replace: true })
            })
        }
    }

    return <>
        <Popup
            trigger={<button className="button"> Edit </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <form onSubmit={(evt) => handleTicketEdit(evt, close)}>
                        <div className="header"> Edit Ticket </div>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="EditTitle" className="subtitle">Title: </label>
                                <input type="text" name="issue_title" className="form-control input"
                                    value={editTicket.issue_title}
                                    onChange={changeTicketState}
                                />
                                <input
                                    type="text"
                                    name="bug_description"
                                    placeholder="Describe Bug"
                                    value={editTicket.bug_description}
                                    onChange={changeTicketState}
                                />
                            </div>
                        </fieldset>
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Cancel
                        </button>
                        <button type="submit"
                            className="btn btn-primary">
                            Save Changes
                        </button>
                    </form>
                </div>
            )
            }
        </Popup >
    </>
}