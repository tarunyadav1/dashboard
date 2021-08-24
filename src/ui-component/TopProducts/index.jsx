import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './TopProducts.scss';

const data = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 500 },
    { name: 'Group C', value: 900 }
];

const COLORS = ['#EE8484', '#F7DC7D', '#98D89E'];

const TopProducts = () => {
    return (
        <div className="top-products">
            <div className="top">
                <div className="title">
                    <h4>Top Products</h4>
                </div>
                <div className="date">
                    <p>May - June 2021&nbsp;</p>
                    <div className="chevron-down">&gt;</div>
                </div>
            </div>

            <div className="graph-box">
                <div className="pie-chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                // label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="info">
                    <div className="info-item ">
                        <div className="first">Basic Tees</div>
                        <p>55%</p>
                    </div>
                    <div className="info-item ">
                        <div className="second">Custom Short Pants</div>
                        <p>31%</p>
                    </div>
                    <div className="info-item ">
                        <div className="third">Super Hoodies</div>
                        <p>14%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TopProducts;
