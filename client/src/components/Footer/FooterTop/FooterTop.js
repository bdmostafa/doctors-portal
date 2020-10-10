import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        '& ul': {
            listStyle: 'none',
            marginLeft: '-2.5rem'
        },
        '& h3': {
            color: '#1CC7C1',
            fontWeight: 'bold', 
            marginBottom: '2rem'
        },
        '& svg': {
            fontSize: '3rem',
            border: '1px solid #1CC7C1',
            marginRight: '5px',
            borderRadius: '5rem',
            padding: '5px',
            color: '#1CC7C1',
            cursor: 'pointer',
            '&:hover': {
                color: 'white',
                backgroundColor: '#1CC7C1'
            }
        }
    }
}));

const FooterTop = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>About Us</h3>
                    <ul>
                        <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Scheduling</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Services</h3>
                    <ul>
                        <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Scheduling</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Services</h3>
                    <ul>
                        <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Scheduling</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Our Address</h3>
                    <p>New York - 101010 Hudson Yards</p>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <br /> <br />
                    <p>Call Now</p>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                            color: 'white',
                        }}
                        type="tel"
                    >
                        +12587658425
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default FooterTop;