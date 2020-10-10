import React from 'react';
import './ContactUs.css';
import { useForm } from "react-hook-form";
import { Button, Container, TextareaAutosize } from '@material-ui/core';


const ContactUs = () => {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contact-area">
            <Container>
                <h4 style={{ color: '#1CC7C1' }}>CONTACT US</h4>
                <h2>Always Connect With Us</h2>
                <form
                    className="contact-form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="email"
                        type="email"
                        ref={register({ required: true })}
                        placeholder="Email Address*"
                    />
                    {
                        errors.email
                        && <span className="error">Email is required</span>
                    }
                    <input
                        name="subject"
                        ref={register({ required: true })}
                        placeholder="Subject*"
                    />
                    {
                        errors.subject
                        && <span className="error">Subject is required</span>
                    }
                    <TextareaAutosize
                        style={{
                            border: 'none',
                            padding: '.75rem'
                        }}
                        required
                        rowsMin={7}
                        aria-label="maximum height"
                        placeholder="Your Message *"
                        defaultValue=""
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        className="submit-btn"
                        style={{margin: '0 auto'}}
                    >
                        SUBMIT
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default ContactUs;