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
        '& .MuiTableCell-head': {
            fontWeight: 'bold'
        }
    },
});

const PatientsListTable = ({ appointments }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sr. No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell align="center">Contact</TableCell>
                        <TableCell align="center">Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment, idx) => (
                        <TableRow key={appointment._id}>
                            <TableCell component="th" scope="row">
                                {idx + 1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {appointment.name}
                            </TableCell>
                            <TableCell align="center">{appointment.gender}</TableCell>
                            <TableCell align="center">{appointment.age}</TableCell>
                            <TableCell align="center">{appointment.weight}</TableCell>
                            <TableCell align="center">{appointment.phone}</TableCell>
                            <TableCell align="center">{appointment.dept}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PatientsListTable;