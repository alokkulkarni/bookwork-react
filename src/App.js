import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';


const App = () => 
  <div>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" exact component={LoginPage}></Route>
  </div>

export default App;
