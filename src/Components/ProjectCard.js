import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props)
{
	return(
		<div className="card col-lg-4 col-md-6">
			<img src={props.imageURL} className="card-img-top" alt={props.name}/>				    
			<div className="card-body">
				<h3 className="card-title">{props.name}</h3>
				<h5 className="card-text">{props.desc}</h5>

				{props.codeURL ?
					<a className="align-middle btn btn-primary btn-lg" href={props.codeURL} target="_blank" rel="noopener noreferrer"> 
						<FontAwesomeIcon 
							icon={props.codeButtonText === "Github" ? faGithub : faCode} 
							size="1x" 
						/> View Code
					</a>
				: null}

				{props.extraCode ? 
					<a className="align-middle btn btn-primary btn-lg" href={props.extraCode} target="_blank" rel="noopener noreferrer"> 
						<FontAwesomeIcon icon={faCode} size="1x" /> 
						View Code
					</a>
				: null}

				{props.siteURL ?
					<a className="btn btn-primary btn-lg" href={props.siteURL} target="_blank" rel="noopener noreferrer"> 
						<FontAwesomeIcon icon={faExternalLinkAlt} size='1x' style={{marginRight: 10}}/> 
						Visit Site
					</a> 
	    	  	: null}

	    	  	{props.buttonHandle ?
    	  			<button className="btn btn-primary btn-lg" onClick={() => props.buttonHandle(props.name)}>View Pictures</button>
	    	  	: null}
			
			</div>
	  </div>
	)
}

export default ProjectCard;