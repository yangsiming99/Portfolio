import React, { } from 'react';
import './About.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'react-bootstrap';

import { faFileAlt, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

  const openLink = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div id="About">
      <Jumbotron fluid className="header-background">
        <Container className="text-center">
          <h1 className="header-name"><b>Siming Yang</b></h1>
          <h1>Developer</h1>
          <div className="button-bar">
            <button className="link-buttons">
            <a style={{all: 'unset'}} href="mailto:Simon.Yang1999@Outlook.com?subject=Mail From the Portfolio">
              <div>
              <FontAwesomeIcon className="font-awsome-icon" icon={faEnvelope} size="lg"/>
              Email
              </div>
            </a>
            </button>
            <button onClick={()=>openLink('https://docs.google.com/document/d/1XobSq-yw2Ghcf-QTAg7a-nwWmMG9v8olhy9_N5DbRtE/edit?usp=sharing')} className="link-buttons">
              <div>
                <FontAwesomeIcon className="font-awsome-icon" icon={faFileAlt} size="lg"/>
                Résumé
              </div>
            </button>
            <button onClick={()=>openLink("https://github.com/SimonYang99")} className="link-buttons">
              <div>
                <FontAwesomeIcon className="font-awsome-icon" icon={faGithubSquare} size="lg"/>
                Github
              </div>
            </button>
            <button onClick={()=>openLink("https://www.linkedin.com/in/siming-yang/")} className="link-buttons">
              <div>
                  <FontAwesomeIcon className="font-awsome-icon" icon={faLinkedin} size="lg"/>
                  Linkedin
                </div>
            </button>
          </div>
        </Container>
      </Jumbotron>
      <div className="down-arrow" onClick={()=> document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
        <FontAwesomeIcon style={{width:'100%'}} icon={faChevronDown} size="lg"/>
      </div>
    </div>
  );
}

export default About;