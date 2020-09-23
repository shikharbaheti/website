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
import csce from './images/csce.png'
import cap1 from './images/cap1.png'

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
                                    <a href="https://www.molecula.com" rel="noopener noreferrer" target="_blank"><Image className="involvement-photo" src={molecula} fluid /></a>
                                    <br></br>
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
                                    <br></br>
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
                                    <br></br>
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
                                    <br></br>
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
                                            <li class="list-group-item">I was selected from over 600 engineering student applicants be a member of the Zachry Leadership Program</li>
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
        </div >
    );
}
export default Involvement;
