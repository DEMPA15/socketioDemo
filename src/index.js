import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer';
import {eventDispatcher} from  './sockets';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers())

eventDispatcher(store);

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
