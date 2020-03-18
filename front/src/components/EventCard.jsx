import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteEvent } from "../actions/event.js";
import { withRouter } from 'react-router';

// eventのtypeofを追加すること。/store/types.ts参照
// interface EventCardProps {
//   event: any;
// }

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { event: this.props.event };
  }

  // When Event is updated from Budget.jsx(Parent component), 
  // EventCard should be updated. This is detected by the difference of props.
  componentDidUpdate(prevProps) {
    if(prevProps.event !== this.props.event) {
      this.setState({event: this.props.event});
    }
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteEvent(this.state.event);
  };

  handleToIncomeEventEditForm = (event) => (e) => {
    this.props.history.push({
      pathname: "/app/event/edit",
      state: { event: event, categoryType: "income" }
    });
  }

  render() {
    const { event } = this.state;
    return (
      <Card className="eventCard" style={{ marginBottom: "15px" }}>
        <div className="eventBox">
          <Card.Body>
            <Card.Title>{event.category_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {event.subcategory_name}
            </Card.Subtitle>
            <Card.Text>{event.event_memo}</Card.Text>
            <Card.Text> {event.start_value}万円 </Card.Text>
            <Card.Text>
              {event.start_year}歳-{event.end_year}歳
            </Card.Text>
            <Button onClick={this.handleToIncomeEventEditForm(event)}>編集</Button>
            <Button variant="danger" onClick={this.handleDelete}>
              削除
            </Button>
          </Card.Body>
        </div>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteEvent: data => dispatch(deleteEvent(data))
});

export default withRouter(connect(null, mapDispatchToProps)(EventCard));
