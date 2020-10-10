import React from 'react';
import Navbar from './NavBar/NavBar';
import './Header.css';
import Banner from './Banner/Banner';
import { useLocation } from 'react-router-dom';


const Header = ({ selectedDate, handleAppointmentDate }) => {
    const path = useLocation().pathname;

    return (
        <div className={ path === '/appointment' ? 'header-appointment' : 'header-container'}>
            <Navbar />
            <Banner selectedDate={selectedDate} handleAppointmentDate={handleAppointmentDate} />
        </div>
    );
};

export default Header;