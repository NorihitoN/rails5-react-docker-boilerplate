import React from 'react';
import { Container } from 'react-bootstrap';
import Header from "../components/Header.js";

function Dashboard() {
  return (
    <div className="lifeplan-app">
      <Header />
      <div className="section1">
          <Container>
            Dashboard
          </Container>
      </div>
      <div className="section2">

      </div>
    </div>
  )
}

export default Dashboard;