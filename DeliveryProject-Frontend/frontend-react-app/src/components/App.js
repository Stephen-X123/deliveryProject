import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from '../containers/Main';
import Nav from '../containers/Nav';
import Test from './Test';
import Tracking from './Tracking'
import Order from './Order'
import OrderHistory from './OrderHistory'
import Profile from './Profile'


export default function App() {
    const routes = () => {
        return <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/orderhistory" component={OrderHistory} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/order" component={Order} />
            <Route path="/test" component={Test} />
            <Route path="/" component={Main} />
        </Switch>
    }

    return (
        <Router>
            <div>
                <Nav />
                {routes()}
            </div>
        </Router>
    );
}
