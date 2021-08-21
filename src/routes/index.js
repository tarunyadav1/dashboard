import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

// sample page routing
import Login from '../views/pages/authentication/Login/Login';
import Register from '../views/pages/authentication/Register/Register';

//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <MainRoutes />
            </Switch>
        </Router>
    );
};

export default Routes;
