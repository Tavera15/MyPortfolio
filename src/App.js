import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from './Components/TopBar.js';
import Home from './Components/Home.js';
import UnrealPage from './Components/UEPage.js';
import WebDevPage from './Components/WebDevPage.js';
import Unity from './Components/UnityPage.js';
import CSharpPage from './Components/C#Page.js';
import CppPage from './Components/CppPage.js';
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
          <Route exact path="/MyPortfolio/CSharp" component={CSharpPage} />
          <Route exact path="/MyPortfolio/Unity" component={Unity} />
          <Route exact path="/MyPortfolio/CPlusPlus" component={CppPage} />

        </div>
      </Router>
    );
  }
}

export default App;
