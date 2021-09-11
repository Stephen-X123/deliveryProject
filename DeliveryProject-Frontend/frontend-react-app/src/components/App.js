import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
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
    const [username, setUsername] = useState()
    const [loggedIn, setLoggedIn] = useState(false)

    const routes = () => {
        return <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/orderhistory" render={() => <OrderHistory username={username} />}>
                {loggedIn ? "/orderhistory" : <Redirect to="/" />}
            </Route>
            <Route path="/tracking" render={() => <Tracking orderId={orderId} />} />
            <Route path="/order" component={Order}>
                {loggedIn ? <Order /> : <Redirect to="/" />}
            </Route>
            <Route path="/orderdetails" component={OrderDetails} />
            <Route path="/test" component={Test} />
            <Route path="/" render={() => <Main setOrderId={setOrderId} loggedIn={loggedIn}/>} />
        </Switch>
    }

    return (
        <Router>
            <div>
                <Nav setUsername={setUsername} 
                setLoggedIn={setLoggedIn} 
                />
                {routes()}
            </div>
        </Router>
    );
}
