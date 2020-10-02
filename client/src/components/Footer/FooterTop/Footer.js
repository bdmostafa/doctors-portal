import { Container } from '@material-ui/core';
import React from 'react';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <Container>
            <FooterTop />
        <div style={{ textAlign: 'center' }}>
            Copyright 2020. Developed by <a href="https://github.com/bdmostafa">Mostafa</a> All Right Reserved.
        </div>
        </Container>
    );
};

export default Footer;