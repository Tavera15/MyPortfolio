import React from 'react';

const WebDevPage = () => {
	return (
		<div id="WebDevPage" className="section-container">
	      <div className="project">
	      	<h1>Web Development</h1>
	      	<div className="projects-section">
	      		<div className="row">
				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/logo.png')} className="card-img-top" alt="JRlogo"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Joaquin Ramirez Pool Service</h3>
					      <h5 className="card-text">A one-page website that uses Bootstrap.</h5>
					      <a className="btn btn-primary btn-lg" href="https://tavera15.github.io/JoaquinPoolCompany/" target="_blank" rel="noopener noreferrer">Visit Page</a>
			    	  </div>
				  </div>
				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/portfolio.jpg')} className="card-img-top" alt="JRlogo"/>				    
					  <div className="card-body">
					      <h3 className="card-title">My Porfolio</h3>
					      <h5 className="card-text">Code to this portfolio. Used ReactJS and Bootstrap.</h5>
					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/MyPortfolio" target="_blank" rel="noopener noreferrer">Github</a>
			    	  </div>
				  </div>
				</div>

	      	</div>

	      </div>

	    </div>
	);
}

export default WebDevPage;