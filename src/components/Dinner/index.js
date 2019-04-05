import React, { Component } from 'react';
import stv from '../../assets/stv.jpeg';

class Dinner extends Component {
  render() {
	return (
		<div id='dinner-bg' className='rnb-sec'>
			<div className="container">
				<div className="row">
					<div className='col-12'>
						<h4 className='title-header'>Brock &amp; Rhylee</h4>
						<h2>Happily Ever After - Celebration Dinner Menu</h2>
						<p>Please review the menu provided below, and be sure to choose one entree option per person. We look forward to sharing our first meal as Mr & Mrs with you all!</p>
					</div>    

					<div className='col-6'>
						<h4>Salads</h4>
						<p><strong>Stonewater Salad</strong> - mixed greens / granny smith apples / dried cranberries / crumbled bleu cheese / toasted almonds / house-made honey herb vinaigrette</p>
						<p><strong>Caesar Salad</strong> - romaine hearts / shaved asiago cheese / croutons / creamy caesar dressing</p>
						<p>** Served family style</p>
					</div>   

					<div className='col-6'>
						<h4>Sides</h4>
						<p><strong>Roasted Brussel Sprouts</strong> - bacon / onion / balsamic reduction</p>
						<p><strong>Fingerling Potatoes</strong> - spinach / onion / truffle oil / parmesan cheese</p>
						<p><strong>Fresh Green Beans</strong> - roasted garlic / olive oil</p>
						<p>** Served family style</p>
					</div>  

					<div className='col-12'>
						<h4>Entree's</h4>
						<p>Please choose your entree below.</p>
						<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSePm3CdS9LI_Lt67hVH2iJHIqNVjl3ZBHB1NNr4m0RB9tdb7w/viewform?embedded=true" width="100%" height="1193" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
					</div>
				</div>
			</div>
		</div>	
	)
  }
}

export default Dinner
