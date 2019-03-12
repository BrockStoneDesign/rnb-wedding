import React, { Component } from 'react';
import RBLogo from '../../assets/rb.svg';

class CTA extends Component {
  render() {
    return (
      <div class="parent">
		  <div class="column main">
		  	<img src={RBLogo} className="App-logo" alt="logo" />

		  	<div className='welcome-desc'>
		  		<h1>Rhylee &amp; Brock</h1>
		  		<h4>invite you to their <br /><span className='bold'>Happily Ever After party!</span></h4>
		  		

		  		<p className='uppercase bold'>Tuesday, May 14th, 2019 @5:30PM</p>

		  		<h4 className='bold'>Stonewater</h4>
		  		<p className='uppercase bold'>1517 Broad St, Greensburg, PA 15601</p>
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
