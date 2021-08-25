import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

import './styles.scss';

const Layout = ({ children }) => {
    const [selectedView, setSelectedView] = useState('Dashboard');
    return (
        <div className="dashboard-container">
            <div className="sidebar-container">
                <Sidebar setSelectedView={setSelectedView} selectedView={selectedView} />
            </div>

            <div className="content">
                <Header selectedView={selectedView} />
                {children}
            </div>
        </div>
    );
};

export default Layout;
