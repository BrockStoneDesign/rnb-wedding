import React, { Component } from 'react';
import './simple-grid.css'
import './App.css';
import CTA from './components/CTA'
import OurStory from './components/OurStory'
import Accomodations from './components/Accomodations'
import RBLogo from './assets/rb.svg';
import Countdown from './components/CountDown'

class App extends Component {

	iLove(name) {
		let phrase = 'I love '+name+' !'
		console.log(phrase)
	}

  render() {
    return (
      <div className="App">
      	<div className='main-sec'>
     
      	 	<div id='cta-left'>
			  	<div className='welcome-desc'>
			  		
			  		{/*<img width={85} src={RBLogo} className="App-logo" alt="logo" />*/}
			  		<h1 id='us-header'>Rhylee &amp;<br/>Brock</h1>

			  		{/* Getting married */}
			  		<div id='getting-married'> 
			  			<p>We're getting married... Again!</p>
			  		</div>

			  		{/*Countdown*/}
			  		<Countdown date={`2019-05-14T00:00:00`} />

			  		<button className='button' onClick={() => this.iLove('Rhylee')}>read our story</button>
			  	</div>
      	 	</div>

      	 	<div id='cta-right'>
      	 	</div>

    	</div>
       		
       		{/* <CTA />*/}
        	<OurStory />

        	{/* <CTA />*/}
        	<Accomodations />

      </div>
    )
  }
}

export default App;
