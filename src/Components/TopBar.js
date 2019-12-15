import React, {Component} from 'react';
import { Link } from "react-router-dom";


class TopBar extends Component {
	shouldComponentUpdate(nextProps, nextState){
		return false;
	}

	render() {
		return(
			<div className="my-nav">
		      <h1>Joaquin Ramirez</h1>
		      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

		        <p className="navbar-brand">My Portfolio</p>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
		          <ul className="navbar-nav">
					<li className="nav-item">
		              <a className="nav-link" href="https://github.com/Tavera15" target="_blank" rel="noopener noreferrer">Github</a>
	                </li>
		            <li className="nav-item dropdown">
		              <Link to='/MyPortfolio' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Projects</Link>
		              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		                <Link to='/MyPortfolio/Unreal' className="dropdown-item">Unreal Engine</Link>
		                <Link to='/MyPortfolio/WebDevelopment' className="dropdown-item">Web Development</Link>
		                <Link to='/MyPortfolio/CSharp' className='dropdown-item'>C#</Link>
		                <Link to='/MyPortfolio/Unity' className='dropdown-item'>Unity</Link>
		              </div>
		            </li>
		            <li className="nav-item active">
		              <Link to="/MyPortfolio" className="nav-link">Home</Link>
		            </li>
		          </ul>

		        </div>
		      </nav>
		    </div>
		);
	}
}

export default TopBar;