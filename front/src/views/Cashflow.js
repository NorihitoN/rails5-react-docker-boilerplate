import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";

function Cashflow() {

  return (
    <div className="lifemapAppView">
      <Sidebar/>
      <div className="mainPage">
        <Container>
          <div className="section1">
              <h2>Cashflow</h2>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Cashflow;