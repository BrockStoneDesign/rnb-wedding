import React, { Component } from 'react';

class SocialBar extends Component {
  render() {
    return (
      <div id='social-bar-bg'>
          <div className="container center">
            <div className="row">
                <div className='col-12'>
                  <h2>Come be Social!</h2>
                  <h2><i className="fab fa-facebook-square"></i>  <i className="fab fa-instagram"></i>  <i className="fab fa-snapchat-square"></i></h2>
                  <h3>#TwoBirdsOneStone</h3>
                  <p><strong>Also look for our custom Snapchat filter!</strong></p>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default SocialBar
