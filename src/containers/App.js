import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// Import comps.
import Home from './Home'
import Dinner from '../components/Dinner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path={"/"} exact component={Home} />
          <Route path="/dinner/" component={Dinner} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
