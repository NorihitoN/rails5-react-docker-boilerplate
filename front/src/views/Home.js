import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';

import Header from "../components/Header.js";

function Home() {
  return (
    <div className="lifeplan-app">
      <Header />
      <div className="topsection1">
        <Jumbotron className="jumbotron-bg-transparent">
          <Container>
            <h1>家族の資産計画に戦略を</h1>
            <p className="">人生100年、一人ひとりがライフプランを立てる時代に。</p>
            <p>
              <Button variant="primary">無料で始める</Button>
            </p>
          </Container>
        </Jumbotron>
      </div>
      <div className="topsection2">

      </div>
    </div>
  )
}

export default Home;