import React, { Component } from 'react';
import RBLogo from '../../assets/rb.svg';

class CTA extends Component {
  render() {
    return (
      <div class="parent">
		  <div class="column main">
		  	<img width={150} src={RBLogo} className="App-logo" alt="logo" />

		  	<div className='welcome-desc'>
		  		
		  		<h1>Rhylee<br/>&amp;<br/>Brock</h1>
		  			
		  		

		  		<p>Rhylee and Brock are getting married... Again!</p>

		  		<button className='button' onClick={()=>console.log('CLICKED')}>read our stroy</button>
		  	</div>
		  </div>
		   <div class="column sidebar">
		   </div>
		</div>
    );
  }
}

export default CTA;
