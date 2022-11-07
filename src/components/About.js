import React from 'react'
import Photo from '../images/profile_photo.jpg'
import '../style/About.css'

const imgStyle = {
  padding: '20px',
  height: '300px',
  width: '250px'
}

const statementStyle ={
  paddingLet: '50px',
  width: '60%',
  margin: '0 auto'
}

function About() {
  return (
    <section>
      <div className='box' >
        <h1 className="title">About Me</h1>
        <hr />
        <img className="photo" style={imgStyle} src={Photo} alt="Fred Bian" />
        <p style={statementStyle} className="content">
          Hi Everyone, I'm Fred, a Front-end | Full-Stack Web Developer leveraging a background in accounting to build a more
          intuitive user experience on websites and software platforms. Recently earned a certificate in
          full stack development from Monash University Coding Boot Camp, with newly developed
          skills in JavaScript, CSS, React.js, Node.js, SQL, NoSQL and responsive web design.
          Strengths in creativity, teamwork, and building projects from ideation to execution. Innovative
          problem-solver who is passionate about developing apps with a focus on mobile-first design
          and development.

        </p>
        <p className="content">
          Apart from working and coding, I like to reading, travelling and fishing.
        </p>
      </div>
    </section>
  )
}

export default About