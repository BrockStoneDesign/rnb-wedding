import React, { Component } from 'react';
import stv from '../../assets/stv.jpeg';

class Accomodations extends Component {
  render() {
    return (
    <div id='ceremony-bg' className='rnb-sec'>
      <div className="container">
      <div className="row">
        <div className='col-12'>
          <h4 className='title-header'>The Big Day</h4>
          <h2>May 14, 2019</h2>
        </div>      

        <div className="col-6">
        <div className='card'>
          <i className="fas fa-church fa-3x"></i>
        	<h4 className='title-header'>The Blessing</h4>
        	<h3>1. Our Ceremony</h3>
          <hr/>
          <p>Rhylee and Brock will be married in an intimate ceremony at St. Vincent Basilica.</p>
          <p>The marriage will take place in a sensitive chapel space within the basement of the existing 130 year old structure.</p>
          <p></p>
          <a href="https://goo.gl/maps/pQVH8vA4WNq"><i className="fab fa-google"></i> Google Maps link to church</a>
        </div>
        </div>

        <div className="col-6">
        <div className='card'>
          <i className="fas fa-glass-cheers fa-3x"></i>
          <h4 className='title-header'>The Celebration</h4>
          <h4>2. Happily Ever After Party at Stone Water</h4>
          <hr/>
          <p>From <strong>6 to 9pm</strong> we would love to welcome you to Stone Water as we celebrate our marriage. Come enjoy live music provided by <strong>The Jason Kendal Band</strong>, Dancing, Small plates, and Drinks!</p>
          <p>We can't wait to celebrate with you all!</p>

          <p><strong>PLEASE NOTE:</strong> This Event is Formal Attire. Cocktail dresses for women and jacket and tie for men please.</p>
          <a href="https://goo.gl/maps/UB8zuXiZoTC2"><i className="fab fa-google"></i> Google Maps link to Stone Water</a>
         </div>
         </div> 
      </div>


    </div>
    </div>
    )
  }
}

export default Accomodations
