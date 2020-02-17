import React from "react";
import { Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// eventのtypeofを追加すること。/store/types.ts参照
interface EventCardProps {
  eventName: string;
  event: any;
}

export const EventCard: React.FC<EventCardProps> = props => {
  const event= props.event;
  return (
    <Card className="eventCard" style={{ marginBottom: "15px" }}>
      <div className="eventBox">
        <Card.Body>
          <Card.Title>給与</Card.Title>
          <Card.Text>{event.event_memo}</Card.Text>
          <Card.Text> {event.start_value}万円 </Card.Text>
          <Card.Text>{event.start_year}歳-{event.end_year}歳</Card.Text>
          <Card.Link className="streched-link" href="#">
            編集
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
};
