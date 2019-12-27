import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const addMemberCard =
    <Col md={2}>
      <Card className="memberCard">
        <div className="memberTile">
          <div className="addMemberBox">
            <Card.Link className="stretched-link" href="#">
              <FontAwesomeIcon icon={faPlus} className="fa-lg"/>
            </Card.Link>
          </div>
        </div>
        <p className="memberName">メンバーを追加</p>
      </Card>
    </Col>