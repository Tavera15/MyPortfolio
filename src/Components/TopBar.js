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
		        <Link to="/MyPortfolio" className="navbar-brand">Home</Link>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
		          
		          <ul className="navbar-nav">
		            <li className="nav-item active">
		              <Link to="/MyPortfolio" className="nav-link">Home</Link>
		            </li>
		            <li className="nav-item dropdown">
		              <Link to='/MyPortfolio' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Projects</Link>
		              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		                <Link to='/MyPortfolio/Unreal' className="dropdown-item">Unreal Engine</Link>
		                <Link to='/MyPortfolio/WebDevelopment' className="dropdown-item">Web Development</Link>
		                <Link to='/MyPortfolio' className="dropdown-item">Business Cards</Link>
		              </div>
		            </li>
		            <li className="nav-item">
		                <Link to='/MyPortfolio' className="nav-link">About</Link>
		            </li>
		          </ul>

		        </div>
		      </nav>
		    </div>
		);
	}
}

export default TopBar;