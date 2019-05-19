import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from './Components/TopBar.js';
import Home from './Components/Home.js';
import UnrealPage from './Components/UEPage.js';
import WebDevPage from './Components/WebDevPage.js';
import './App.css';


class App extends Component{


  render(){

    return (
      <Router>
        <div>
          <TopBar />

          <Route exact path="/MyPortfolio" component={Home} />
          <Route path="/MyPortfolio/Unreal" component={UnrealPage} />
          <Route path="/MyPortfolio/WebDevelopment" component={WebDevPage} />
        
        </div>
      </Router>
    );
  }
}

export default App;
