import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const AppointmentsTable = ({ appointments }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Schedule</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        // console.log(appointment)
                        <TableRow key={appointment._id}>
                            <TableCell component="th" scope="row">
                                {appointment.name}
                            </TableCell>
                            <TableCell align="right">{appointment.schedule}</TableCell>
                            <TableCell align="right">
                                <Button
                                variant="contained"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                    color: 'white'
                                }}
                                >
                                    {appointment.action ? 'Visited' : 'Not Visited'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AppointmentsTable;