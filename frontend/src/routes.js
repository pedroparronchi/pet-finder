import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Pets from './pages/pets';
import CreatePet from './pages/pets/create';

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/pets" component={Pets} />
            {/* <Route path="/pets/create" component={CreatePet} /> */}
        </Switch>
    </BrowserRouter>
)

export default routes;