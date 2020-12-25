import React from 'react';
import { Container, Card, Row, CardDeck, Image } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import sec from '../../images/sec.png'
import zlp from '../../images/college_of_engr.png'
import tbe from '../../images/big_event.jpg'
import spencer from '../../images/msc_spencer.png'
import flc from '../../images/flc.jpg'
import mscalot from '../../images/alot.jpg'
import backButton from '../../images/back-button.png'

function Involvement() {
    return (
        <div className="Involvement">
            <Container>
                <Link to="/">
                    <Image fluid src={backButton} className="backButton" />
                </Link>
                <h3 className="display-3 mb-0">Involvement</h3>
                <div className="involvement-cards text-center">
                    <Row>
                        <CardDeck>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Student Engineers' Council</b></Card.Title>
                                    <h4 className="display-6">System Administration Subcommittee</h4>
                                    <Card.Text>
                                        <a href="https://sec.tamu.edu" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={sec} fluid /></a>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">The Student Engineers' Council is one of the oldest organizations on campus as it was founded by the Dean of Engineering in 1939.</li>
                                                <li class="list-group-item">We act as a representative body for all 15,000 engineering students at Texas A&M</li>
                                                <li class="list-group-item">With a huge focus on community and engineering development, we organize and host numerous events throughout the year with the most prominent one being the Engineering Career Fair - the largest career fair in the country</li>
                                                <li class="list-group-item">Working along with Sys Admin Council in the SEC, I have had the opportunity to innovate and maintain various SEC websites such as MembershipHub, FinanceHub, Career Fair, website, etc</li>
                                                <li class="list-group-item">These websites are used by over 1500 students every month and are integral to the functioning of the SEC</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    January 2020 - Present
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>Zachry Leadership Program</b></Card.Title>
                                    <h4 className="display-6">Cohort E Member</h4>
                                    <Card.Text>
                                        <a href="https://engineering.tamu.edu/student-life/zachry-leadership-program/index.html" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={zlp} fluid /></a>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">I was selected from over 300 engineering student applicants be a member of the Zachry Leadership Program</li>
                                                <li class="list-group-item">The Zachry Leadership Program is a partnership between the College of Engineering at Texas A&M University and the Zachry Group</li>
                                                <li class="list-group-item">The founding premise of the five-semester program is that technical knowledge alone is insufficient to prepare engineering graduates to make the high-impact contributions needed in today’s rapidly changing world</li>
                                                <li class="list-group-item">Maximizing your potential requires holistic development, a broader and deeper level of personal awareness and enhanced leadership skills</li>
                                                <li class="list-group-item">Selection to this program is highly competitive and consists of 5 mandatory pre-semester retreats and a 5 semester classes</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    November 2019 - Present
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>The Big Event</b></Card.Title>
                                    <h4 className="display-6">Operations Executive</h4>
                                    <Card.Text>
                                        <a href="https://bigevent.tamu.edu/" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={tbe} fluid /></a>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">The Big Event is the largest one-day student run service project in the nation. Each spring, thousands of students at Texas A&M University come together to say a big "Thank you" to the residents of Bryan/College Station area residents</li>
                                                <li class="list-group-item">Led a team of 60 staff members to organize the largest student run community service event in the nation</li>
                                                <li class="list-group-item">In charge of 18,000 student volunteers and 2000+ tools to conduct volunteering for more than 2500 residents</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    November 2018 - Present
                            </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row>
                        <CardDeck>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>MSC Spencer Leadership Conference</b></Card.Title>
                                    <h4 className="display-6">Delegate</h4>
                                    <Card.Text>
                                        <a href="https://spencer.tamu.edu/" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={spencer} fluid /></a>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">MSC Spencer Leadership Conference provides programs in leadership training and values development through exposing prospective student leaders to leaders in business, industry, education, innovation, inclusion, and public service</li>
                                                <li class="list-group-item">The three main pillars of Spencer are Self-Authorship, Innovative Leadership, and Selfless Service</li>
                                                <li class="list-group-item">Spencer Leadership Conference takes place for three days in Dallas, TX exploring various businesses and talking to leaders in the real world gaining knowledge from their experience working in the industrys</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    September 2019 - February 2020
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>MSC Fall Leadership Conference</b></Card.Title>
                                    <h4 className="display-6">Director of Operations</h4>
                                    <Card.Text>
                                        <a href="https://flc.tamu.edu/" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={flc} fluid /></a>
                                        <br></br>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">The Memorial Student Center Annual Fall Leadership Conference is a highly anticipated conference tailored to provide student leaders an opportunity to network and further develop leadership skills - the Aggie Way</li>
                                                <li class="list-group-item">During the conference, Texas A&M student leaders will network with their peers, former students, administrators, business professionals and members of our highly esteemed faculty while exploring the key concepts of leadership</li>
                                                <li class="list-group-item">As the Director Of Operations, I facilitated the logistics of the retreat such as transportation, food, lodging, etc.</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    May 2019 - August 2019
                            </Card.Footer>
                            </Card>
                            <Card className="involvement-card">
                                <Card.Body>
                                    <Card.Title><b>MSC Aggie Leaders of Tomorrow</b></Card.Title>
                                    <h4 className="display-6">Mr. FLO Marketing Subcommittee</h4>
                                    <Card.Text>
                                        <a href="https://alot.tamu.edu/" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={mscalot} fluid /></a>
                                        <br></br>
                                        <br></br>
                                        <p>
                                            <ul class="list-group">
                                                <li class="list-group-item">MSC Aggie Leaders of Tomorrow (ALOT) is a freshman organization that provides programs and service opportunities that foster leadership and personal growth for students at Texas A&M</li>
                                                <li class="list-group-item">With MSC ALOT, I was involved with the Mr. FLO Sub committee. Mr. FLO put on an all-male talent show encompassing boys from all the FLOs on campus</li>
                                                <li class="list-group-item">I, along with my team, created marketing materials for Mr. FLO such as posters, photos, merchandise, etc.</li>
                                            </ul>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer id="involvement-footer">
                                    September 2018 - May 2019
                            </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Involvement;