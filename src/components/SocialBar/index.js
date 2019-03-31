import React, { Component } from 'react';

class SocialBar extends Component {
  render() {
    return (
      <div id='social-bar-bg'>
          <div className="container center">
            <div className="row">
                <div className='col-12'>
                  <h1>Come be Social!</h1>
                  <h2><i class="fab fa-facebook-square fa-2x"></i>  <i class="fab fa-instagram fa-2x"></i>  <i class="fab fa-snapchat-square fa-2x"></i></h2>
                  <h3>Please use <i class="fas fa-angle-double-right"></i> #TwoBirdsOneStone</h3>
                  <p><strong>Also look for our custom Snapchat filter!</strong></p>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default SocialBar
