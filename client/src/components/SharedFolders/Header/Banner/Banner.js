import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import bannerImg from '../../../images/Mask Group 1.png'
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bannerArea: {
        marginBottom: '10rem',
        paddingTop: '5rem'
    }
}));

const Banner = ({ date, handleAppointmentDate }) => {
    const classes = useStyles();
    const history = useHistory();
    const path = useLocation().pathname;

    const handleAppointmentBtn = () => {
        history.push('/appointment')
    }

    return (
        <Container>
            <div className={classes.root}>
                <Grid className={classes.bannerArea} container spacing={3}>
                    {
                        path === '/appointment'
                        && <Grid item xs={12} md={5}>
                            <h1 style={{marginBottom: '5rem'}}>Appointment</h1>
                            <div>
                                <Calendar
                                    onChange={handleAppointmentDate}
                                    value={date}
                                />
                            </div>
                        </Grid>
                    }
                    {
                        path !== '/appointment'
                        && <Grid item md={5}>
                            <h2 style={{ color: '#3A4256', marginBottom: '1.5rem' }}>Your New Smile <br /> Starts Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique, cum eum itaque sit officiis, magni <br /> asperiores ducimus ea vel neque ipsam <br /> quaerat!</p>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                    color: 'white'
                                }}
                                onClick={handleAppointmentBtn}
                            >
                                GET APPOINMENT
                            </Button>
                        </Grid>
                    }

                    <Grid item md={7}>
                        <img style={{ width: '100%' }} src={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </div>
            {
                path !== '/appointment'
                && <BusinessInfoCard />
            }
        </Container>
    );
};

export default Banner;
