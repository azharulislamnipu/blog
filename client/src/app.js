import React, { Component, Fragment , Suspense} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './css/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PublicRoute from './ui/PublicRoute';
//  import Home from './pages/Home'
import About from './pages/subpage/About';
import Notfound from './pages/subpage/404';
import Preloader from './ui/preloader';
//  const Home = React.lazy(() => import('./pages/Home'));

const Home = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve,5000)).then(
      () => import("./pages/Home")
    );
  });
class App extends Component {

    
    render() {

        return (
            <Fragment>
                <Router>
                <Suspense fallback={<Preloader/>}>
                   <Switch>
                
                       
                   <PublicRoute path="/" exact component={Home}/>
                   {/* <PublicRoute path="/about" exact component={About}/>
                   <Route path="*" component={Notfound} /> */}
            
                </Switch>
                </Suspense>
                </Router>
            </Fragment>
        );
    }
}

export default App;