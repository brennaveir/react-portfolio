import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

import { projectList } from "../../projectList"

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10  text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">

          <h1 className=" sm:text-4xl text-3xl font-medium title-font mb-4 text-dark">
            Apps I've Built
          </h1>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="skillsList border border-5 border-dark">
              <img src="./javascript.png" width="70" alt="Javascript logo"></img>
              <img src="./html.png" width="45" alt="html logo"></img>
              <img src="./css.png" width="45" alt="css logo"></img>
              <img src="./nodejs.png" width="60" alt="node.js logo"></img>
              <img src="./express.jpg" width="60" alt="express logo"></img>
              <img src="./handlebars.png" width="35" alt="handlebars logo"></img>
              <img src="./logo192.png" width="35" alt="react logo"></img>
              <img src="./mysql.png" width="35" alt="mysql logo"></img>
              <img src="./mongodb.png" width="45" alt="mongodb logo"></img>
              <img src="./mongoose.png" width="45" alt="mongoose logo"></img>

            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="projectContainer container  p-4">

          {projectList.map((project) => (
            <Card className="card" style={{ width: '19rem' }}>
              <div className='imageContainer' style={{ width: '95%' }}>
                <Card.Img className="cardImage" variant="top" src={project.image} />
              </div>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Accordion flush>
                  <Accordion.Item>
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body className="projectDesc">
                      {project.description}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body>
                <Card.Link href={project.repository} target="_blank"><img src='./GitHub-Mark.png' width="40" alt="github logo"></img></Card.Link>
                <Card.Link href={project.link} target="_blank"><img src="./1200px-Simpleicons_Interface_link-symbol.svg.png" width="30" alt="link"></img></Card.Link>
              </Card.Body>
            </Card>

          ))}
        </div>
      </div>

    </section>
  );
}
