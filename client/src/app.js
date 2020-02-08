import React, { Component, Fragment , Suspense} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './css/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PublicRoute from './ui/PublicRoute';
import About from './pages/subpage/About';
import Notfound from './pages/subpage/404';
import Preloader from './ui/preloader';
import lazyload from './ui/lazyloader';
const Home = lazyload(import("./pages/Home"));
// const About = lazyload(import("./pages/subpage/About"));
class App extends Component {

    
    render() {

        return (
            <Fragment>
                <Router>
                <Suspense fallback={<Preloader/>}>
                   <Switch>
                
                       
                   <PublicRoute path="/" exact component={Home}/>
                    <PublicRoute path="/about" exact component={About}/>
                   <Route path="*" component={Notfound} /> 
            
                </Switch>
                </Suspense>
                </Router>
            </Fragment>
        );
    }
}

export default App;