import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import RecomandationSliderComponent from './Components/recomandations/recomandations-slider'
// import MoviesListsComponent from './Components/movies/movies-list'
// import MoviesMiniComponent from './Components/movies/movies-mini'
// import CommentFormComponent from './Components/comments/comments-form'
// import CommentListComponent from './Components/comments/comments-list'
// import CommentMiniComponent from './Components/comments/comments-mini'
// import MovieShowComponent from './Components/movies/movies-show'
// import RegisterFormComponent from './Components/users/user-form-register'
// import LoginFormComponent from './Components/users/user-form-register'
// import ServiceAll from './service/service-all'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './Router/router';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
ReactDOM.render(
  <React.StrictMode>
      {/* <RecomandationSliderComponent/>
      <MoviesMiniComponent/>
      <MoviesListsComponent/>
      <CommentFormComponent/>
      <CommentListComponent/>
      <CommentMiniComponent/>
      <MovieShowComponent/> 
      <RegisterFormComponent/>
      <LoginFormComponent/>
      <ServiceAll/>*/}
       <Router>
        <ReactRouter/>
      </Router>

      
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
