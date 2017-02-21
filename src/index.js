import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
// require('bootstrap-loader');
// require('font-awesome-webpack-sass');
const json = require('./resume.json');

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
