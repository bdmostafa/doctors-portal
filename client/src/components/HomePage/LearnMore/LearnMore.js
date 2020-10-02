import { Box, Button, Container } from '@material-ui/core';
import React from 'react';
import imageBaby from '../../images/Mask Group 3.png'
import dr from '../../images/5790-removebg.png'

const LearnMore = () => {
    return (
        <Container>
            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Box p={1}>
                    <img style={{ width: '100%' }} src={imageBaby} alt=""/>
                    </Box>
                    <Box p={1}>
                        <h2>Exceptional Dental Care, on Your Terms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione! ipsum dolor sit amet consectetur adipisicing elit. ati, ratione! ipsum dolor sit amet consectetur adipisicing elit. ati, ratione! ipsum dolor sit amet consectetur adipisicing elit. ati, ratione! ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratio ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratio </p>
                        <Button> Learn More</Button>
                    </Box>
                </Box>
            </div>
            <div style={{ width: '100%', background: 'gray', maxHeight: '25rem' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Box style={{position: 'relative'}} p={1}>
                    <img style={{ height: '24rem' }} src={dr} alt=""/>
                    </Box>
                    <Box p={1}>
                        <h4>APPOINTMENT</h4>
                        <h2>Make An APpointment Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione! ipsum dolor sit amet consectetur adipisicing elit Obcaecati, ratio </p>
                        <Button> Learn More</Button>
                    </Box>
                </Box>
            </div>
        </Container>
    );
};

export default LearnMore;