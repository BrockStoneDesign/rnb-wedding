import { Router } from 'buttermilk';
import React, { Component } from 'react';


// Styling Imports
import '../../simple-grid.css'
import '../../App.css';

// Import Assets
import RBLogo from '../../assets/rb.svg';

// Import Components
import CTA from '../../components/CTA'
import Countdown from '../../components/CountDown'
import OurStory from '../../components/OurStory'
import TheBigDay from '../../components/TheBigDay'
import SocialBar from '../../components/SocialBar'
import Accomodations from '../../components/Accomodations'
import Registry from '../../components/Registry'


class Homepage extends Component {

	// Rhylees example into Programming :) 
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

        	{/* Big Day */}
        	<TheBigDay />

        	{/* Accomodations */}
        	<Accomodations />

        	{/* Social */}
        	<SocialBar />

       		{/* Registry */}
        	<Registry />

      </div>
    )
  }
}

export default Homepage;
