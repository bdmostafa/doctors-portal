import React from 'react';
import Footer from '../../Footer/FooterTop/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import LearnMore from '../LearnMore/LearnMore';
import OurDoctors from '../OurDoctors/OurDoctors';
import ReviewsCard from '../Reviews/ReviewsCard';
import Services from '../Services/Services';
import Blogs from './Blogs/Blogs';

import './Home.css';

const Home = () => {
    return (
        <>
        <div className="banner-bg">
            <Header />
            <Banner />
        </div>
        <Services />
        <LearnMore />
        <ReviewsCard />
        <Blogs />
        <OurDoctors />
        <ContactUs />
        <Footer />
        </>
    );
};

export default Home;