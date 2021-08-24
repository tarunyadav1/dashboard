import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

import './styles.scss';

const index = ({ children }) => {
    return (
        <div className="dashboard-container">
            <div className="sidebar-container">
                <Sidebar />
            </div>

            <div className="content">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default index;
