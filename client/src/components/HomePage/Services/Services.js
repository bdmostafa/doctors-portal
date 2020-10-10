import { Box, Container } from '@material-ui/core';
import React from 'react';
import servicesInfoData from '../../DataStore/ServicesInfoData';

const Services = () => {
    return (
        <Container align="center" style={{ marginTop: '5rem', width: '85%' }}>
            <h4 style={{ color: '#1CC7C1' }}>OUR SERVICES</h4>
            <h2 style={{ color: '#203047', fontWeight: 'bold' }}>Services We Provide</h2>
                <Box display="flex" justifyContent="center" m={1} p={4}>
                    {
                        servicesInfoData.map((service, idx) =>
                            <Box key={idx} p={5}>
                                <img style={{width: '50px'}} src={service.img} alt="" />
                                <h3 style={{ color: '#203060', margin: '1.5rem' }}>{service.name}</h3>
                                <p>{service.description}</p>
                            </Box>
                        )
                    }
                </Box>
        </Container>
    );
};

export default Services;