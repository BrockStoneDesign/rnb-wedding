
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

// Import comps.
import Home from './Home'
import Dinner from '../components/Dinner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename='/'>
        <Route path="/" exact component={Home} />
        <Route path="/dinner/" component={Dinner} />
        </HashRouter>
      </div>
    )
  }
}

export default App;
