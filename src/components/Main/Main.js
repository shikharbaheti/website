import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './Main.css';
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="Main">
            <Container>
                <h3 className="display-3">Shikhar Baheti</h3>
                <div className="about">
                    <p>
                        Hi, I am Shikhar! I am <b>junior</b> Computer Science major at <span style={{ 'color': '#500000' }}><b>Texas A&M University</b></span>.
                    </p>
                    <p>
                        I previously interned at <span style={{ 'color': '#004379' }}><b>Molecula</b></span> as a software engineering intern.
                    </p>
                    <p>
                        I am interested in the fields of <b>software development</b>, cybersecurity, and product management.
                    </p>
                    <p>
                        I have a certificate in <b>Holistic Leadership</b>.
                    </p>
                    <hr />
                </div>

                <div className="links text-center">
                    <Row>
                        <Col lg="auto">
                            <a href="resume.pdf" rel="noopener noreferrer" target="_blank">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Resume</b></Button>
                            </a>
                            <a href="mailto:shikhar@tamu.edu">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Contact</b></Button>
                            </a>
                            <Link to="/experience">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Experience</b></Button>
                            </Link>
                            <Link to="/projects">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Projects</b></Button>
                            </Link>
                            <Link to="/involvement">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Involvement</b></Button>
                            </Link>
                        </Col>
                        <Col>
                            <a href="https://github.com/shikharbaheti" rel="noopener noreferrer" target="_blank"><img alt="github" src={github} class="contact_logos" /></a>
                            <a href="https://www.linkedin.com/in/shikharbaheti/" rel="noopener noreferrer" target="_blank"><img alt="linkedin" src={linkedin} class="contact_logos" /></a>
                            <a href="https://www.instagram.com/shikharbaheti/" rel="noopener noreferrer" target="_blank"><img alt="instagram" src={instagram} class="contact_logos" /></a>
                            <a href="https://www.facebook.com/shikharbaheti" rel="noopener noreferrer" target="_blank"><img alt="facebook" src={facebook} class="contact_logos" /></a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Main;