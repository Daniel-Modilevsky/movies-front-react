import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./style/venobox.css";
import 'boxicons'
import "./style/hover.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './Router/router';
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
    <div style={{  width: "100%", height: "100", display: "flex",  justifyContent: "center",alignItems: "center" }}>
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
};

ReactDOM.render(
  
  <React.StrictMode>
       <Router>
        <ReactRouter/>
      </Router>
      <LoadingIndicator/>
      
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
