import { Backdrop, Box, Button, Card, CardContent, Container, Fade, makeStyles, MenuItem, Modal, Select, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './ApointmentListings.css';
import { useForm } from "react-hook-form";
import doctorsList from '../../DoctorsList/DoctorsList';
import { userContext } from '../../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 250
    },
    firstBox: {
        backgroundColor: 'lightgreen',
        color: 'white',
        minHeight: 250
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        minWidth: '20rem',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '1rem',
        padding: theme.spacing(2, 4, 3),
    },
}));

const AppointmentListings = () => {
    const classes = useStyles();
    const today = new Date().toDateString();

    const [appointment, setAppointment] = useContext(userContext);

    // Update appoinment state from input form data
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => setAppointment(data);

    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <Container className="listings-area">
            <h2>Available Appointments on {today} </h2>
            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    {
                        doctorsList.map(i =>
                            <Box p={1}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h4" component="h2">
                                            {i.Department}
                                        </Typography>
                                        <Typography variant="h6" component="h4">
                                            10.05 am - 11.30 am
                                        </Typography>
                                        <Typography variant="body2" component="h4">
                                            10 spaces available
                                        </Typography>
                                    </CardContent>
                                    <Button
                                        onClick={handleModalOpen}
                                    >
                                        Book Appoinment
                                    </Button>

                                </Card>
                            </Box>
                        )
                    }
                </Box>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Teeth Cleaning</h2>
                        <form
                            className="contact-form"
                            onSubmit={handleSubmit(onSubmit)}>
                            <section>
                                <label>Select Time</label>
                                <Select>
                                    <MenuItem value={10}>10.00 am</MenuItem>
                                    <MenuItem value={20}>11.00 am</MenuItem>
                                    <MenuItem value={30}>12.30 pm</MenuItem>
                                </Select>
                            </section>
                            <input
                                name="name"
                                type="text"
                                ref={register({ required: true })}
                                placeholder="Your Name*"
                            />
                            {
                                errors.name
                                && <span className="error">Email is required</span>
                            }
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
                                name="phone"
                                type="number"
                                ref={register({ required: true })}
                                placeholder="Phone Number*"
                            />
                            {
                                errors.phone
                                && <span className="error">Phone Number is required</span>
                            }
                            <input
                                name="date"
                                type="date"
                                ref={register({ required: true })}
                                placeholder="mm/dd/yyyy*"
                            />
                            {
                                errors.date
                                && <span className="error">Date is required</span>
                            }
                            <br />
                            <input
                                type="submit"
                                placeholder="SEND"
                            />
                            <Button></Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </Container>
    );
};

export default AppointmentListings;