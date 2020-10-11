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

export const userContext = createContext();

function App() {
  const [appointment, setAppointment] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={{appointment, setAppointment, loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
