import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        const totalData = JSON.stringify(data);
        formData.append('total', totalData)
        formData.append('file', data.file[0]);
        console.log('data', data);
        console.log(typeof formData);
        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You added a doctor successfully.')
                    // history.replace('/')
                }
            })
    }

    return (
        <div>
            <form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2>Add Doctor</h2>
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
                    name="department"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Your Department*"
                />
                {
                    errors.department
                    && <span className="error">Department is required</span>
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
                    name="file"
                    type="file"
                    ref={register({ required: true })}
                    placeholder="Your weight*"
                />
                {
                    errors.file
                    && <span className="error">Your profile picture is required</span>
                }
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                        color: 'white',
                        width: 'fit-content',
                        textAlign: 'center',
                        margin: '0 auto'
                    }}
                >
                    SEND
                        </Button>
            </form>
        </div>
    );
};

export default AddDoctor;