import { useState } from 'react';
import GoogleIcon from '../../../../assets/images/google-icon.svg';
import AppleIcon from '../../../../assets/images/apple-icon.svg';
import Hide from '../../../../assets/images/hide.svg';
import Show from '../../../../assets/images/show.svg';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordShow = (password) => {
        if (password === 'password') {
            setShowPassword(!showPassword);
            return;
        }

        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="register">
            <aside className="left-side">Dash.</aside>
            <section className="right-side">
                <div className="content">
                    <h1>Create an account</h1>
                    <div className="sign-message">Create an account to use dashboard</div>
                    <div className="logo-section">
                        <button className="google-logo">
                            <img src={GoogleIcon} alt="google" height="14px" width="14px" />
                            <p>Sign up with Google</p>
                        </button>
                        <button className="apple-logo">
                            <img src={AppleIcon} alt="google" height="14px" width="14px" />
                            <p>Sign up with Apple</p>
                        </button>
                    </div>
                    <form>
                        <div className="name">
                            <div className="first-name">
                                <div className="label">First Name</div>
                                <input type="text" name="First name" />
                            </div>
                            <div className="last-name">
                                <div className="label">Last Name</div>
                                <input type="text" name="Last name" />
                            </div>
                        </div>
                        <div className="label">Email Address</div>
                        <input required type="email" name="email" />
                        <div className="label">Password</div>
                        <div className="password-container">
                            <input required type={showPassword ? 'text' : 'password'} name="password" />
                            <img src={showPassword ? Hide : Show} onClick={() => togglePasswordShow('password')} alt="show"></img>
                        </div>

                        <div className="label">Confirm Password</div>
                        <div className="password-container">
                            <input required type={showConfirmPassword ? 'text' : 'password'} name="confirm" />
                            <img src={showConfirmPassword ? Hide : Show} onClick={() => togglePasswordShow()} alt="show"></img>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" name="agree" />
                            <div>
                                I agree the <a href="#"> terms and conditions </a>
                            </div>
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>

                    <div className="login-link">
                        Already have an account? <Link to="/login">Sign in here</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
