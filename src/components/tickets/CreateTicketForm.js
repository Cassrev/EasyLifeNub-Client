import React, { useState, useEffect } from "react"
import { postTickets } from "../../managers/tickets"
import { useNavigate } from "react-router-dom"
import { getGames } from "../../managers/games"

export const CreateTicketForm = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState()
    const [ticketFormInfo, setFormCreation] = useState({
        qa: 0,
        game: "", 
        issue_title: "",
        bug_description: "",
        expected_result: "",
        repeat_step: ""
    })
    const [games, setGames] = useState([])


    useEffect(() => {
        getGames()
            .then((data) => {
                setGames(data)
            })
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setFormCreation((prevFormInfo) => ({
            ...prevFormInfo,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        postTickets(ticketFormInfo).then(() => {
            navigate(`/tickets`)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select a Game:
                <select
                    name="game"
                    value={ticketFormInfo.game}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select a game</option>
                    {games.map((game) => (
                        <option key={game.id} value={game.id}>
                            {game.title}
                        </option>
                    ))}
                </select>
            </label>
            <input
                type="text"
                name="issue_title"
                placeholder="Issue Title"
                value={ticketFormInfo.issue_title}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="bug_description"
                placeholder="Describe Bug"
                value={ticketFormInfo.bug_description}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="expected_result"
                placeholder="What is the expected result?"
                value={ticketFormInfo.expected_result}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="repeat_step"
                placeholder="What are the steps to reproduce the bug?"
                value={ticketFormInfo.repeat_step}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Submit Ticket</button>
        </form>
    )
}
