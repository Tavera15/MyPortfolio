import React from 'react';

const BusCardsPage = () => {
	return (
		<div id="BusinessCards" className="section-container">
	      <div className="project">
	      	<h1>Business Cards</h1>
	      	<div className="projects-section">

				<div className="card col-lg-4 col-md-6">
					<img src={require('../contents/JRCard.png')} className="card-img-top" alt="JRlogo"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Joaquin Ramirez Pool Service</h3>
			    	  </div>
				  </div>

	      	</div>
	      </div>

	    </div>
	);
}

export default BusCardsPage;