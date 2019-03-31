import React, { Component } from 'react';
import RBLogo from '../../assets/rb.svg';
import Countdown from '../CountDown'

class CTA extends Component {
  render() {
    return (
      <div className="parent">
		  <div className="column main">
		  	<img width={50} src={RBLogo} className="App-logo" alt="logo" />
		  	<div className='welcome-desc'>
		  		<h1>Rhylee<br/>&amp;<br/>Brock</h1>
		  		<p>We're getting married... Again!</p>
		  		<Countdown date={`2019-05-14T00:00:00`} />

		  		<button className='button' onClick={()=>console.log('CLICKED')}>read our story</button>
		  	</div>
		  </div>
		   <div className="column sidebar">
		   </div>
		</div>
    );
  }
}

export default CTA;
