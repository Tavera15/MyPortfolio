import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function CppPage()
{
	return(
		<div className="project-page-section">
			<h1 className="project-page-title">C++</h1>
			
			<div className="page-projects">
				<div className="row">
				  <ProjectCard 
					  name="Tree" 
					  codeButtonText="Code" 
					  imageURL = {require("../contents/C++Images/Tree.gif")} 
					  codeURL="https://drive.google.com/drive/folders/1-s9lkbHjoRDdPBqi_naoTtQyJTiojVA4?usp=sharing"
					  desc = "Uses recursion and trigonometry to draw a tree on a .bmp file."
				  />

				  <ProjectCard 
					  name="Tic-Tac-Toe" 
					  codeButtonText="Code" 
					  imageURL = {require("../contents/C++Images/TTT.png")} 
					  codeURL="https://drive.google.com/drive/folders/1-s9lkbHjoRDdPBqi_naoTtQyJTiojVA4?usp=sharing" 
					  desc="A Tic-Tac-Toe game where the AI is unbeatable. This project uses the Minimax algorithm for the AI to select the best move possible each turn."
				  />

				  <ProjectCard 
					  name="Word Cloud" 
					  codeButtonText="Code" 
					  imageURL = {require("../contents/C++Images/WordCloud.png")} 
					  codeURL="https://drive.google.com/drive/folders/1-s9lkbHjoRDdPBqi_naoTtQyJTiojVA4?usp=sharing" 
					  desc="This program can read a .txt file, read and keep track the number of times a word appears, and creates a word cloud in a .pdf file. It includes a simple word filter as well."
				  />

				  <ProjectCard 
					  name="Ransom Note" 
					  codeButtonText="Code" 
					  imageURL = {require("../contents/C++Images/Ransom.png")} 
					  codeURL="https://drive.google.com/drive/folders/1-s9lkbHjoRDdPBqi_naoTtQyJTiojVA4?usp=sharing" 
					  desc="This program can read a .txt file and generate a Ransom-Style note with letters having different fonts, font sizes, and colored rectangles."
				  />
				</div>
			</div>
		</div>
	)
}

export default CppPage;