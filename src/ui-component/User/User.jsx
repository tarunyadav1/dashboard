const User = ({ email, first_name, last_name, id, avatar }) => {
    return (
        <div className="user-list-container">
            <div className="profile">
                <img src={avatar} alt="avatar" />
            </div>

            <div className="name">
                {first_name} {last_name}
            </div>
            <div className="email">{email}</div>
            <div className="gender">Male</div>
            <div className="auth">Admin</div>
        </div>
    );
};


export default User 