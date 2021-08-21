import React from 'react';
import { Route, Switch } from 'react-router-dom';

// project imports
import MainLayout from './../layout/index';

// dashboard routing
import Dashboard from '../views/dashboard/dashboard';

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    return (
        <Route>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
