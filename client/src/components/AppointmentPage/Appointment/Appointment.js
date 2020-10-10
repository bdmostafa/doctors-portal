import React from 'react';
import Footer from '../../Footer/FooterTop/Footer';
import Header from '../../HomePage/Header/Header';
import AppointmentListings from '../AppointmentListings/AppointmentListings';

const Appointment = () => {
    return (
        <div>
            <Header />
            <AppointmentListings />
            <Footer />
        </div>
    );
};

export default Appointment;