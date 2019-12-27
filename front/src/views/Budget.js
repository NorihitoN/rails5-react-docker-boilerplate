import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";

function Budget() {

  return (
    <div className="lifemapAppView">
      <Sidebar/>
      <div className="mainPage">
        <Container>
          <div className="section1">
              <h2>Budget</h2>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Budget;