import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"

import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path={"/signup"} component={SignUp} />
                    <Route path={"/Login"} component={Login} />
                    <Route path={"/Home"} component={Home} />
                </Router>
            </div>
        )
    }
}

export default Routes
