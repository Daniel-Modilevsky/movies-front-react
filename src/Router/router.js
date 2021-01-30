import React from 'react';
import { Route } from 'react-router';
import IndexPage from '../Components/routes/index';
import RegisterPage from '../Components/routes/register';
import LoginPage from '../Components/routes/login';
import HomePage from '../Components/routes/homepage';
import ErrorPage from '../Components/routes/404';
import AdminPage from '../Components/routes/admin';
import ListsPage from '../Components/routes/lists';
import MoviePage from '../Components/routes/movie';
import ProfilePage from '../Components/routes/profile';
import RecomandPage from '../Components/routes/recomand';
import SmartPage from '../Components/routes/smart';
import TopRatedPage from '../Components/routes/toprated';

const ReactRouter =() =>{
    return(
        <React.Fragment>
            <Route exact path ="/" component = {IndexPage}/>
            <Route path ="/login" component = {LoginPage}/>
            <Route path ="/register" component = {RegisterPage}/>
            <Route path ="/home" component = {HomePage}/>
            <Route path ="/admin" component = {AdminPage}/>
            <Route path ="/404" component = {ErrorPage}/>
            <Route path ="/lists" component = {ListsPage}/>
            <Route path ="/movie" component = {MoviePage}/>
            <Route path ="/profile" component = {ProfilePage}/>
            <Route path ="/recomand" component = {RecomandPage}/>
            <Route path ="/smart" component = {SmartPage}/>
            <Route path ="/toprated" component = {TopRatedPage}/> 
        </React.Fragment>
    )
}

export default ReactRouter;