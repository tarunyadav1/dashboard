import React from 'react';
import { Route, Switch } from 'react-router-dom';

// project imports
import Layout from './../layout/layout';

// dashboard routing
import Dashboard from '../views/dashboard/dashboard';

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    return (
        <Route>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </Layout>
        </Route>
    );
};

export default MainRoutes;
