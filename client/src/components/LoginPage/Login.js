import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../images/loginBg.png';
import loginFrameworkInit from './LoginManager';
import googleSignIn from './LoginManager';

const Login = () => {
    // Initialize firebase/login framework
    loginFrameworkInit();

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                setLoggedInUser(res);
                // Redirect when signed in
                history.replace(from);
            })
    }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={LoginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;