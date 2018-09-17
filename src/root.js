import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import './main.scss';

import $ from 'jquery';
import 'bootstrap';

import App from './App';

window.$ = $;

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
