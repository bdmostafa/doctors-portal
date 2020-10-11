import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import PatientsList from '../PatientsList/PatientsList';
import PrescriptionsList from '../PrescriptionsList/PrescriptionsList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <AppointmentList />
            <PatientsList />
            <PrescriptionsList />
        </div>
    );
};

export default Dashboard;