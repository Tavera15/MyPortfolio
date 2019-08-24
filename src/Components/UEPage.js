import React, { Component } from 'react';
import $ from 'jquery'; 

class UnrealPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			images: [
				require('../contents/First Level/prison10.jpg'),
				require('../contents/LMPinball/LM1.jpg'),
				require('../contents/Airport Museum/AM1.jpg')
			]
		};
		this.getPrison = this.getPrison.bind(this);
		this.getLMPinball = this.getLMPinball.bind(this);
		this.getAM = this.getAM.bind(this);
	}

	getPrison(e) {
		$(".carousel").carousel(0);

		this.setState({
			images: [
				require('../contents/First Level/prison1.jpg'),
				require('../contents/First Level/prison2.jpg'),
				require('../contents/First Level/prison3.jpg'),
				require('../contents/First Level/prison4.jpg'),
				require('../contents/First Level/prison5.jpg'),
				require('../contents/First Level/prison6.jpg'),
				require('../contents/First Level/prison7.jpg'),
				require('../contents/First Level/prison8.jpg'),
				require('../contents/First Level/prison9.jpg'),
				require('../contents/First Level/prison10.jpg')
			]
		});
	}

	getLMPinball(e){
		$(".carousel").carousel(0);

		this.setState({
			images: [
				require('../contents/LMPinball/LM1.jpg'),
				require('../contents/LMPinball/LM2.jpg'),
				require('../contents/LMPinball/LM3.jpg'),
				require('../contents/LMPinball/LM4.jpg'),
				require('../contents/LMPinball/LM5.jpg'),
				require('../contents/LMPinball/LM6.jpg'),
				require('../contents/LMPinball/LM7.jpg')
			]
		});
	}

	getAM(e){
		$(".carousel").carousel(0);

		this.setState({
			images: [
				require('../contents/Airport Museum/AM1.jpg'),
				require('../contents/Airport Museum/AM2.jpg'),
				require('../contents/Airport Museum/AM3.jpg'),
				require('../contents/Airport Museum/AM4.jpg'),
				require('../contents/Airport Museum/AM5.jpg'),
				require('../contents/Airport Museum/AM6.jpg'),
				require('../contents/Airport Museum/AM7.jpg'),
				require('../contents/Airport Museum/AM8.jpg'),
				require('../contents/Airport Museum/AM9.jpg'),
				require('../contents/Airport Museum/AM10.jpg'),
				require('../contents/Airport Museum/AM11.jpg')
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
		      	<h1>Unreal Engine</h1>
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
						<img src={require('../contents/First Level/prison10.jpg')} className="card-img-top" alt="Prison"/>				    
						  <div className="card-body">
						      <h3 className="card-title">First Level - Prison</h3>
						      <h5 className="card-text">First level built as a major project for college.</h5>
						      <button className="btn btn-primary btn-lg" onClick={this.getPrison}>View Pictures</button>
				    	  </div>
					  </div>
					  <div className="card col-lg-4 col-md-6">
						<img src={require('../contents/LMPinball/LM1.jpg')} className="card-img-top" alt="Luigi"/>				    
						  <div className="card-body">
						      <h3 className="card-title">Luigi's Mansion Pinball</h3>
						      <h5 className="card-text">First full, playable, and unpublished, game using version 4.21.3.</h5>
						      <button className="btn btn-primary btn-lg" onClick={this.getLMPinball}>View Pictures</button>
      					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/LuigiPinball" target="_blank" rel="noopener noreferrer">Github</a>
				    	  </div>
					  </div>

  					  <div className="card col-lg-4 col-md-6">
						<img src={require('../contents/Airport Museum/AM1.jpg')} className="card-img-top" alt="Aiport"/>				    
						  <div className="card-body">
						      <h3 className="card-title">Airport Museum Survival</h3>
						      <h5 className="card-text">Larger full, playable, and unpublished, game using version 4.21.3, with basic AI. The main focus was on coding components.</h5>
						      <button className="btn btn-primary btn-lg" onClick={this.getAM}>View Pictures</button>
      					      <a className="btn btn-primary btn-lg" href="https://github.com/Tavera15/SH_Airport" target="_blank" rel="noopener noreferrer">Github</a>
				    	  </div>
					  </div>

					</div>
		      	</div>
		      </div>
		    </div>
		)
	}
}

export default UnrealPage;