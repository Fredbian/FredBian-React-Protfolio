//import 
import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "../style/Projects.css"

function Projects(props) {
  return (
    <Card className="project-card-view" style={{ marginBottom: 20, backgroundColor: '#2f3b7e' }}>
      <Card.Img variant="top" className="card-img" src={props.imgPath} alt="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title" style={{ fontSize: 25 }}>{props.title}</Card.Title>
        <Card.Text className="card-text" style={{ fontSize: 12 }}>
          {props.description}
        </Card.Text>
        <Button variant="success" href={props.linkApp} target="_blank" style={{ marginBottom: 5, marginRight: 5 }}>
          {"Deployed Link"}
        </Button>
        <Button variant="secondary" href={props.linkGithub} target="_blank" style={{ marginBottom: 5, marginRight: 5 }}>
          {"Github Repo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Projects