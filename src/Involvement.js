import React from 'react';
import { Card, Row, CardDeck, Image } from 'react-bootstrap';
import './Involvement.css';
import molecula from './images/molecula-logo.jpg'
import div_it from './images/div_it.jpg'
import aquarium from './images/aquarium.png'
import sec from './images/sec.png'
import zlp from './images/college_of_engr.png'
import tbe from './images/big_event.jpg'
import spencer from './images/msc_spencer.png'
import flc from './images/flc.jpg'
import mscalot from './images/alot.jpg'

function Involvement() {
    return (
        <div className="Involvement" id="involvement">
            <div className="text-center mt-3">
                <h1 className="display-3">
                    Involvement and Experience
                </h1>
                <h2 className="display-4">
                    Work Experience
                </h2>
                <Row>
                    <CardDeck>
                        <Card className="involvement-card">
                            <Card.Body>
                                <Card.Title><b>Molecula</b></Card.Title>
                                <h4 className="display-6">Software Engineering Intern</h4>
                                <Card.Text>
                                    <Image className="involvement-photo" src={molecula} fluid />
                                    <br></br>
                                    As a software engineering intern, I collaborated closely with full-time senior engineers. I contribued to Open-Source software and learned about Open-Souce business models, managed services, and commercializing a SaaS cloud offering.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="involvement-footer">
                                May 2020 - Present
                            </Card.Footer>
                        </Card>
                        <Card className="involvement-card">
                            <Card.Body>
                                <Card.Title><b>Texas A&M Division of IT</b></Card.Title>
                                <h4 className="display-6">IT Student Technician</h4>
                                <Card.Text>
                                    <Image className="involvement-photo" src={div_it} fluid />
                                    <br></br>
                                    I learned how to solve software and hardware issues for Texas A&M Health Science Center which encompass 3 buildings staffed with more than 500 employees and 2000 students.
                                    I learned how to work in a team setting effectively communicating tasks and information in a fast-paced environment. Learned technical IT support knowledge such as how to image computers, encrypt and decrypt using AirWatch, setup DUO authentication, remotely assist users through BOMGAR, utilizing an Active Directory, etc. I am now proficient in utilizing the ServiceNow ticketing system. I assisted, on an average, about 20 users a day with technical troubleshooting at the help desk and answered phone calls to remotely assist users.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="involvement-footer">
                                May 2019 - Present
                            </Card.Footer>
                        </Card>
                        <Card className="involvement-card">
                            <Card.Body>
                                <Card.Title><b>Tennessee Aquarium</b></Card.Title>
                                <h4 className="display-6">Student Volunteer</h4>
                                <Card.Text>
                                    <Image className="involvement-photo" src={aquarium} fluid />
                                    <br></br>
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
                <br></br>
                <h2 className="display-4">
                    Organizations and Leadership
                </h2>
                <Row>
                    <CardDeck>
                        <Card className="involvement-card">
                            <Card.Body>
                                <Card.Title><b>Student Engineers' Council</b></Card.Title>
                                <h4 className="display-6">System Administration Subcommittee</h4>
                                <Card.Text>
                                    <Image className="involvement-photo" src={sec} fluid />
                                    <br></br>
                                    The Student Engineers' Council is one of the oldest organizations on campus as it was founded by the Dean of Engineering in 1939. We act as a representative body for all 15,000 engineering students at Texas A&M. With a huge focus on community and engineering development, we organize and host numerous events throughout the year with the most prominent one being the Engineering Career Fair - the largest career fair in the country. Working along with Sys Admin Council in the SEC, I have had the opportunity to innovate and maintain various SEC websites such as MembershipHub, FinanceHub, Career Fair, website, etc. These websites are used by over 1500 students every month and are integral to the functioning of the SEC.
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
                                    <Image className="involvement-photo" src={zlp} fluid />
                                    <br></br>
                                    I was selected from over 600 engineering student applicants be a member of the Zachry Leadership Program. The Zachry Leadership Program is a partnership between the College of Engineering at Texas A&M University and the Zachry Group. The founding premise of the five-semester program is that technical knowledge alone is insufficient to prepare engineering graduates to make the high-impact contributions needed in today’s rapidly changing world. Maximizing your potential requires holistic development, a broader and deeper level of personal awareness and enhanced leadership skills. Selection to this program is highly competitive and consists of 5 mandatory pre-semester retreats and a 5 semester classes.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="involvement-footer">
                                November 2019 - Present
                            </Card.Footer>
                        </Card>
                        <Card className="involvement-card">
                            <Card.Body>
                                <Card.Title><b>The Big Event</b></Card.Title>
                                <h4 className="display-6">Operations Committee Leader</h4>
                                <Card.Text>
                                    <Image className="involvement-photo" src={tbe} fluid />
                                    <br></br>
                                    The Big Event is the largest one-day student run service project in the nation. Each spring, thousands of students at Texas A&M University come together to say a big "Thank you" to the residents of Bryan/College Station area residents. As a Committee Leader in the Operations Sub committee, I assisted with the putting up the "Gala" event to raise funds for The Big Event to buy tools and better our processes. Moreover, I led a team of 6 partners to complete job checks at various residents in B/CS area.
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
                                    <Image className="involvement-photo" src={spencer} fluid />
                                    <br></br>
                                    MSC Spencer Leadership Conference provides programs in leadership training and values development through exposing prospective student leaders to leaders in business, industry, education, innovation, inclusion, and public service. The three main pillars of Spencer are Self-Authorship, Innovative Leadership, and Selfless Service. Spencer Leadership Conference takes place for three days in Dallas, TX exploring various businesses and talking to leaders in the real world gaining knowledge from their experience working in the industry.
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
                                    <Image className="involvement-photo" src={flc} fluid />
                                    <br></br>
                                    <br></br>
                                    The Memorial Student Center Annual Fall Leadership Conference is a highly anticipated conference tailored to provide student leaders an opportunity to network and further develop leadership skills - the Aggie Way. During the conference, Texas A&M student leaders will network with their peers, former students, administrators, business professionals and members of our highly esteemed faculty while exploring the key concepts of leadership. As the Director Of Operations, I facilitated the logistics of the retreat such as transportation, food, lodging, etc.
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
                                    <Image className="involvement-photo" src={mscalot} fluid />
                                    <br></br>
                                    <br></br>
                                    MSC Aggie Leaders of Tomorrow (ALOT) is a freshman organization that provides programs and service opportunities that foster leadership and personal growth for students at Texas A&M. With MSC ALOT, I was involved with the Mr. FLO Sub committee. Mr. FLO put on an all-male talent show encompassing boys from all the FLOs on campus. I, along with my team, created marketing materials for Mr. FLO such as posters, photos, merchandise, etc.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer id="involvement-footer">
                                September 2018 - May 2019
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>
            </div>
        </div >
    );
}

export default Involvement;
