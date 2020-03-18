import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

export function MemberCard(props) {
  const member = props.member;
  const memberBoxStyle = {
    backgroundColor: member.memberColor,
  }
  return(
    <Card className="memberCard">
      <div className="memberTile">
        <div className="memberBox" style={memberBoxStyle}>
          <Card.Link className="stretched-link" href="#">
            <FontAwesomeIcon icon={faUser} className="fa-lg"/>
          </Card.Link>
        </div>
      </div>
      <p className="memberName">{member.member_name}</p>
    </Card>
  );
}