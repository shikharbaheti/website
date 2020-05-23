import React from 'react';
import { Card, CardDeck, Button, Row, Image } from 'react-bootstrap';
import societyhub from './images/society-hub.PNG'
import flavor from './images/flavourlogo.png'
import portfolio from './images/portfolio.PNG'
import './Projects.css';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <div className="text-center mt-3">
                <h1 className="display-3">
                    Projects
                </h1>
                {/* <Row className="projects-row"> */}
                <Row>
                    <CardDeck>
                        <Card className="projects-card">
                            {/* <Card.Img variant="top" src={Flavor} /> */}
                            <Card.Body>
                                <Card.Title><b>Flavor</b></Card.Title>
                                <Card.Text>
                                    <Image className="projects-photo" src={flavor} fluid />
                                    <br></br>
                                    Flavor is an app created for the Capital One Software Engineering Summit 2020. The app utilizes Yelp's Fusion API to search and return businesses based on the location inputs of the user. The app displays the locations of the businesses on a Google Maps API map and uses Geocoding to translate coordinates to text and vice versa.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="projects-footer">
                                <a href="https://flavorproject.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button variant="primary">Link</Button>{' '}</a>
                                <a href="https://github.com/shikharbaheti/flavor" rel="noopener noreferrer" target="_blank"><Button variant="secondary">Github</Button>{' '}</a>
                            </Card.Footer>
                        </Card>
                        <Card className="projects-card">
                            {/* <Card.Img variant="top" src={Flavor} /> */}
                            <Card.Body>
                                <Card.Title><b>Society Hub</b></Card.Title>
                                <Card.Text>
                                    <Image className="projects-photo" src={societyhub} fluid />
                                    <br></br>
                                    Created a website for the Student Engineers' Council for engineering students at Texas A&M University. Working along with a team of 3 members, constructed a website for different engineering student organizations at Texas A&M to collaborate and share events for general public to view. I worked on the Front-end of the website utilizing my knowledge of ReactJs, HTML, CSS, and the Bootstrap framework.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="projects-footer">
                                <Button variant="danger">Under construction</Button>{' '}
                                <a href="https://github.com/secsysadmin/engineering-societies" rel="noopener noreferrer" target="_blank"><Button variant="secondary">Github</Button>{' '}</a>
                            </Card.Footer>
                        </Card>
                        <Card className="projects-card">
                            {/* <Card.Img variant="top" src={Flavor} /> */}
                            <Card.Body>
                                <Card.Title><b>Personal website</b></Card.Title>
                                <Card.Text>
                                    <Image className="projects-photo" src={portfolio} fluid />
                                    <br></br>
                                    Created a personal portfolio website from scratch using , ReactJS with the React-Bootstrap framework.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="projects-footer">
                                <a href="https://shikharbaheti.net" rel="noopener noreferrer" target="_blank"><Button variant="primary">Link</Button>{' '}</a>
                                <a href="https://github.com/shikharbaheti/website" rel="noopener noreferrer" target="_blank"><Button variant="secondary">Github</Button>{' '}</a>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>
            </div>
        </div>
    );
}

export default Projects;
