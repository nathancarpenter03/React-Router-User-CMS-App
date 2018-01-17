import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cms from './Cms';
import Login from './Login';

const App = () => (
  <div className="app-routes">
    <switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Cms} />
    </switch>
    
  </div>
);

export default App;
