import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Main from '../containers/Main';
import Nav from '../containers/Nav';
import Tracking from './Tracking'
import Order from './Order'
import OrderHistory from './OrderHistory'
import OrderDetails from './OrderDetails'


export default function App() {

    const [orderId, setOrderId] = useState()
    const [username, setUsername] = useState()
    const [loggedIn, setLoggedIn] = useState(false)

    const routes = () => {
        return <Switch>
            <Route path="/orderhistory" render={() => <OrderHistory username={username} setOrderId={setOrderId} />}>
                {loggedIn ? <OrderHistory username={username} setOrderId={setOrderId} /> : <Redirect to="/" />}
            </Route>
            <Route path="/tracking" render={() => <Tracking orderId={orderId} setOrderId={setOrderId} />} />
            <Route path="/order" component={Order}>
                {loggedIn ? <Order /> : <Redirect to="/" />}
            </Route>
            <Route path="/orderdetails" component={OrderDetails} />
            <Route path="/" render={() => <Main setOrderId={setOrderId} loggedIn={loggedIn} />} />
        </Switch>
    }

    return (
        <Router>
            <div>
                <Nav setUsername={setUsername}
                    setLoggedIn={setLoggedIn}
                    username={username}
                    style={{
                        height: "10vh"
                    }}
                />
                {routes()}
            </div>
        </Router>
    );
}
