import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const listStyle = {
        listStyle: 'none', 
        textDecoration: 'none',
        marginTop: '5rem', 
        display: 'inline-grid',
    }
    return (
        <div>
            <ul style={listStyle}>
                <Link to='/dashboard' >Dashboard</Link >
                <Link to='/dashboard/appointments'>Appointments</Link >
                <Link to='/dashboard/allPatients'>Patients</Link >
                <Link to='/dashboard/prescriptions'>Prescriptions</Link >
                <Link to='/dashboard/addDoctor'>Add Doctor</Link >
                <Link to='/dashboard'>Settigns</Link >
            </ul>
            <div>
                <Link to="/"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;