import React from 'react';
import { Container } from 'react-bootstrap';
import Header from "../components/Header.js";

function Profile() {
  return (
    <div className="profile-page">
      <Header />
      <div className="section1">
          <Container>
            Profile
          </Container>
      </div>
    </div>
  )
}

export default Profile;