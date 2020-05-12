import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Pets from './pages/pets';
import CreatePet from './pages/pets/create';
import ShowPet from './pages/pets/show';
import Found from './pages/found';

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/pets/:id/show" component={ShowPet} />
            <Route path="/pets/create" component={CreatePet} />
            <Route path="/:id/found" component={Found} />
            <Route path="/pets" component={Pets} />
        </Switch>
    </BrowserRouter>
)

export default routes;