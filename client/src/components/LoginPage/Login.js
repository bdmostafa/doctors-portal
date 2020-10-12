import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import LoginBg from '../../../images/loginBg.png';
import { createUserWithEmailAndPassword, fbSignIn, loginFrameworkInit, signInWithEmailAndPassword } from './LoginManager';
import { googleSignIn } from './LoginManager';
import loginBg from '../images/loginBg.png'
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5rem',
        textAlign: 'center',
    },
    btn: {
        textAlign: 'center',
        width: '80%',
        borderRadius: '2rem',
        margin: '1rem',
        background: 'none',
        color: '#16D3E9',
        fontWeight: 'bold',
        '&:hover': {
            backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
            color: 'white',
        }
    }
}));

const Login = () => {
    // Initialize firebase/login framework
    loginFrameworkInit();

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleResponse = (res) => {
        setLoggedInUser(res);
        // Redirect when signed in
        history.replace(from);
    }



    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        // const updatedFromData = {
        //     ...data,
        // }
        const { email, password } = data;

        if (newUser && email && password) {
            createUserWithEmailAndPassword(email, password)
                .then(res => {
                    handleResponse(res);
                })
        }

        if (!newUser && email && password) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    handleResponse(res);
                })
        }
        // history.push('/dashboard');
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                handleResponse(res);
            })
    }

    const handleFbSignIn = () => {
        fbSignIn()
            .then(res => {
                handleResponse(res);
            })
    }
    // console.log(loggedInUser)

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h2 style={{ color: '#10CFE7' }}>
                        {
                            newUser ? 'Create an account' : 'Login'
                        }
                    </h2>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                            name="password"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Password*"
                        />
                        {
                            errors.password
                            && <span className="error">Password is required</span>
                        }
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            {
                                newUser ? 'Sign Up' : 'Sign In'
                            }
                        </Button>
                        <p
                            onClick={() => setNewUser(!newUser)}
                        >
                            {
                                !newUser
                                    ? <span>Haven't your account? <strong style={{ cursor: 'pointer', color: '#10CFE7' }}> Create an account </strong></span>
                                    : <span> Have you an account? <strong style={{ cursor: 'pointer', color: '#10CFE7' }}> Login here </strong> </span>
                            }
                        </p>
                    </form>
                    <br />
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="contained"
                        className={classes.btn}
                    >
                        Sign In With Google
                </Button>
                    <br />
                    <Button
                        onClick={handleFbSignIn}
                        variant="contained"
                        className={classes.btn}
                    >
                        Sign In With Facebook
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{ width: '25rem' }} src={loginBg} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;