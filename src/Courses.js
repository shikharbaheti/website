import React from 'react';
import './Courses.css';
import { Card, Row, CardDeck, ListGroup } from 'react-bootstrap';

function Courses() {
    return (
        <div className="Courses">
            <div className="text-center mt-3">
                <h1 className="display-3">
                    Courses
                </h1>
                <Row>
                    <CardDeck>
                        <Card className="courses-card">
                            <Card.Body>
                                <Card.Title><b>Spring 2020</b></Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>CSCE 221 4 Creds - Data Structures and Algorithms</ListGroup.Item>
                                        <ListGroup.Item>CSCE 222 3 Creds - Discrete Structural Computing</ListGroup.Item>
                                        <ListGroup.Item>ECEN 214 4 Creds - Electric Circuit Theory</ListGroup.Item>
                                        <ListGroup.Item>ENGR 251 3 Creds - Creating a Self-Aware Leader</ListGroup.Item>
                                        <ListGroup.Item>MATH 308 3 Creds - Differential Equations</ListGroup.Item>
                                        <ListGroup.Item>STAT 211 3 Creds - Principles of Statistics 1</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="courses-card">
                            <Card.Body>
                                <Card.Title><b>Spring 2020</b></Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="courses-card">
                            <Card.Body>
                                <Card.Title><b>Spring 2020</b></Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="courses-card">
                            <Card.Body>
                                <Card.Title><b>Spring 2020</b></Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
            </div>
        </div>
    );
}

export default Courses;
