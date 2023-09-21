import { useEffect, useState } from "react"
import { putTicket } from "../../managers/tickets"
import { Button, Modal, TextInput, Label, Textarea } from 'flowbite-react';

export const TicketEdit = ({ ticket }) => {
    const [editTicket, setEditTicket] = useState(ticket)
    const [openModal, setOpenModal] = useState("");
    const props = { openModal, setOpenModal };

    const changeTicketState = (domEvent) => {
        const { name, value } = domEvent.target
        setEditTicket((prevTicket) => ({
            ...prevTicket,
            [name]: value,
        }))
    }

    const handleTicketEdit = () => {
        putTicket(editTicket).then(() => {
            window.location.reload(true, { replace: true })
        })
    }

    return <>
        <Button onClick={() => props.setOpenModal('form-elements')}>Edit</Button>
        <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
            <Modal.Header>Edit Ticket</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Edit Ticket Title" />
                        </div>
                        <TextInput id="title" type="text" name="issue_title" value={editTicket.issue_title} onChange={changeTicketState} />
                        <div
                            className="max-w-md"
                            id="textarea"
                        >
                            <div className="mb-2 block">
                                <Label htmlFor="bugdesc" value="Edit Bug Description" />
                            </div>
                            <Textarea
                                id="bugdesc"
                                name="bug_description"
                                placeholder="Describe Bug"
                                value={editTicket.bug_description}
                                onChange={changeTicketState}
                                rows={4}
                            />
                        </div>
                    </div>
                    <Button color="success"
                        type="submit"
                        onClick={() => {
                            props.setOpenModal(undefined)
                            handleTicketEdit();
                        }}>
                        Save Changes
                    </Button>
                    <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                        No, cancel
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    </>
}