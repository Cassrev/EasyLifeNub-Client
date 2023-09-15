import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { viewUserTicket } from '../../../managers/tickets';
import { Link } from 'react-router-dom';
import { Table, TableContainer, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

export const CustomizedTablesCardTicket = () => {
    const [userTickets, setUserTickets] = useState([]);
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

    useEffect(() => {
        viewUserTicket({ token }).then((ticketData) => setUserTickets(ticketData))
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Your Tickets
            </Typography>
            {userTickets.map((ticket) => (
                <Grid container spacing={5}>
                    <Grid xs={3}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Item>
                                <Card variant="outlined" sx={{ backgroundColor: 'orange' }}>
                                    <section className="ticketyours column" key={ticket.id}>
                                        <div><Link to={`/tickets/${ticket.id}`}>{ticket.issue_title}</Link></div>
                                        <div>{ticket?.game?.title}</div>
                                    </section>
                                </Card>
                            </Item>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}


