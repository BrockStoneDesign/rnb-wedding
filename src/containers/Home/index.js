import React, { Component } from 'react';

// Styling Imports
import '../../simple-grid.css'
import '../../App.css';

// Import Assets
import RBLogo from '../../assets/rb.svg';
import rnb from '../../assets/rnb.jpg';

// Import Components
import CTA from '../../components/CTA'
import Countdown from '../../components/CountDown'
import OurStory from '../../components/OurStory'
import TheBigDay from '../../components/TheBigDay'
import SocialBar from '../../components/SocialBar'
import Accomodations from '../../components/Accomodations'
import Registry from '../../components/Registry'


class Homepage extends Component {

	// Construct or
	constructor(props){
		super(props);
		this.scrollTo = this.scrollTo.bind(this);
		this.state = {
	      loading: true
	    }
	}

	// InitiALLY SCROLL TO TOP
	componentWillMount() {
		setTimeout(() => { 
			this.setState({
				loading: false
			})
		}, 3000)
	}

	// Scroll to div via ID passed in
	scrollTo = (element) => {
		let scrollElement = document.getElementById(element)
		scrollElement.scrollIntoView({behavior: 'smooth'})
	}

	// Rhylees example into Programming :)
	iLove(name) {
		let phrase = 'I love '+name+' !'
		console.log(phrase)
	}

	render() {
		return (
			<div className="App">
				<div className='main-sec'>
					<img src={rnb} id='rnb' width={'100%'} alt="rnb" />
					<div id='cta-left'>
						<div className='welcome-desc'>

							{/*Header*/}
							<h1 id='us-header'>Rhylee &amp;<br/>Brock</h1>

							{/* Getting married */}
							<div id='getting-married'>
								<p>May 14th 2019 🎉</p>
							</div>

							{/*Countdown*/}
							<Countdown date={`2019-05-14T00:00:00`} />

							{/*Nav*/}
							<div className='pulsate'>
								<p><strong>Scroll to learn more</strong></p>
								<i className="fas fa-chevron-down"></i>
							</div>

						</div>
					</div>

					{/* Rhy and I Pic */}
					<div id='cta-right'></div>

				</div> {/*main-sec*/}

				<div id='rnb-loader' className={!this.state.loading ? 'hide' : null}>
					<div className='pulsate'>
						<img src={RBLogo} id='rnb-loader-icon' width={'30%'} alt="rnb" />
					</div>
					<p>loading love...</p>
				</div>

				{/*<div className='mobile-navigation'>
						<Container>


							<Image
								className='mobile-nav-logo'
								width={100}
								src={invertedCloudLogo}
								centered
							/>

							<ul className='mobile-navigation-links'>
								<li><a onClick={() => this.mobileNavGoToSection('about-section')}>About</a></li>
								<li><a onClick={() => this.mobileNavGoToSection('services-section')}>Services</a></li>
								<li><a onClick={() => this.mobileNavGoToSection('contact-section')}>Contact</a></li>
							</ul>

							<a className='close-mobile-nav' onClick={this.toggleNavVisibility}>
								<Icon name='close' inverted />
							</a>
						</Container>
					</div>*/}

				{/* Our Story */}
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
