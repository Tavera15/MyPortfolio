import React from 'react';

const CppPage = () => {
	return (
		<div id="WebDevPage" className="section-container">
	      <div className="project">
	      	<h1>C++</h1>
	      	<div className="projects-section">
	      		<div className="row">

				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/C++Images/Tree.gif')} className="card-img-top" alt="Tree"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Tree</h3>
					      <h5 className="card-text">Uses recursion and trigonometry to draw a tree on a .bmp file.</h5>
					      <a className="btn btn-primary btn-lg" href="https://drive.google.com/drive/folders/1-s9lkbHjoRDdPBqi_naoTtQyJTiojVA4?usp=sharing" target="_blank" rel="noopener noreferrer">Code</a>
			    	  </div>
				  </div>

				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/C++Images/TTT.png')} className="card-img-top" alt="TTT"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Tic-Tac-Toe</h3>
					      <h5 className="card-text">A Tic-Tac-Toe game where the AI is unbeatable. This project uses the Minimax algorithm for the AI to select the best move possible each turn.</h5>
					      <a className="btn btn-primary btn-lg" href="https://drive.google.com/drive/folders/13xOok_BQehiZZSbWtgmpL8v5EhfJyUAA?usp=sharing" target="_blank" rel="noopener noreferrer">Code</a>
			    	  </div>
				  </div>

				  <div className="card col-lg-4 col-md-6">
					<img src={require('../contents/C++Images/WordCloud.png')} className="card-img-top" alt="WordCloud"/>				    
					  <div className="card-body">
					      <h3 className="card-title">Word Cloud</h3>
					      <h5 className="card-text">This program can read a .txt file, read and keep track the number of times a word appears, and creates a word cloud in a .pdf file. It includes a simple word filter as well.</h5>
					      <a className="btn btn-primary btn-lg" href="https://drive.google.com/drive/folders/13tIsdrnR-76J0Yfi75T7s0FjPPiYxBgd?usp=sharing" target="_blank" rel="noopener noreferrer">Code</a>
			    	  </div>
				  </div>

				</div>

				<div className="row">
					  <div className="card col-lg-4 col-md-6">
						<img src={require('../contents/C++Images/Ransom.png')} className="card-img-top" alt="RPG_Racers"/>				    
						  <div className="card-body">
						      <h3 className="card-title">Ransom Note</h3>
						      <h5 className="card-text">This program can read a .txt file and generate a Ransom-Style note with letters having different fonts, font sizes, and colored rectangles.</h5>
						      <a className="btn btn-primary btn-lg" href="https://drive.google.com/drive/folders/1FPehyuPCk1qbrpXI6N7DecqFOsDDhfM3?usp=sharing" target="_blank" rel="noopener noreferrer">Github</a>
				    	  </div>
					  </div>

				</div>

	      	</div>

	      </div>

	    </div>
	);
}

export default CppPage;