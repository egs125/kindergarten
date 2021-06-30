import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from "mobx-react";
import store from './store';
import './style/style.scss';

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
