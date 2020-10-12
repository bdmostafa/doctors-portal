import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import PatientsList from '../PatientsList/PatientsList';
import PrescriptionsList from '../PrescriptionsList/PrescriptionsList';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundColor: '#F4FDFB'
    },
    sidebar: {
        backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
        color: 'white',
    },
}));


const Dashboard = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid className={classes.sidebar} item xs={12} sm={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <AppointmentsByDate />
                    </Grid>
                    <Grid item xs={12} sm={5}>

                    </Grid>
                </Grid>
            </div>


            <PatientsList />
            <PrescriptionsList />
        </div>
    );
};

export default Dashboard;


