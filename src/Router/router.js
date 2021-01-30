import React from 'react';
import { Route } from 'react-router';
import IndexPage from '../Components/routes/index';
import RegisterPage from '../Components/routes/register';
import LoginPage from '../Components/routes/login';
import HomePage from '../Components/routes/homepage';

const ReactRouter =() =>{
    return(
        <React.Fragment>
            <Route exact path ="/" component = {IndexPage}/>
            <Route path ="/login" component = {LoginPage}/>
            <Route path ="/register" component = {RegisterPage}/>
            <Route path ="/home" component = {HomePage}/>
        </React.Fragment>
    )
}

export default ReactRouter;