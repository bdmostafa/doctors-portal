import React, { useState } from 'react';
import Header from '../../SharedFolders/Header/Header';
import Footer from '../../SharedFolders/Footer/Footer';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAppointmentDate = (date) => {
        setSelectedDate(date)
    }

    return (
        <>
            <Header selectedDate={selectedDate} handleAppointmentDate={handleAppointmentDate} />
            <AvailableAppointments selectedDate={selectedDate} />
            <Footer />
        </>
    );
};

export default Appointment;