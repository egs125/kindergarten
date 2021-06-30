import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from "mobx-react";
import store from './store';
import './style/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
