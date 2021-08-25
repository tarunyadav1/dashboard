import { useState, useEffect } from 'react';
import FilterIcon from '../../assets/images/filter.svg';
import AddIcon from '../../assets/images/add.svg';
import SearchIcon from '../../assets/images/search.svg';
import Chevron from '../../assets/images/chevron.svg';

import User from '../../ui-component/User';
import './user.scss';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');

    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then((response) => response.json())
            .then((json) => {
                setUsers(json.data);
            });
    }, []);

    const handleSearchInput = (e) => {
        setSearchUser(e.target.value);
    };

    return (
        <div className="users-container">
            <div className="top">
                <div className="title">
                    <h2>User Records</h2>
                </div>

                <div className="left">
                    <div className="input-container">
                        <input
                            type="text"
                            name="search user"
                            placeholder="Search in table..."
                            value={searchUser}
                            onChange={handleSearchInput}
                        />
                        <img className="search" src={SearchIcon} alt="search" height="15" width="15" />
                    </div>
                    <button className="btn filter">
                        <img src={FilterIcon} alt="filter" height="15" width="15" />
                        Filter
                    </button>
                    <button className="btn add">
                        <img src={AddIcon} alt="add" height="13" width="13" />
                        Add
                    </button>
                </div>
            </div>

            <div className="user-list">
                {searchUser
                    ? users
                          .filter((user) => `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchUser.toLowerCase()))
                          .map((user) => {
                              return <User key={user.id} {...user} />;
                          })
                    : users.map((user) => {
                          return <User key={user.id} {...user} />;
                      })}
            </div>

            <div className="pagination">
                <div className="btn left-arrow">
                    <img src={Chevron} alt="Chevron" />
                </div>

                {Array(4)
                    .fill(0)
                    .map((_, i) => {
                        return (
                            <div className="btn page-number" key={i}>
                                {i + 1}
                            </div>
                        );
                    })}

                <div className="btn right-arrow">
                    <img src={Chevron} alt="Chevron" />
                </div>
            </div>
        </div>
    );
};

export default Users;
