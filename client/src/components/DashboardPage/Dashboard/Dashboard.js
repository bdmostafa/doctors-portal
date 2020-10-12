import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AddDoctor from '../AddDoctor/AddDoctor';
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
    rightSide: {
        display: 'flex',
        padding: '3rem !important'
    }
}));


const Dashboard = () => {
    const classes = useStyles();
    const path = useLocation().pathname;

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid className={classes.sidebar} item xs={12} sm={2}>
                        <Sidebar />
                    </Grid>
                    <Grid className={classes.rightSide} item xs={12} sm={10}>
                        {
                            path === '/dashboard/appointments' && <AppointmentsByDate />
                        }
                        {
                            path === '/dashboard/allPatients' && <PatientsList />
                        }
                        {
                            path === '/dashboard/prescriptions' && <PrescriptionsList />
                        }
                        {
                            path === '/dashboard/addDoctor' && <AddDoctor />
                        }
                    </Grid>
                </Grid>
            </div>

            
            
            
        </>
    );
};

export default Dashboard;


