import { Container, Grid } from '@material-ui/core';
import React from 'react';
import availableAppointmentLists from '../../DataStore/AvailableAppointmentLists';
import BookingCard from '../BookingCard/BookingCard';


const AppointmentListings = ({ selectedDate }) => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#1cc7c1', marginTop: '5rem' }}>Available Appointments on {selectedDate.toDateString()} </h2>
            <Grid container spacing={1} style={{ margin: '5rem' }}>
                {
                    availableAppointmentLists.map(list =>
                        <BookingCard
                            key={list.id}
                            selectedDate={selectedDate}
                            list={list}
                        />
                    )
                }
            </Grid>
        </Container>
    );
};

export default AppointmentListings;