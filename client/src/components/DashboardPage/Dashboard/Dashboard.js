import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import PatientsList from '../PatientsList/PatientsList';
import PrescriptionsList from '../PrescriptionsList/PrescriptionsList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <AppointmentsByDate />
            <PatientsList />
            <PrescriptionsList />
        </div>
    );
};

export default Dashboard;