import React, { useState } from "react";
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
import OrderDetails from './OrderDetails'


export default function App() {

    const [orderId, setOrderId] = useState()

    const routes = () => {
        return <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/orderhistory" component={OrderHistory} />
            <Route path="/tracking" render={() => <Tracking orderId={orderId}/>} />
            <Route path="/order" component={Order} />
            <Route path="/orderdetails" component={OrderDetails} />
            <Route path="/test" component={Test} />
            <Route path="/" render={() => <Main setOrderId={setOrderId}/>} />
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
