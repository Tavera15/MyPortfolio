import React, { Component } from 'react';
import $ from 'jquery'; 

class Unity extends Component {
	constructor(props){
		super(props);

		this.state = {
			images: [
				require('../contents/RunningShip/RS1.jpg'),
				require('../contents/Unity/SurvivalShooter.jpg'),
			]
		};
		this.getRunShip = this.getRunShip.bind(this);
	}

	getRunShip(e) {
		$(".carousel").carousel(0);

		this.setState({
			images: [
				require('../contents/RunningShip/RS1.jpg'),
				require('../contents/RunningShip/RS2.jpg'),
				require('../contents/RunningShip/RS3.jpg'),
				require('../contents/RunningShip/RS4.jpg'),
				require('../contents/RunningShip/RS5.jpg'),
			]
		});
	}

	render() {

		const createImages = this.state.images.map((image, key) => {
			return (key === 0 ?
				<div key={key+1} className="carousel-item active">
	              <img className="d-block w-100 work-img" src={image} alt="First slide" />
	            </div> :
	            <div key={key+1} className="carousel-item">
	              <img className="d-block w-100 work-img" src={image} alt="Next slide" />
	            </div>
			)
		});

		return (
			<div id="Unreal" className="section-container">
		      <div className="project">
		      	<h1>Unity Projects</h1>
		      	<div className="projects-section">
					<div className="image-ctr">
			          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			            <div className="carousel-inner">
			            	{createImages}
			            </div>
			            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			              <span className="sr-only">Previous</span>
			            </a>
			            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			              <span className="carousel-control-next-icon" aria-hidden="true"></span>
			              <span className="sr-only">Next</span>
			            </a>
			          </div>
			        </div>

			        <div className="row">

					  <div className="card col-lg-4 col-md-6">
						<img src={require('../contents/Unity/SurvivalShooter.jpg')} className="card-img-top" alt="SSG"/>				    
						  <div className="card-body">
						      <h3 className="card-title">Survival Shooter</h3>
						      <h5 className="card-text">A 5-6 week assignment where each week was focused on coding animation triggers, multiplayer gameplay, solution paths, "game feel", etc.</h5>
      					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/SurvivalShooter" target="_blank" rel="noopener noreferrer">Github</a>
				    	      <a className="btn btn-primary btn-lg" href="https://drive.google.com/drive/folders/1j859Z2gJldowMgcLe1T0qKjY0RMcHxMp?usp=sharing" target="_blank" rel="noopener noreferrer">More Code</a>
				    	  </div>
					  </div>

  					  <div className="card col-lg-4 col-md-6">
						<img src={require('../contents/RunningShip/RS1.jpg')} className="card-img-top" alt="RS1"/>				    
						  <div className="card-body">
						      <h3 className="card-title">Running Ship</h3>
						      <h5 className="card-text">Advancing Wall of Doom game with a timer to switch locations of the wall, gravity, and meteor spawn points.</h5>
  						      <button className="btn btn-primary btn-lg" onClick={this.getRunShip}>View Pictures</button>
      					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/RunningShip" target="_blank" rel="noopener noreferrer">Github</a>
				    	  </div>
					  </div>

					</div>
		      	</div>
		      </div>
		    </div>
		)
	}
}

export default Unity;