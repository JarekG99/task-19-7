import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
        <CommentsListContainer />
        <DevTools />
    </div>
  );
};
export default App;
