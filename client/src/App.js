import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import SavedArticles from "./components/pages/SavedArticles"
import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={SavedArticles} />
    </div>
  </Router>
);

export default App;
