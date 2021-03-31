import React from 'react';
import { Container, Card, Row, CardDeck, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Experience.css';

import backButton from '../../images/back-button.png'
import molecula from '../../images/molecula-logo.jpg'
import div_it from '../../images/div_it.jpg'
import csce from '../../images/csce.png'
import cap1 from '../../images/cap1.png'
import aquarium from '../../images/aquarium.png'

function Experience() {
    return (
        <div className="Experience">
            <Container>
                <Link to="/">
                    <Image fluid src={backButton} className="backButton" />
                </Link>
                <h3 className="display-3 mb-0">Experience</h3>
                <div className="experience-cards text-center">
                    <Row>   
                        <CardDeck>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Molecula</b></Card.Title>
                                    <h4 className="display-6">Software Engineering Intern</h4>
                                    <Card.Text>
                                        <a href="https://www.molecula.com" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={molecula} fluid /></a>
                                        <br />
                                        <p>
                                            As a software engineering intern, I collaborated closely with full-time senior engineers. I contribued to Open-Source software and learned about Open-Souce business models, managed services, and commercializing a SaaS cloud offering.
                                        </p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Implemented a Python tool using gRPC to demonstrate the value proposition of Molecula Software, reducing database query times to an average of 10 milliseconds from 120 milliseconds</li>
                                            <li class="list-group-item">Enabled faster tracking of performance and accuracy regression by 15% with a new internal tool in Golang to load test and compare Molecula software versions</li>
                                            <li class="list-group-item">Worked on projects with large datasets (of 5+ terabyte-scale) from Fortune 100 companies to help them evaluate Molecula software</li>
                                            <li class="list-group-item">Developed a documentation website for the Molecula software using React.js and Docker to be used by the engineering team of 12 and 40+ clients</li>
                                            <li class="list-group-item">Used JavaScript, Python, and Go, along with industry-standard and company proprietary APIs to build tools for internal testing and customer demonstrations using the Agile methodology</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    May 2020 - August 2020
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Texas A&M Division of IT</b></Card.Title>
                                    <h4 className="display-6">IT Student Technician</h4>
                                    <Card.Text>
                                        <a href="https://it.tamu.edu" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={div_it} fluid /> </a>
                                        <br />
                                        <p>I work as a part-time IT student technician under the Texas A&M Division of IT</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">I learned how to solve software and hardware issues for Texas A&M Health Science Center which encompass 3 buildings staffed with more than 500 employees and 2000 students.</li>
                                            <li class="list-group-item">I learned how to work in a team setting effectively communicating tasks and information in a fast-paced environment.</li>
                                            <li class="list-group-item">Learned technical IT support knowledge such as how to image computers, encrypt and decrypt using AirWatch, setup DUO authentication, remotely assist users through BOMGAR, utilizing an Active Directory, etc.</li>
                                            <li class="list-group-item">  I am now proficient in utilizing the ServiceNow ticketing system. I assisted, on an average, about 20 users a day with technical troubleshooting at the help desk and answered phone calls to remotely assist users.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    May 2019 - Present
                            </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row>
                        <CardDeck>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Department of Computer Science and Engineering</b></Card.Title>
                                    <h4 className="display-6">Undergraduate Researcher</h4>
                                    <Card.Text>
                                        <a href="https://engineering.tamu.edu/cse/index.html" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={csce} fluid /></a>
                                        <br />
                                        <p>I participated in a summer REU (Research Experiences for Undergraduates) this summer under Dr. Dilma Da Silva in the Computer Science Department. I learned more about deep learning as well as facial recognition frameworks such as OpenCV through Python.</p>
                                        <ul class="list-group">
                                            <li class="list-group-item"> Researched student-submitted programs to identify points of struggle in core computer science classes</li>
                                            <li class="list-group-item">Trained deep learning models using Keras to measure students’ engagement in online classes through facial recognition through OpenCV. Achieved 83% accuracy.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    May 2020 - Present
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Capital One</b></Card.Title>
                                    <h4 className="display-6">Software Engineering Summit</h4>
                                    <Card.Text>
                                        <a href="https://www.capitalone.com" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={cap1} fluid /></a>
                                        <br />
                                        <p>
                                            I was invited to participate in a highly selective week long summit to learn more about Capital One and interact with their engineers regarding their day to day work. I learned about following through the workshops at the summit:
                                    </p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Microsoft Azure Machine Learning</li>
                                            <li class="list-group-item">Google Firebase</li>
                                            <li class="list-group-item">Arduino programming</li>
                                            <li class="list-group-item">Android Development</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    August 2020
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Tennessee Aquarium</b></Card.Title>
                                    <h4 className="display-6">Student Volunteer</h4>
                                    <Card.Text>
                                        <a href="https://tnaqua.org" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={aquarium} fluid /></a>
                                        <br />
                                    As a Youth Volunteer at the Tennessee Aquarium, I guided visitors through various exhibits of the aquarium and demonstrated excellent customer service. I learned a lot about marine biology and had great interactions with the guests informing them about wildlife conservation efforts. My favorite exhibits at the Tennessee Aquarium were the Coral Reef, Fresh Water Tank, and the Penguins.
                                    Note: Acceptance to this program is very competitive requiring an extended application and an interview process.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    June 2017 - August 2018
                            </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Experience;