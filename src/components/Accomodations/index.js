import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
        <div id='accomodations-bg' className='rnb-sec'>
            <div className="container">
                <div className="row">
                    
                    <div className='col-12'>
                        <h4 className='title-header'>Plan your stay with us!</h4>
                        <h2>Your Accomodations</h2>
                    </div>      

                    <div className="col-6">
                        <div className='card'>
                            
                            <i className="fas fa-plane fa-3x"></i>
                            <h3>Flights / Airports</h3>
                            
                            <hr/>
                            <p><strong>1. Arnold Palmer Regional Airport</strong></p>
                            <p>Small, local airport. Can be a money saver for some that can fly direct to this airport. A added bonus is you fly over St. Vincent where Rhylee and Brock will be wed!</p>
                            
                            <a href='tel:7245398100'><i className="fas fa-phone"></i> Call to book a flight now <i className="fas fa-long-arrow-alt-right"></i></a>
                            <a href='http://www.palmerairport.com/'><i className="fab fa-chrome"></i> palmerairport.com</a>
                            
                           
                            <div id='airport-sec'>
                                <p><strong>2. Pittsburgh International Airport</strong></p>
                                <p>Pittsburgh International Airport, formerly Greater Pittsburgh International Airport in the suburbs of Pittsburgh, Pennsylvania</p>
                            </div>

                            <a href='http://www.flypittsburgh.com/'><i className="fab fa-chrome"></i> flypittsburgh.com</a>
                        
                        </div>
                    </div>

                    <div className="col-6">
                        <div className='card'>
                            
                            <i className="fas fa-h-square fa-3x"></i>
                            <h3>The Hotel</h3>
                            
                            <hr/>
                            <p><strong>Courtyard by Marriott<br/>Pittsburgh ~ Greensburg</strong></p>
                            <p>We have set aside a block of rooms for our guests. Please tell the receptionist you're with the <strong>Stone Party</strong> when booking.</p>

                            <div id='airport-sec'>
                                <p><strong>Courtyards FREE Shuttle service!</strong></p>
                                <p>The hotel also offers a shuttle service which can take you to and from the 'Happily Ever After Party' (However, you will need to consider transport to / from the Church)</p>
                            </div>
                            
                            <a href='tel:7248343555'><i className="fas fa-phone"></i> Call to book a room now <i className="fas fa-long-arrow-alt-right"></i></a>
                            <a href='https://www.marriott.com/hotels/travel/pitgb-courtyard-pittsburgh-greensburg/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'><i className="fab fa-chrome"></i> marriott.com</a>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
  }
}

export default Accomodations
