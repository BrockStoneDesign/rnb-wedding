import React, { Component } from 'react';
import stv from '../../assets/stv.jpeg';

class Accomodations extends Component {
  render() {
    return (
    <div id='ceremony-bg'>
      <div className="container main-section">
      <div className="row">
        <div className='col-12'>
          <h4 className='title-header'>The marriage of 2 loves</h4>
          <h2>The Big Day</h2>
        </div>      

        <div className="col-6">
        <div className='card'>
          <i class="fas fa-church fa-3x"></i>
        	<h4 className='title-header'>The blessing</h4>
        	<h3>1. Our Ceremony</h3>
          <hr/>
          <hr/>
          <p>Rhylee and Brock will be married in an intimate ceremony at St. Vincent Bacillica.</p>
          <a href="https://goo.gl/maps/pQVH8vA4WNq"><i class="fab fa-google"></i> Google Maps link to church</a>
        </div>
        </div>

        <div className="col-6">
        <div className='card'>
          <i class="fas fa-glass-cheers fa-3x"></i>
          <h4 className='title-header'>AFTERWARDS</h4>
          <h4>2. Happily Ever After Party<br/>at Stone Water</h4>
          <hr/>
          <p>From <strong>6 to 9pm</strong> we would love to welcome you to Stone water to as we celebrate our marriage. Come enjoy live music provided by <strong>The Jason Kendal Band</strong>, Dancing, Small plates, and Drinks!</p>
          <p>We can't wait to celebrate with you all!</p>

          <p><strong>PLEASE NOTE:</strong> This Event is Formal Attire. Cocktail dresses for women and jacket and tie for men please.</p>
          <a href="https://goo.gl/maps/UB8zuXiZoTC2"><i class="fab fa-google"></i> Google Maps link to Stone Water</a>
         </div>
         </div>
      </div>
    </div>
    </div>
    )
  }
}

export default Accomodations
