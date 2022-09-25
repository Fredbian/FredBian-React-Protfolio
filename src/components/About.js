import React from 'react'
import Photo from '../images/photo.png'
import './About.css'

const imgStyle = {
  padding: '20px'
}

function About() {
  return (
    <section>
      <div className='box' >
        <h1 className="title">About Me</h1>
        <hr />
        <img className="photo" style={imgStyle} src={Photo} alt="Fred Bian" />
        <p className="content">
          Hi Everyone, I'm Fred, currently learning coding in Monash University Coding Bootcamp.
        </p>
        <p className="content">
          Apart from working and coding, I like to reading, travelling and fishing.
        </p>
      </div>
    </section>
  )
}

export default About