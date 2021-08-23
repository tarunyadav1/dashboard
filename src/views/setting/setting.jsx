import { useState } from 'react';

import './setting.scss';
import ProfileCard from '../../ui-component/ProfileCard/ProfileCard';

import Hide from '../../assets/images/hide.svg';
import Show from '../../assets/images/show.svg';

const AccountCard = () => {
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
        <div className="account-card">
            <div className="title">
                <h3>Account</h3>
            </div>

            <div className="form">
                <form>
                    <div className="email">
                        <label>Email address</label>
                        <input type="email" name="email" />
                    </div>

                    <div className="current-password">
                        <label>Current Password</label>

                        <div className="password-container">
                            <input required type={showPassword ? 'text' : 'password'} name="password" />
                            <img src={showPassword ? Hide : Show} onClick={() => togglePasswordShow('password')} alt="show"></img>
                        </div>
                    </div>
                    <div className="new-password">
                        <label>New Password</label>
                        <div className="password-container">
                            <input required type={showConfirmPassword ? 'text' : 'password'} name="confirm" />
                            <img src={showConfirmPassword ? Hide : Show} onClick={() => togglePasswordShow()} alt="show"></img>
                        </div>
                    </div>

                    <div className="save-btn">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SecurityCard = () => {
    const [enable, setEnable] = useState(false);

    const handleOnClick = () => {
        setEnable((s) => !s);
    };
    return (
        <div className="security-card">
            <h4>Security</h4>
            <div className="two-step-verify" onClick={handleOnClick}>
                <p>2-Step Verification</p>
                <div className={`enable-toggle ${enable ? 'enabled' : ''}`}>
                    <div className="toggle-ball"></div>
                </div>
            </div>
        </div>
    );
};

const DangerCard = () => {
    return (
        <div className="danger-card">
            <h4 className="danger">Danger Zone</h4>
            <button className="btn">Delete My Account</button>
        </div>
    );
};

const setting = () => {
    return (
        <div className="setting-container">
            <div className="left">
                <ProfileCard />
            </div>

            <div className="right">
                <AccountCard />
                <SecurityCard />
                <DangerCard />
            </div>
        </div>
    );
};

export default setting;
