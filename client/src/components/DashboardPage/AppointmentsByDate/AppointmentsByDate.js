import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAppointmentDate = (date) => {
        setSelectedDate(date)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
                <h1 style={{ marginBottom: '5rem' }}>Appointment</h1>
                <div>
                    <Calendar
                        onChange={handleAppointmentDate}
                        value={selectedDate}
                    />
                </div>
            </Grid>

        </Grid>
    );
};

export default AppointmentList;