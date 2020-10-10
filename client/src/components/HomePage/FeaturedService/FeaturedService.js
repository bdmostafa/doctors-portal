import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import imageBaby from '../../images/Mask Group 3.png'

const LearnMore = () => {
    return (
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={5}>
                    <Box p={1}>
                        <img style={{ width: '100%' }} src={imageBaby} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box p={3}>
                        <h2>Exceptional Dental <br /> Care, on Your Terms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione! ipsum dolor sit amet consectetur adipisicing elit. ati, ratione! ipsum dolor sit amet consectetur adipisicing elit. ati, ratione!  adipisicing elit. Obcaecati, ratio ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratio </p>
                        <Button
                            variant="contained"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                color: 'white'
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LearnMore;