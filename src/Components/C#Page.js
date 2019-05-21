import React from 'react';

const CSharpPage = () => {
	return (
		<div id="WebDevPage" className="section-container">
	      <div className="project">
	      	<h1>C# .net and C# Forms</h1>
	      	<div className="projects-section">
	      		<div className="row">
				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/CSharp/boggle.png')} className="card-img-top" alt="JRlogo"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Boggle Game</h3>
					      <h5 className="card-text">Final project for Game & Simulation Programming I. The code used to design the Form is the instructor's. The code to make the game functional is mine.</h5>
					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/Final-Boggle" target="_blank" rel="noopener noreferrer">Github</a>
			    	  </div>
				  </div>
				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/CSharp/Invoice Gen.png')} className="card-img-top" alt="JRlogo"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Invoice Generator</h3>
					      <h5 className="card-text">My first C# Form project that can be used as a tool for a small business. This application can store basic customer information using a JSON file, keep track of invoice numbers, and save invoices to a folder.</h5>
					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/InvoiceGenerator" target="_blank" rel="noopener noreferrer">Github</a>
			    	  </div>
				  </div>
				</div>
	      	</div>

	      </div>

	    </div>
	);
}

export default CSharpPage;