import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PatientsListTable from './PatientsListTable';

const PatientsList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://serene-oasis-14480.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <>
            <Grid item sm={12}>
                <div className="appointments-date-heading">
                    <h2>Total Patients: {appointments.length}</h2>
                    <Button>Week</Button>
                </div>
                {
                    appointments.length === 0
                        ? <small>There is no patients listed on database</small>
                        : <PatientsListTable appointments={appointments}></PatientsListTable>
                }
            </Grid>
        </>
    );
};

export default PatientsList;