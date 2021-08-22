import './Header.scss';
import NotificationIcon from '../../assets/images/notify.svg';
import UserIcon from '../../assets/images/noProfilePic.svg';
import SearchIcon from '../../assets/images/search.svg';

const Header = () => {
    return (
        <div className="header-container">
            <div className="view-name">Dashboard</div>

            <div className="header-items">
                <div className="input">
                    <input type="text" name="search" placeholder="Search..." />
                    <img src={SearchIcon} alt="search" height="17" width="17" />
                </div>
                <div className="notification">
                    <img src={NotificationIcon} alt="notification" height="20" width="18" />
                </div>

                <div className="profile">
                    <img src={UserIcon} alt="users" height="30" width="30" />
                </div>
            </div>
        </div>
    );
};

export default Header;
