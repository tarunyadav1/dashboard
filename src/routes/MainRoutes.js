import React from 'react';
import { Route, Switch } from 'react-router-dom';

// project imports
import Layout from './../layout/layout';

// dashboard routing
import Dashboard from '../views/dashboard/dashboard';
import Setting from '../views/setting/setting';
import Users from '../views/users/users';

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    return (
        <Route>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/settings" component={Setting} />
                    <Route path="/users" component={Users} />
                </Switch>
            </Layout>
        </Route>
    );
};

export default MainRoutes;
