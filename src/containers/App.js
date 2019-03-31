
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import comps.
import Home from './Home'
import Dinner from '../components/Dinner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Route path="/" exact component={Home} />
        <Route path="/dinner/" component={Dinner} />
        </Router>
      </div>
    )
  }
}

export default App;
