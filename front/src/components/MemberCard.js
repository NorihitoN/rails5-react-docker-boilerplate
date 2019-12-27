import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

export function MemberCard(props) {
  const member = props.member;
  return(
    <Col md={2}>
      <Card className="memberCard">
        <div className="memberTile">
          <div className="memberBox">
            <Card.Link className="stretched-link" href="#">
              <FontAwesomeIcon icon={faUser} className="fa-lg"/>
            </Card.Link>
          </div>
        </div>
        <p className="memberName">{member.name}</p>
      </Card>
    </Col>
  );
}