import React from 'react';
import NavBar from './Navbar'
import Main from './Main'
import About from './About'
import Projects from './Projects'
import Involvement from './Involvement'
import Resume from './Resume'
import Footer from './Footer'
import ScrollUpButton from "react-scroll-up-button";
// import Courses from './Courses'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollUpButton AnimationDuration={400} />
      <Container fluid>
        <NavBar />
        <Main />
        <About />
        <Projects />
        <Involvement />
        <Resume />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
