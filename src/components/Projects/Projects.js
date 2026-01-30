import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import lexfactos from "../../Assets/Projects/Lexfactos.png";
import CSR from "../../Assets/Projects/ImpactHub.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import RealEstate from "../../Assets/Projects/RealEstate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexfactos}
              isBlog={false}
              title="Lexfactos"
              description="LexFactos.com  uses React for building a dynamic, responsive frontend.
                            The backend is powered by Python with Django, handling APIs and business logic.
                            CSS frameworks ensure polished styling and mobile responsiveness.
                            Data flows seamlessly between React components and Django REST APIs.
                            This stack provides scalability, security, and a smooth user experience."
              ghLink="https://github.com/Vadrevuharipriya/lexfactos-immigartion-lawyer-website"
              demoLink="https://lexfactos.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CSR}
              isBlog={false}
              title="Impact Hub"
              description="This CSR funding platform is a frontend-first application built with React 18 + TypeScript, styled using Tailwind CSS, and animated with Framer Motion.
                          Navigation is managed via React Router DOM, while Lucide React provides scalable icon components.
                          The build pipeline uses Vite for fast bundling and deployment on Bolt Hosting."
              ghLink="https://github.com/Vadrevuharipriya/csr-funding-platform"
              demoLink="https://csr-funding-platform.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RealEstate}
              isBlog={false}
              title="Real Estate App"
              description="The application integrates a real-time chat module powered by Socket.io, enabling bidirectional event-driven communication over WebSockets.
                            JWT is used for stateless authentication, ensuring secure identity verification.
                            Session management is handled via HTTP-only cookies, protecting tokens from client-side script access."
              ghLink="https://github.com/Vadrevuharipriya/real-estate-app"
              demoLink="https://github.com/Vadrevuharipriya/real-estate-app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
