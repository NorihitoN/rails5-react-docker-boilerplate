import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const addMemberCard =
  <LinkContainer to="/app/members/new" className="addMemberLink">
    <Col md={2}>
      <Card className="memberCard">
        <div className="memberTile">
          <div className="addMemberBox">
            <FontAwesomeIcon icon={faPlus} className="fa-lg"/>
          </div>
        </div>
        <p className="memberName">メンバーを追加</p>
      </Card>
    </Col>
  </LinkContainer>