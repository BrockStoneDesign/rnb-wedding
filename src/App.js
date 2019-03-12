import React, { Component } from 'react';
import './App.css';
import CTA from './components/CTA'
import OurStory from './components/OurStory'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CTA />
        <OurStory />
      </div>
    )
  }
}

export default App;
