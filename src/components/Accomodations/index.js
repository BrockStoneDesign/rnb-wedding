import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
        <div id='accomodations-bg' className='rnb-sec'>
            <div className="container">
                <div className="row">
                    
                    <div className='col-12'>
                        <h4 className='title-header'>Plan your stay with us!</h4>
                        <h2>Accomodations</h2>
                    </div>      

                    <div className="col-6">
                        <div className='card'>
                            
                            <i class="fas fa-plane fa-3x"></i>
                            <h3>Flights / Airports</h3>
                            
                            <hr/>
                            <p><strong>1. Arnold Palmer Regional Airport</strong></p>
                            <p>Small, local airport. Can be a money saver for some that can fly direct to this airport. A added bonus is you fly over St. Vincent where Rhylee and Brock will be wed!</p>
                            
                            <a href='tel:7245398100'><i class="fas fa-phone"></i> Call to book a flight now <i class="fas fa-long-arrow-alt-right"></i></a>
                            <a href='http://www.palmerairport.com/'><i class="fab fa-chrome"></i> palmerairport.com</a>
                            
                           
                            <div id='airport-sec'>
                                <p><strong>2. Pittsburgh International Airport</strong></p>
                                <p>Pittsburgh International Airport, formerly Greater Pittsburgh International Airport in the suburbs of Pittsburgh, Pennsylvania</p>
                            </div>

                            <a href='http://www.flypittsburgh.com/'><i class="fab fa-chrome"></i> flypittsburgh.com</a>
                        
                        </div>
                    </div>

                    <div className="col-6">
                        <div className='card'>
                            
                            <i class="fas fa-h-square fa-3x"></i>
                            <h3>The Hotel</h3>
                            
                            <hr/>
                            <p><strong>Courtyard by Marriott Pittsburgh Greensburg</strong></p>
                            <p>We have set aside a block of rooms for our guests. Please tell the receptionist you're with the <strong>Stone party when booking</strong>.</p>
                            
                            <a href='tel:7248343555'><i class="fas fa-phone"></i> Call to book a room now <i class="fas fa-long-arrow-alt-right"></i></a>
                            <a href='https://www.marriott.com/hotels/travel/pitgb-courtyard-pittsburgh-greensburg/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'><i class="fab fa-chrome"></i> marriott.com</a>
                        
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    )
  }
}

export default Accomodations
