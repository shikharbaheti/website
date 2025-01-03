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
                        Hi! I am a <b>software development engineer 2</b> at <span style={{ 'color': '#ff9900' }}><b>Amazon</b> </span> based in <b>Austin, TX</b>.
                    </p>
                    <p>
                        I graduated from <span style={{ 'color': '#500000' }}><b>Texas A&M University</b></span> with a <b>Bachelors of Science</b> in <span style={{ 'color': '#500000' }}><b>Computer Science</b></span> in <span style={{ 'color': '#500000' }}><b>2022</b></span>.
                    </p>
                    <p>
                        I am interested in the fields of <b>software development</b>, venture-captital, and high frequency trading.
                    </p>
                    <hr />
                </div>

                <div className="links text-center">
                    <Row>
                        <Col>
                            <a href="resume.pdf" rel="noopener noreferrer" target="_blank">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Resume</b></Button>
                            </a>
                            <a href="mailto:shikhar@tamu.edu">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>E-mail</b></Button>
                            </a>
                            {/* <Link to="/experience">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Experience</b></Button>
                            </Link>
                            <Link to="/projects">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Projects</b></Button>
                            </Link>
                            <Link to="/involvement">
                                <Button variant="outline-dark" size="lg" className="navlinks m-2"><b>Involvement</b></Button>
                            </Link> */}
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