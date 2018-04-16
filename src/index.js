import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import  reducer  from './reducer';
import {addComment} from './actions';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
     document.getElementById('root'));
// registerServiceWorker();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

registerServiceWorker();
