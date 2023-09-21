import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Modal, TextInput, Label, Textarea, Alert } from 'flowbite-react';

export const AlertConfirmTicketChangeWindow = ({ onConfirm, onCancel }) => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState("");
    
    return (
        <Modal show={true}>
            <Modal.Header>
                <Alert color="warning" rounded>
                    <span>
                        <p>
                            <span className="font-medium">
                                Are you sure you want to make ticket changes?
                            </span>
                        </p>
                    </span>
                </Alert>
                <Button onClick={onConfirm}>Yes</Button>
                <Button color="gray" onClick={onCancel}>
                    No
                </Button>
            </Modal.Header>
        </Modal>
    );
};
