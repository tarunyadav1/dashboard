import StatusCard from '../../ui-component/StatusCard';
import ActivityCard from '../../ui-component/ActivityCard';
import TopProducts from '../../ui-component/TopProducts';
import ScheduleCard from '../../ui-component/ScheduleCard';
import { CARD_DATA } from '../../utils/constant';

import './styles.scss';

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
