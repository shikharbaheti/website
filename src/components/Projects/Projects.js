import React from 'react';
import { Container, Button, Row, Card, Image, CardDeck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Projects.css';
import societyhub from '../../images/society-hub.PNG'
import flavor from '../../images/flavourlogo.png'
import portfolio from '../../images/portfolio.PNG'
import envison from '../../images/envision.png'
import backButton from '../../images/back-button.png'

function Projects() {
    return (
        <div className="Projects">
            <Container>
                <Link to="/">
                    <Image fluid src={backButton} className="backButton" />
                </Link>
                <h3 className="display-3">Projects</h3>
                <div className="projects-cards text-center">
                    <Row>
                        <CardDeck>
                            <Card className="projects-card">
                                <Card.Body>
                                    <Card.Title><b>Flavor</b></Card.Title>
                                    <Card.Text>
                                        <Image className="projects-photo" src={flavor} fluid />
                                        <br></br>
                                    Flavor is an app created for the <b>Capital One Software Engineering Summit 2020</b>. The app utilizes Yelp's Fusion API to search and return businesses based on the location inputs of the user. The app displays the locations of the businesses on a Google Maps API map and uses Geocoding to translate coordinates to text and vice versa.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer id="projects-footer">
                                    <a href="https://flavorproject.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button variant="primary">Link</Button>{' '}</a>
                                    <a href="https://github.com/shikharbaheti/flavor" rel="noopener noreferrer" target="_blank"><Button variant="dark">Github</Button>{' '}</a>
                                </Card.Footer>
                            </Card>
                            <Card className="projects-card">
                                <Card.Body>
                                    <Card.Title><b>Society Hub</b></Card.Title>
                                    <Card.Text>
                                        <Image className="projects-photo" src={societyhub} fluid />
                                        <br></br>
                                    Created a website for the Student Engineers' Council for engineering students at Texas A&M University. Working along with a team of 3 members, constructed a website for different engineering student organizations at Texas A&M to collaborate and share events for general public to view. I worked on the Front-end of the website utilizing my knowledge of ReactJs, HTML, CSS, and the Bootstrap framework. The website is projected to be used by <b>20,000 students</b>.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer id="projects-footer">
                                    <Button variant="danger">Under construction</Button>{' '}
                                    <a href="https://github.com/secsysadmin/engineering-societies" rel="noopener noreferrer" target="_blank"><Button variant="dark">Github</Button>{' '}</a>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row>
                        <CardDeck>
                            <Card className="projects-card">
                                <Card.Body>
                                    <Card.Title><b>EnVison Conference</b></Card.Title>
                                    <Card.Text>
                                        <Image className="projects-photo" src={envison} fluid />
                                        <br></br>
                                    Created a website to host the EnVision Conference. The Texas A&M EnVision Conference is an engineering design competition with a strict focus on inspiring K-12 students to explore the field of engineering scratch using. The website is created with React and Bootstrap and is used by more than <b>500 users</b>.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer id="projects-footer">
                                    <a href="https://envision.sec.tamu.edu/" rel="noopener noreferrer" target="_blank"><Button variant="primary">Link</Button>{' '}</a>
                                    <a href="https://github.com/secsysadmin/envision-2020-live-site" rel="noopener noreferrer" target="_blank"><Button variant="dark">Github</Button>{' '}</a>
                                </Card.Footer>
                            </Card>
                            <Card className="projects-card">
                                <Card.Body>
                                    <Card.Title><b>Personal website</b></Card.Title>
                                    <Card.Text>
                                        <Image className="projects-photo" src={portfolio} fluid />
                                        <br></br>
                                    Created a personal portfolio website from scratch using, ReactJS with the React-Bootstrap framework.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer id="projects-footer">
                                    <a href="https://shikharbaheti.net" rel="noopener noreferrer" target="_blank"><Button variant="primary">Link</Button>{' '}</a>
                                    <a href="https://github.com/shikharbaheti/website" rel="noopener noreferrer" target="_blank"><Button variant="dark">Github</Button>{' '}</a>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Projects;