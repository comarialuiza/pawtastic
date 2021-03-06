import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Reviews from './pages/Reviews';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/reviews" component={ Reviews } />
            </Switch>
        </BrowserRouter>
    )
}