import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Appointment from './components/AppointmentPage/Appointment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/LoginPage/PrivateRoute';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import Login from './components/LoginPage/Login';

export const UserContext = createContext();

function App() {
  const [appointment, setAppointment] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{appointment, setAppointment, loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
           {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/appointments">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allPatients">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/prescriptions">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addDoctor">
            <Dashboard />
          </PrivateRoute>
         
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
