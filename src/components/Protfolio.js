import React from 'react'
import Projects from './Projects'
import { Container, Row, Col } from 'react-bootstrap'
import codequize from '../../public/images/codequize.png'
import password_generator from '../../public/images/password_generator.png'
import protfolio1 from '../../public/images/protfolio1.png'
import tech_blog from '../../public/images/tech-blog.png'
import weather_dashboard from '../../public/images/weather_dashboard.png'
import work_day_scheduler from '../../public/images/work_day_scheduler.png'

function Protfolio() {
    return (
        <Container fluid className="protfolio">
            <div className="main">
                <div className="projects">
                    <div className="title">
                        <h3>Projects I've Built</h3>
                    </div>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <Projects
                                imgPath={protfolio1}
                                title="Protfolio1"
                                description="A protfolio of work, built with HTML and CSS."
                                linkApp="https://fredbian.github.io/MONU-FSF-Module2_Challenge/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module2_Challenge"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={codequize}
                                title="Codequize"
                                description="A JavaScript Code Quiz challenge."
                                linkApp="https://fredbian.github.io/MONU-FSF-Module4_Challenge/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module4_Challenge"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={password_generator}
                                title="Password Generator"
                                description="A Javascript password generator."
                                linkApp="https://fredbian.github.io/MONU-FSF-Module3_Challenge-/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module3_Challenge-"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={work_day_scheduler}
                                title="Work Day Scheduler"
                                description="It's a simple Work Day Scheduler Calendar application build with HTML, CSS and JS."
                                linkApp="https://github.com/Fredbian/MONU-FSF-Module5_Challenge-Work-Day-Scheduler"
                                linkGithub="https://fredbian.github.io/MONU-FSF-Module5_Challenge-Work-Day-Scheduler/"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={weather_dashboard}
                                title="Weather Dashboard"
                                description="Use OpenWeather API to fetch weather informaton."
                                linkApp="https://github.com/Fredbian/MONU-FSF-Module-6-Challenge-Weather-Dashboard"
                                linkGithub="https://fredbian.github.io/MONU-FSF-Module-6-Challenge-Weather-Dashboard/"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={tech_blog}
                                title="Tech Blog"
                                description="A CMS-style blog site, following the MVC paradigm."
                                linkApp="https://github.com/Fredbian/MONU-FSF-Module-14-Challenge-Tech-Blog"
                                linkGithub="https://module-14-tech-blog-fred.herokuapp.com/"
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}


export default Protfolio