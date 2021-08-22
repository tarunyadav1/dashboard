import './StatusCard.scss';

const StatusCard = ({ color, amount, title, icon }) => {
    return (
        <div className={`card ${color}`}>
            <div className="icon">
                <img src={icon} alt="card-icon" width="24" height="24" />
            </div>
            <div className="value-container">
                <div className="title">{title}</div>
                <div className="value">{amount}</div>
            </div>
        </div>
    );
};

export default StatusCard;
