import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import bannerImg from '../../images/Mask Group 1.png'
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { useHistory, useLocation } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(https://i.ibb.co/xGczynr/Mask-Group-2.png)`,
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left'
    },
    bannerArea: {
        marginBottom: '10rem',
        paddingTop: '5rem'
    },
    box: {
        marginTop: '-10rem',
        display: 'flex',
        backgroundColor: 'cornflowerblue',
        color: 'white',
        marginRight: '10px',
        padding: '1.5rem',
        maxHeight: '130px',
        '& h4': {
            marginBottom: '-.5rem'
        }
    },
    iconStyle: {
        paddingTop: '2rem',
        paddingRight: '1rem',
        fontSize: '3rem'
    },
    MuiSvgIconRoot: {
        fontSize: '3rem'
    }
}));



const Banner = () => {
    const classes = useStyles();
    const history = useHistory();
    const path = useLocation().pathname;
    const [date, setDate] = useState(new Date());

    const handleAppointment = () => {
        history.push('/appointment')
    }

    const handleDate = (date) => {
        setDate(date)
    }
console.log(path)
    return (
        <Container >
            <div className={classes.root}>
                <Grid className={classes.bannerArea} container spacing={3}>
                    {
                        path === '/appointment'
                        && <Grid item xs={12} sm={6}>
                            <h1>Appointment</h1>
                            <div>
                                <Calendar
                                    onChange={handleDate}
                                    value={date}
                                />
                            </div>
                        </Grid>
                    }
                    {
                        path !== '/appointment'
                        && <Grid item xs={12} sm={6}>
                            <h2>Your New Smile Starts Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, cum eum itaque sit officiis, magni asperiores ducimus ea vel neque ipsam quaerat!</p>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAppointment}
                            >
                                GET APPOINMENT
                        </Button>
                        </Grid>
                    }

                    <Grid item xs={12} sm={6}>
                        <img style={{ width: '100%' }} src={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </div>
            {
                path !== '/appointment'
                && <Grid container spacing={0}>
                    <Grid className={classes.box} item xs>
                        <div>
                            <AccessTimeIcon className={classes.iconStyle} />
                        </div>
                        <div>
                            <h4>Opening Hours</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Grid>
                    <Grid className={classes.box} item xs>
                        <div>
                            <RoomIcon className={classes.iconStyle} />
                        </div>
                        <div>
                            <h4>Visit Our Location</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Grid>
                    <Grid className={classes.box} item xs>
                        <div>
                            <PhoneInTalkIcon className={classes.iconStyle} />
                        </div>
                        <div>
                            <h4>Contact Us Now</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Grid>
                </Grid>
            }

        </Container>
    );
};

export default Banner;
