import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserDetail from './UserDetail';
import Home from './Home';

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/user/:userId">
        <UserDetail />
      </Route>
    </Router>
  );
}

export default App;
