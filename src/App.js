import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from './Components/TopBar.js';
import Home from './Pages/Home.js';
import UnrealPage from './Pages/UEPage.js';
import WebDevPage from './Pages/WebDevPage.js';
import Unity from './Pages/UnityPage.js';
import CSharpPage from './Pages/C#Page.js';
import CppPage from './Pages/CppPage.js';
import './App.css';

function App()
{
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

export default App;
