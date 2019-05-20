import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from './Components/TopBar.js';
import Home from './Components/Home.js';
import UnrealPage from './Components/UEPage.js';
import WebDevPage from './Components/WebDevPage.js';
import BusCardsPage from './Components/BusCardsPage.js';
import './App.css';


class App extends Component{


  render(){

    return (
      <Router>
        <div>
          <TopBar />

          <Route exact path="/MyPortfolio" component={Home} />
          <Route exact path="/MyPortfolio/Unreal" component={UnrealPage} />
          <Route exact path="/MyPortfolio/WebDevelopment" component={WebDevPage} />
          <Route exact path="/MyPortfolio/BusinessCards" component={BusCardsPage} />
          <Route exact path="/MyPortfolio/Unreal/test" component={UnrealPage} />
          <Route exact path="/MyPortfolio/Unreal/test2" component={UnrealPage} />

        </div>
      </Router>
    );
  }
}

export default App;
