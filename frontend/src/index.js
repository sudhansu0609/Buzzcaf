import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import originalPage from "./pages/original";
import irishHazelnutPage from "./pages/irishHazelnut";
import belgianChocolatePage from "./pages/belginanChocolate";
import desirePage from "./pages/desire";
import caramelPage from "./pages/caramel";

ReactDOM.render(

  <Router basename="/" >
    <App />
  </Router>,
    

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
