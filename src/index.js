
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL='http://localhost:9001/login/';
ReactDOM.render(
    <>
   <App/>
    </>,
document.getElementById('root'));
