import React, { Component } from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import "./project.css";
import { Jumbotron, Container } from 'react-bootstrap';

import ProjectCard from './projectcards';

//Thumbnails
import hsw_thumb from './images/Database.png'
import ustar_thumb from './images/topstars.png'
import port_thumb from './images/portfolio.png'
import freight_thumb from './images/Freightera.png'

const Projects = () => {
  const styles = {
  }

  return (
    <div id="projects">
      <Jumbotron fluid>
        <Container>
          <h1>Featured Projects</h1>
          <h5>A showcase of projects I've done</h5>
        </Container>
      </Jumbotron>
      <div className="centerDiv">
        <ProjectCard
          title="Hillside Wealth AutoStocks"
          bulletPoints = {[
            `Backend implemented using NodeJS, Express, and PostgreSQL`,
            `Frontend created using HTML5, CSS, Javascript, and Jquery`
          ]}
          description={`
            2nd place winning BCIT Industry Sponsered Student Project. 
            A web application created to automate manual data entry tasks, 
            streamline the process of checking quartly reports, 
            and display important data summaries at a glance. 
            Currenty deployed online using Heroku.`}
          thumbnail={hsw_thumb}
          technologies={["HTML5", "CSS", "JavaScript", "Jquery", "NodeJS", "Express", "PostgreSQL"]}
          link="https://hillsidewealth-stocks.herokuapp.com/"
          githublink="https://github.com/HillsideWealth-CIT/HillsideWealth-AutoStocks"
        />
        <ProjectCard
          title="Portfolio Website"
          bulletPoints = {[
            `Developed front end user interface using ReactJS, and CSS`,
            `Responsive Web design allows for usability on both desktop and mobile devices`
          ]}
          description={`
            The webpage you are currently on.
            Was created using ReactJS and CSS.
            Font Awsome was used for any icons used on this site.
            Flex boxes and @media were used in the css to create a responsive web page that can be easily viewed from across both desktop and mobile.
            `}
          thumbnail={port_thumb}
          technologies={["ReactJS", "CSS", "flexBoxes", "Javascript", "React-Bootstrap", "Font-Awsome"]}
          // link="https://yangsiming99.github.io/Portfolio/"
          githublink="https://github.com/YangSiming99/Portfolio"
        />
        <ProjectCard
          title="UStarLinks Web Application"
          bulletPoints = {[
            `Developed different components and features using ReactJS`,
            `Translated designs and wireframes into functional react components using JSX and CSS`
          ]}
          description={` 
          A social media platform that allowed people in post-secondary institutions earn money by answering questions from potential students. 
          I worked on implementing planned features and fixing bugs.`}
          thumbnail={ustar_thumb}
          technologies={["ReactJS", "Hooks", "MaterialUI", "HTML5", "Sass", "MaterialUI", "Jira", "BitBucket", "MS Teams"]}
        />
        <ProjectCard
          title="Freightera API Assignment"
          bulletPoints = {[
            `Created using ReactJS, and React-BootStrap`,
            `User Input updates the formatted table using API data as they type`
          ]}
          description={`
            Interview assignment for Freightera. Created using ReactJS, and React-Bootstrap. Lists cities that are similiar to what the user types. Freightera's Api was used to request
            information about locations.
          `}
          thumbnail={freight_thumb}
          technologies={["ReactJS", "React-Bootstrap", "NPM"]}
          githublink="https://github.com/YangSiming99/Freightera-Job-Interview-Assignment"
        />
      </div>
    </div>
  );
}

export default Projects;