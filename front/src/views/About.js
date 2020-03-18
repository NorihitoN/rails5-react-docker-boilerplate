import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import Header from "../components/Header.js";

function About() {
  return (
    <div className="lifeplan-app">
      <Header />
      <Jumbotron className="jumbotron-bg-transparent">
        <Container>
            <h2>About</h2>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default About;