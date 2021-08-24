import React from 'react';
import GoogleIcon from '../../../../assets/images/google-icon.svg';
import AppleIcon from '../../../../assets/images/apple-icon.svg';
import { Link, useHistory } from 'react-router-dom';

import './styles.scss';

const Login = () => {
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        history.push(`/`);
    };
    return (
        <div className="login">
            <aside className="left-side">Dash.</aside>
            <section className="right-side">
                <div className="content">
                    <h1>Sign In</h1>
                    <div className="sign-message">Sign in to your account</div>
                    <div className="logo-section">
                        <button className="google-logo">
                            <img src={GoogleIcon} alt="google" height="14px" width="14px" />
                            <p>Sign in with Google</p>
                        </button>
                        <button className="apple-logo">
                            <img src={AppleIcon} alt="google" height="14px" width="14px" />
                            <p>Sign in with Apple</p>
                        </button>
                    </div>
                    <form onSubmit={submitForm}>
                        <div className="label">Email Address</div>
                        <input required type="email" name="email" />
                        <div className="label">Password</div>
                        <input required type="password" name="password" />
                        <div className="forgot-password">Forgot password? </div>
                        <button type="submit">Sign In</button>
                    </form>

                    <div className="register-link">
                        Don't have an account? <Link to="/register">Register here</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
