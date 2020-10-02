import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    list: {
        '& ul': {
            listStyle: 'none',
            marginLeft: '-2.5rem'
        },
        '& h2': {
            color: 'skyblue'
        }
    }
}));

const FooterTop = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h2>About Us</h2>
                    <ul>
                        <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Scheduling</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h2>Services</h2>
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
                    <h2>Services</h2>
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
                    <h2>Our Address</h2>
                    <p>New York - 101010 Hudson Yards</p>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <p>Call Now</p>
                    <Button variant="contained" color="primary">
                        <input type="tel" name="" id="" value="+12587658425" style={{background: 'none', border: 'none', color: 'white'}}/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default FooterTop;