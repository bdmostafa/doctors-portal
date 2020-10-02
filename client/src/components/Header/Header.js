import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container className="header-link">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/services">Reviews</Link>
                </li>
                <li>
                    <Link to="/services">Blog</Link>
                </li>
                <li>
                    <Link to="/services">Contact Us</Link>
                </li>
            </ul>
        </Container>
    );
};

export default Header;