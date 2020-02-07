import React from 'react';  
import {
    Redirect,
    Route
  } from "react-router-dom";
import Layout from '../layouts/layout';

const PublicRoute = ({ component: Component , ...rest }) => ( 
   
  <Route {...rest} render={props => (
      <Layout>
         <Component {...props}/>
      </Layout>
    )} />
);

export default PublicRoute;  