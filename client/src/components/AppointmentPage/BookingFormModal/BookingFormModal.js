import { Backdrop, Button, Fade, makeStyles, Modal } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const useStyles = makeStyles((theme) => ({
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


const BookingFormModal = ({ openModal, handleModalClose, selectedDepartment, visitngHour, selectedDate }) => {
    const classes = useStyles();

    const history = useHistory();

    const { appointment, setAppointment } = useContext(UserContext);

    // Update appoinment state from input form data
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        const updatedFromData = { 
            ...data,
            dept: selectedDepartment,
            schedule: visitngHour,
            date: selectedDate.toDateString()
        }

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updatedFromData)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                setAppointment(updatedFromData);
                handleModalClose();
                alert('Appoinment created successfully');
                history.push('/dashboard');
            }
        })
    }
// console.log(appointment)
    return (
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
                    <h2
                        id="transition-modal-title"
                        style={{
                            color: '#1CC7C1',
                            textAlign: 'center'
                        }}
                    >
                        {selectedDepartment}
                    </h2>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* <input
                            disabled
                            name="time"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Visiting Hour"
                            defaultValue={visitngHour}
                        />
                        {
                            errors.time
                            && <span className="error">Visiting Hour is required</span>
                        } */}
                        <p style={{ textAlign: 'center' }}>
                            Your appointment on
                            <strong> {visitngHour}</strong>
                            <br />
                            at
                            <strong> {selectedDate.toDateString()}
                            </strong>
                        </p>
                        <input
                            name="name"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Your Name*"
                        />
                        {
                            errors.name
                            && <span className="error">Name is required</span>
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
                            && <span className="error">Phone number is required</span>
                        }
                        <select name="gender" ref={register({ required: true })}>
                            <option disabled selected >Select your gender</option>
                            <option defaultValue="female">Male</option>
                            <option defaultValue="male">Female</option>
                            <option defaultValue="other">Other</option>
                        </select>
                        {
                            errors.gender
                            && <span className="error">Your age is required</span>
                        }
                        <input
                            name="age"
                            type="number"
                            ref={register({ required: true })}
                            placeholder="Your age*"
                        />
                        {
                            errors.age
                            && <span className="error">Your age is required</span>
                        }
                        <input
                            name="weight"
                            type="number"
                            ref={register({ required: true })}
                            placeholder="Your weight*"
                        />
                        {
                            errors.weight
                            && <span className="error">Your weight is required</span>
                        }
                        {/* <input
                            disabled
                            name="date"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="mm/dd/yyyy*"
                            defaultValue={selectedDate.toDateString()}
                        />
                        {
                            errors.date
                            && <span className="error">Date is required</span>
                        } */}
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                color: 'white',
                                width: 'fit-content',
                                textAlign: 'center',
                                marginLeft: 'auto'
                            }}
                        >
                            SEND
                        </Button>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

export default BookingFormModal;