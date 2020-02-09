import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

export function EventCard() {
  // const event = props.event;
  // const eventBoxStyle = {
  //   backgroundColor: event.eventColor,
  // }
  return(
    <Card bg="primary" text="white" className="eventCard">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}