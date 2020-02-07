import React, { Component, Fragment } from 'react';
import './css/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PublicRoute from './ui/PublicRoute';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Notfound from '../src/pages/404';
class App extends Component {
    render() {

        return (
            <Fragment>
                <Router>
                   <Switch>
                   <PublicRoute path="/" exact component={Home}/>
                   <PublicRoute path="/about" exact component={About}/>
                   <Route path="*" component={Notfound} />
            
                </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default App;