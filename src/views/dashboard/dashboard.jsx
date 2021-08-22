import { CARD_DATA } from '../../utils/constant';
import StatusCard from '../../ui-component/StatusCard/StatusCard';
import ActivityCard from '../../ui-component/ActivityCard/ActivityCard';
import TopProducts from '../../ui-component/TopProducts/TopProducts';

import Chevron from '../../assets/images/chevron.svg';

import './styles.scss';

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
                    <div className="place">at Sunset Road, Kuta, Bali </div>
                </div>
                <div className="schedule-item second">
                    <div className="title">Meeting with suppliers from Kuta Bali</div>
                    <div className="time">14.00-15.00</div>
                    <div className="place">at Sunset Road, Kuta, Bali </div>
                </div>
            </div>
        </div>
    );
};

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className="status-card">
                {CARD_DATA.map((card, index) => {
                    return <StatusCard key={index} {...card} />;
                })}
            </div>
            <ActivityCard />
            <div className="bottom-container">
                <TopProducts />
                <ScheduleCard />
            </div>
        </div>
    );
};

export default dashboard;
