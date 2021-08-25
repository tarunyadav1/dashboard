import './ProfileCard.scss';
import ProfileImage from '../../assets/images/profile-large.svg';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="title">
                <h3>Profile</h3>
            </div>

            <div className="main-content">
                <div className="left">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="profile" />
                    </div>
                    <div className="profile-change-btn">
                        <button> Change</button>
                    </div>
                </div>

                <div className="right">
                    <form>
                        <div className="name">
                            <div>
                                <label>First Name</label>
                                <input type="text" name="first name" />
                            </div>

                            <div>
                                <label>Last Name</label>
                                <input type="text" name="last name" />
                            </div>
                        </div>

                        <div className="birth-date">
                            <label> Date of birth</label>
                            <input type="date" name="birth date" />
                        </div>
                        <div className="phone-number">
                            <label> Phone Number</label>
                            <input type="tel" name="phone number" />
                        </div>

                        <div className="address">
                            <label> Address</label>
                            <input type="tel" name="address" />
                        </div>
                        <div className="save-btn">
                            <button onClick={(e) => e.preventDefault()} type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
