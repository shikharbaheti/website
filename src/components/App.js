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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        {/* <Route path='/experience'>
          <Experience />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/involvement'>
          <Involvement />
        </Route> */}
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
