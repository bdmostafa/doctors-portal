import { Box, Container } from '@material-ui/core';
import React from 'react';
import tooth from '../../images/tooth (1).png';
import tooth1 from '../../images/tooth.png';
import dental from '../../images/001-dental.png';

const Services = () => {
    return (
        <Container>
            <h4>OUR SERVICES</h4>
            <h2>Services We Provide</h2>
            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Box p={1}>
                    <img src={dental} alt=""/>
                        <h3>Fluoride Treatment</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione!</p>
                    </Box>
                    <Box p={1}>
                    <img src={tooth} alt=""/>
                        <h3>Cavity Filling</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione!</p>
                    </Box>
                    <Box p={1}>
                    <img src={tooth1} alt=""/>
                        <h3>Teeth Whitening</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione!</p>
                    </Box>
                </Box>
            </div>
        </Container>
    );
};

export default Services;