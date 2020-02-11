import React from "react";
import { Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
  eventName: string;
}

export const EventCard: React.FC<EventCardProps> = props => {
  return (
    <Card className="eventCard" style={{ marginBottom: "15px" }}>
      <div className="eventBox">
        <Card.Body>
          <Card.Title>給与</Card.Title>
          <Card.Text>{props.eventName}</Card.Text>
          <Card.Text> 700万円 </Card.Text>
          <Card.Text>35歳-55歳</Card.Text>
          <Card.Link className="streched-link" href="#">
            編集
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
};
