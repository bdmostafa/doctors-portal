import React, { useState } from 'react';
import Header from '../../SharedFolders/Header/Header';
import Footer from '../../SharedFolders/Footer/Footer';
import AppointmentListings from '../AppointmentListings/AppointmentListings';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAppointmentDate = (date) => {
        setSelectedDate(date)
    }
console.log(selectedDate)
    return (
        <>
            <Header selectedDate={selectedDate} handleAppointmentDate={handleAppointmentDate} />
            <AppointmentListings />
            <Footer />
        </>
    );
};

export default Appointment;