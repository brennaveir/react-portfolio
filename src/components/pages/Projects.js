import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { projectList } from "../../projectList"

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
      
          <h1 className=" sm:text-4xl text-3xl font-medium title-font mb-4 text-danger">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="projectContainer container m-4 p-4">
         
          {projectList.map((project) => (
            <Card className="card" style={{ width: '50rem' }}>
              <Card.Title>{project.name}</Card.Title>
              <div className="imageContainer">
                <Card.Img className="cardImage" variant="top" src={project.image} />
              </div>
               
        <Card.Body>
          <Card.Text>
            
            {project.description}
          </Card.Text>
            </Card.Body>
          </Card>
          
          ))}
        </div>
      </div>
  
    </section>
  );
}
