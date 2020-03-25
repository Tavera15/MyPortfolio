import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function WebDevPage()
{
	return(
		<div className="project-page-section">
			<h1 className="project-page-title">Web Development</h1>
			
			<div className="page-projects">
				<div className="row">
					<ProjectCard 
						name="Joaquin Ramirez Pool service"
						codeButtonText="Github"
						imageURL={require('../contents/logo.png')}
						siteURL="https://tavera15.github.io/JoaquinPoolCompany/"
						codeURL="https://github.com/Tavera15/JoaquinPoolCompany"
						desc="A one-page website that uses Bootstrap."
					/>

					<ProjectCard
						name="My Porfolio"
						codeButtonText="Github"
						imageURL={require('../contents/portfolio.jpg')}
						codeURL="https://github.com/Tavera15/MyPortfolio"
						desc="Code to this portfolio. Used React.JS and Bootstrap."
					/>

					<ProjectCard
						name="Pokemon App"
						codeButtonText="Github"
						imageURL={require('../contents/Pokemon_App.jpg')}						
						siteURL="https://tavera15.github.io/Pokemon_App/"
						codeURL="https://github.com/Tavera15/Pokemon_App"
						desc="A React.JS project that uses the PokeAPI (https://pokeapi.co/) to display Pokemon and their data in a second page."
					/>
				</div>
			</div>
		</div>
	)
}

// const WebDevPage = () => {
// 	return (
// 		<div id="WebDevPage" className="section-container">
// 	      <div className="project">
// 	      	<h1>Web Development</h1>
// 	      	<div className="projects-section">
// 	      		<div className="row">
				  
// 				  <div className="card col-lg-4 col-md-6">
// 					<img src={require('../contents/logo.png')} className="card-img-top" alt="JRlogo"/>				    
// 					  <div className="card-body">
// 					      <h3 className="card-title">Joaquin Ramirez Pool Service</h3>
// 					      <h5 className="card-text">A one-page website that uses Bootstrap.</h5>
// 					      <a className="btn btn-primary btn-lg" href="https://tavera15.github.io/JoaquinPoolCompany/" target="_blank" rel="noopener noreferrer">Visit Page</a>
// 			    	  </div>
// 				  </div>

// 				  <div className="card col-lg-4 col-md-6">
// 					<img src={require('../contents/portfolio.jpg')} className="card-img-top" alt="JRlogo"/>				    
// 					  <div className="card-body">
// 					      <h3 className="card-title">My Porfolio</h3>
// 					      <h5 className="card-text">Code to this portfolio. Used React.JS and Bootstrap.</h5>
// 					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/MyPortfolio" target="_blank" rel="noopener noreferrer">Github</a>
// 			    	  </div>
// 				  </div>

// 				  <div className="card col-lg-4 col-md-6">
// 					<img src={require('../contents/Pokemon_App.jpg')} className="card-img-top" alt="JRlogo"/>				    
// 					  <div className="card-body">
// 					      <h3 className="card-title">Pokemon App</h3>
// 					      <h5 className="card-text">A React.JS project that uses the PokeAPI (https://pokeapi.co/) to display Pokemon and their data in a second page.</h5>
// 					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/Pokemon_App" target="_blank" rel="noopener noreferrer">Github</a>
// 			    	      <a className="btn btn-primary btn-lg" href="https://tavera15.github.io/Pokemon_App/" target="_blank" rel="noopener noreferrer">Visit Page</a>
// 			    	  </div>
// 				  </div>

// 				</div>

// 	      	</div>

// 	      </div>

// 	    </div>
// 	);
// }

export default WebDevPage;