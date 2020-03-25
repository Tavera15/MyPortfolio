import React from 'react';
import $ from 'jquery'; 
import ProjectCard from "../Components/ProjectCard";
import PageCarousel from '../Components/PageCarousel';
import ContentImages from '../Components/ContentImages'; 

function UnityPage(props)
{
	const [carouselImages, setCarousel] = 
		React.useState([
			require('../contents/RunningShip/RS1.jpg'),
			require('../contents/Unity/SurvivalShooter.jpg')
		]);
	

	function handleClick(imagesGroup)
	{
		const requestedImages = ContentImages[imagesGroup];

		if(requestedImages !== carouselImages)
		{
			$(".carousel").carousel(0);
			setCarousel(ContentImages[imagesGroup]);
		}
	}

	return(
		<div className="project-page-section">
			<h1 className="project-page-title">Unity Projects</h1>
			
			<PageCarousel images={carouselImages}/>

			<div className="page-projects">
				<div className="row">
					<ProjectCard 
						name="Running Ship"
						imageURL={require("../contents/RunningShip/RS1.jpg")}
						codeButtonText="Github"
						codeURL="https://github.com/Tavera15/RunningShip"
						buttonHandle={handleClick}
						desc= "Advancing Wall of Doom game with a timer to switch locations of the wall, gravity, and meteor spawn points. Final project for Game Sim. II at Lone Star College. The goal was to build a playable game in one week with the knowledge gained thoughout the semester."
					/>

					<ProjectCard 
						name="Survival Shooter"
						imageURL={require("../contents/Unity/SurvivalShooter.jpg")}
						codeButtonText="Github"
						codeURL="https://github.com/Tavera15/SurvivalShooter"
						desc="Larger full, playable, and unpublished, game using version 4.21.3, with basic AI. The main focus was learning to code components using more C++ than Blueprints."
						extraCode="https://drive.google.com/drive/folders/1j859Z2gJldowMgcLe1T0qKjY0RMcHxMp?usp=sharing"
					/>
				</div>
			</div>
		</div>
	)
}

 export default UnityPage;