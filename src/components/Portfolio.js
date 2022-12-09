import React from 'react'
import "../style/Portfolio.css"
import Projects from './Projects'
import { Container, Row, Col } from 'react-bootstrap'
import cocktail_recipe_finder from '../images/cocktail_recipe_finder.png'
import paws_for_homes from '../images/paws_for_homes.png'
import easy_rent from '../images/easy_rent.png'
import tech_blog from '../images/tech_blog.png'
import weather_dashboard from '../images/weather_dashboard.png'
import work_day_scheduler from '../images/work_day_scheduler.png'

function Protfolio() {
    return (
        <Container fluid className="portfolio">
            <div className="main">
                <div className="projects">
                    <div className="title">
                        <h1>Projects</h1>
                    </div>
                    <hr />
                    <Row className="row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <Projects
                                imgPath={easy_rent}
                                title="Easy Rent"
                                description="Interactive MERN Stack Single-Page Application. Tec: React, Node, JavaScript, MERN stack, MongoDB, JWT, GraphQL, Nodemailer, Stripe"
                                linkApp="https://easy-rent-2022.herokuapp.com/"
                                linkGithub="https://github.com/Fredbian/easy-rent"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={tech_blog}
                                title="Tech Blog"
                                description="A CMS-style blog site, following the MVC paradigm. Tec: JavaScript, MySQL, Node, ORM, Bcrypt"
                                linkApp="https://module-14-tech-blog-fred.herokuapp.com/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module-14-Challenge-Tech-Blog"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={weather_dashboard}
                                title="Weather Dashboard"
                                description="Weather app that provides current and future weather forecasts in cities. Tec: HTML, CSS, JavaScript, Openweather API"
                                linkApp="https://fredbian.github.io/Weather-Dashboard/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module-6-Challenge-Weather-Dashboard"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={paws_for_homes}
                                title="Paws For Homes"
                                description="Interactive Node-based Full-Stack application following the MVC. Tec: Express, Node, Bootstrap, JavaScript, MySQL, ORM, Bcrypt"
                                linkApp="https://paws-for-homes.herokuapp.com/"
                                linkGithub="https://github.com/Zoki91/Paws-For-Homes"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={cocktail_recipe_finder}
                                title="Cocktail Recipe Finder"
                                description="A mobile first interactive Front-end application. Tec: HTML, CSS, JavaScript, APIs"
                                linkApp="https://dark40.github.io/cocktail-recipe-party-activity/"
                                linkGithub="https://github.com/dark40/cocktail-recipe-party-activity"
                            />
                        </Col>
                        <Col md={4} className="projects">
                            <Projects
                                imgPath={work_day_scheduler}
                                title="Work Day Scheduler"
                                description="It's a simple Work Day Scheduler Calendar application build with HTML, CSS and JS."                            
                                linkApp="https://fredbian.github.io/Work-Day-Scheduler/"
                                linkGithub="https://github.com/Fredbian/MONU-FSF-Module5_Challenge-Work-Day-Scheduler"
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}


export default Protfolio