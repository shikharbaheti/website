import React from 'react';
import myPhoto from './images/myPhoto.jpg'
import { Col, Row, Card, Image } from 'react-bootstrap'
import './About.css';

function About() {
    return (
        <div className="About" id="about">
            <div className="text-center pb-5 pt-5">
                <Row>
                    <Col>
                        <Card id="card-about">
                            <Card.Body>
                                <Card.Title>
                                    <h1><b>About me</b></h1>
                                </Card.Title>
                                <Card.Text>
                                    <h5>
                                        <p>I am passionate about baseball, sociology, and technology.</p>
                                        <p>I am interested in the fields of cybersecurity and software development.
                                        </p>
                                        <p>
                                            <b>Languages:</b> Python, C++, JavaScript, HTML, CSS, and Verilog.
                                        </p>
                                        <p>
                                            <b>Frameworks:</b> ReactJS, jQuery, NumPy, Bootstrap, Flask, Node.js, and MongoDB
                                        </p>
                                        <p>
                                            <b>Tools:</b> Git, VSCode, Google Suite, Cloud Platform Services (AWS and GCloud)
                                        </p>
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Image alt="myself" src={myPhoto} id="my_photo" thumbnail fluid />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;
