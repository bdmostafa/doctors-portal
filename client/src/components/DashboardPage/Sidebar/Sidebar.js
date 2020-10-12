import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

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
                {
                    isDoctor
                    && <>
                        <Link to='/dashboard/allPatients'>Patients</Link >
                        <Link to='/dashboard/prescriptions'>Prescriptions</Link >
                        <Link to='/dashboard/addDoctor'>Add Doctor</Link >
                        <Link to='/dashboard'>Settigns</Link >
                    </>
                }

            </ul>
            <div>
                <Link to="/"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;