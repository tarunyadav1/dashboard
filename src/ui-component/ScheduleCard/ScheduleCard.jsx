import Chevron from '../../assets/images/chevron.svg';
import './ScheduleCard.scss';

const ScheduleCard = () => {
    return (
        <div className="schedule-card">
            <div className="top">
                <div className="title">
                    <h4>Today’s schedule</h4>
                </div>
                <div className="see-all">
                    See All
                    <img src={Chevron} alt="Chevron" />
                </div>
            </div>

            <div className="main-content">
                <div className="schedule-item first">
                    <div className="title">Meeting with suppliers from Kuta Bali</div>
                    <div className="time">14.00-15.00</div>
                    <div className="location">at Sunset Road, Kuta, Bali </div>
                </div>
                <div className="schedule-item second">
                    <div className="title">Meeting with suppliers from Kuta Bali</div>
                    <div className="time">14.00-15.00</div>
                    <div className="location">at Sunset Road, Kuta, Bali </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
