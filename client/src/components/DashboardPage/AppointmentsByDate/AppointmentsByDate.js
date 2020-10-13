import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import './AppointmentsByDate.css';
import AppointmentsTable from './AppointmentsTable';

const AppointmentList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const { loggedInUser } = useContext(UserContext);

    const handleAppointmentDate = (date) => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://serene-oasis-14480.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <>
            <Grid item xs={12} sm={5}>
                <h1 style={{ marginBottom: '5rem' }}>Appointment</h1>
                <div>
                    <Calendar
                        onChange={handleAppointmentDate}
                        value={selectedDate}
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={7}>
                <div className="appointments-date-heading">
                    <h2>Total Appointments {appointments.length}</h2>
                    <h4>{selectedDate.toDateString()}</h4>
                </div>
                {
                    appointments.length === 0
                        ? <small>There is no appointments on this date</small>
                        : <AppointmentsTable appointments={appointments}></AppointmentsTable>
                }
            </Grid>
        </>
    );
};

export default AppointmentList;

