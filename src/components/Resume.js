import React from 'react'
import resume from '../utils/resume.pdf'
import '../style/Resume.css'

function Resume() {
    return (
        <section className='resume' >
            <div className="container">
                <span className="title">
                    <h2>Download my <a className="resume" href={resume} style={{ color: "red", fontSize: "35px" }} target="_blank" rel="noreferrer">Resume📝</a></h2>
                </span>
                <br></br>
                <p>Here are a few technologies I've worked with recently:<br />⠀</p>
                <ul className="technologies">
                    <li>HTML & CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>GraphQL</li>
                    <li>Chakra UI</li>
                    <li>jQuery</li>
                    <li>Frontend Development</li>
                    <li>Server Side API & Third Party API</li>
                    <li>Backend Development</li>
                    <li>Full Stack Development</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume