import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";

function Dashboard() {

  return (
    <div className="lifemapAppView">
      <Sidebar/>
      <div className="mainPage">
        <Container>
          <div className="section1">
              <h2>Home</h2>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard;