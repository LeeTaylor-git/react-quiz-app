/*
 * Project Name: React Quiz App
 * Author: Taylor Lee
 * Last modified: October 14th, 2022
 * Desc: You will build a simple React quiz app where users can click on option buttons to answer questions,
 * next question rendered each time option is selected and at the end, the final score is displayed.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
