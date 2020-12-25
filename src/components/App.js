import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './Main/Main';
import Experience from './Experience/Experience';
import Involvement from './Involvement/Involvement';
import Projects from './Projects/Projects';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/involvement">
            <Involvement />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;