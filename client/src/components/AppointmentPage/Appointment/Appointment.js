import React from 'react';
import Footer from '../../Footer/FooterTop/Footer';
import Header from '../../Header/Header';
import Banner from '../../HomePage/Banner/Banner';
import AppointmentListings from '../AppointmentListings/AppointmentListings';

const Appointment = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AppointmentListings />
            <Footer />
        </div>
    );
};

export default Appointment;