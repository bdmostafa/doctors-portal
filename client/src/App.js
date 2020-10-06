import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Appointment from './components/AppointmentPage/Appointment/Appointment';


function App() {
  return (
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
    {/*edited*/}
    </Router>
  );
}

export default App;
