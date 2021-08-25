import React from 'react';
import DashboardIcon from '../../assets/images/sidebar-dashboard.svg';
import TransactionIcon from '../../assets/images/sidebar-transaction.svg';
import ScheduleIcon from '../../assets/images/sidebar-schedule.svg';
import UserIcon from '../../assets/images/sidebar-user.svg';
import SettingsIcon from '../../assets/images/sidebar-settings.svg';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

const SCREEN = [
    {
        page: 'Dashboard',
        path: '/',
        icon: DashboardIcon
    },
    {
        page: 'Transactions',
        path: '/transactions',
        icon: TransactionIcon
    },
    {
        page: 'Schedules',
        path: '/schedules',
        icon: ScheduleIcon
    },
    {
        page: 'Users',
        path: '/users',
        icon: UserIcon
    },
    {
        page: 'Settings',
        path: '/settings',
        icon: SettingsIcon
    }
];

const Sidebar = ({ setSelectedView, selectedView }) => {
    return (
        <div className="sidebar-content">
            <div className="top">
                <h1 className="brand-name">Dash.</h1>

                <div>
                    {SCREEN.map(({ page, path, icon }, i) => {
                        return (
                            <Link
                                onClick={() => setSelectedView(page)}
                                key={page}
                                to={path}
                                className={`link ${selectedView === page && 'active'}`}
                            >
                                <img src={icon} alt={page} width="18px" height="18px" className="icon" />
                                <p className={`name`}>{page}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bottom">
                <a href="/">
                    <p className="help">Help</p>
                </a>
                <a href="/">
                    <p>Contact Us</p>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
