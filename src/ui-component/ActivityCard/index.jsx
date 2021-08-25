import { LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { LINE_CHART_DATA } from '../../utils/constant';

import './styles.scss';

const CustomizedXAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
        <text x={0} y={20} textAnchor="middle" fontSize={12}>
            {payload.value}
        </text>
    </g>
);

const CustomizedYAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
        <text x={-20} y={0} textAnchor="middle" fontSize={12}>
            {payload.value}
        </text>
    </g>
);

const ActivityCard = () => {
    return (
        <div className="activity-card">
            <div className="top">
                <div className="left">
                    <div className="title">
                        <h3>Activities</h3>
                    </div>
                    <div className="date">
                        <p>May - June 2021&nbsp;</p>
                        <div className="chevron-down">&gt;</div>
                    </div>
                </div>

                <div className="right">
                    <div className="guest">Guest</div>
                    <div className="user">User</div>
                </div>
            </div>

            <div className="activity-graph">
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart width={800} height={300} data={LINE_CHART_DATA}>
                        <XAxis dataKey="name" tick={<CustomizedXAxisTick />} />
                        <YAxis tick={<CustomizedYAxisTick />} />
                        <CartesianGrid stroke="#eee" strokeDasharray="0 0" />
                        <Tooltip />
                        <Line type="monotone" dataKey="user" stroke="#9BDD7C" dot={false} strokeWidth={2} />
                        <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActivityCard;
