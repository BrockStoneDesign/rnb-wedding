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
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + '/dinner'} component={Dinner} />
        </Router>
      </div>
    )
  }
}

export default App;
