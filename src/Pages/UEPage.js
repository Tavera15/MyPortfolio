import React from 'react';
import ProjectCard from "../Components/ProjectCard";
import PageCarousel from '../Components/PageCarousel';
import ContentImages from '../Components/ContentImages';
import $ from 'jquery'; 

function UnrealPage()
{
	const [carouselImages, setCarousel] = 
		React.useState([
			require('../contents/First Level/prison10.jpg'),
			require('../contents/RPG_Racers/RPG_Racers10.jpg'),
			require('../contents/Airport Museum/AM1.jpg'),
			require('../contents/RPG_Racers/RPG_Racers10.jpg')
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
			<h1 className="project-page-title">Unreal Engine</h1>
			
			<PageCarousel images={carouselImages}/>

			<div className="page-projects">
				<div className="row">
					<ProjectCard 
						name="Racers Pro Grand-Prix"
						imageURL={require("../contents/RPG_Racers/RPG_Racers10.jpg")}
						codeButtonText="Github"
						codeURL="https://github.com/Tavera15/RPG_Racers"
						buttonHandle={handleClick}
						desc="Racing game with an RPG element. Project uses vehicle AI, multiple components - such as Inventory, Player Stats, Movement/Driving - HUDs, and custom weapon and stat items. Made in version 4.21.3. Final project for Game Dev. class at Lone Star College."
					/>

					<ProjectCard 
						name="Airport Museum Survival"
						imageURL={require("../contents/Airport Museum/AM1.jpg")}
						codeButtonText="Github"
						codeURL="https://github.com/Tavera15/SH_Airport"
						buttonHandle={handleClick}
						desc="Larger full, playable, and unpublished, game using version 4.21.3, with basic AI. The main focus was learning to code components using more C++ than Blueprints."
					/>

					<ProjectCard 
						name="Luigi's Mansion Pinball"
						imageURL={require("../contents/LMPinball/LM1.jpg")}
						codeButtonText="Github"
						codeURL="https://github.com/Tavera15/LuigiPinball"
						buttonHandle={handleClick}
						desc="First full, playable, and unpublished, game using version 4.21.3. Main focus was to learn how to implement more complex Blueprints in Unreal Engine. "
					/>

					<ProjectCard 
						name="First Level - Prison"
						imageURL={require("../contents/First Level/prison10.jpg")}
						buttonHandle={handleClick}
						desc="First level built as a major project for college. Some simple Blueprints were implemented."
					/>
				</div>
			</div>
		</div>
	)
}

export default UnrealPage;