import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import dr from '../../images/dr-caudi.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10rem',
        flexGrow: 1,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(https://i.ibb.co/wdRfrqb/Mask-Group-1.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '420px',
        backgroundPosition: 'center center',
        color: 'white',
        '& MuiContainer-root::before': {
            content: '',
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: '#40485C',
            opacity: '.9',
            top: '0'
        }
    },
    imgStyle: {
        height: '550px',
        transform: 'translateY(-150px)'
    }
}));

const LearnMore = () => {
    const history = useHistory();

    const classes = useStyles();

    const handleAppointment = () => {
        history.push('/appointment')
    }


    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={5}>
                        <Box p={1}>
                            <img className={classes.imgStyle} src={dr} alt="" />
                        </Box>
                    </Grid>
                    <Grid style={{position: 'relative'}} item xs={12} sm={7}>
                        <Box p={5}>
                            <h4 m={5} style={{ color: '#15D1C5', margin: '15px 0' }}>APPOINTMENT</h4>
                            <h2>Make An APpointment <br /> Today</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione! ipsum dolor sit amet consectetur adipisicing elit Obcaecati, ratio </p>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                    color: 'white',
                                    marginTop: '20px'
                                }}
                                onClick={handleAppointment}
                            >
                                LEARN MORE
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LearnMore;