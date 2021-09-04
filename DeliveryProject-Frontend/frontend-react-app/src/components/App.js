import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from '../containers/Main';
import Nav from '../containers/Nav';
import Test from './Test';


export default function App() {

    const routes = () => {
        return <Switch>
                    <Route path="/test" component={Test}/>
                    <Route path="/" component={Main}/>
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
