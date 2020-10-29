import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { getFormattedAmount, getFormattedDuration } from "../RequestFormatter";

function RequestDisplayCard({ cardData }) {
  return cardData.map((card, index) => (
    <Link to={`/ForSponsors/${card.requestId}`} key={card.requestId}>
      <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="col-auto flex-column">
          <img
            src={card.charityImageUrl}
            width="200"
            height="200"
            alt={card.charityName}
          />
        </Col>
        <Col className="col p-4 d-flex flex-column position-static">
          <Card.Body>
            <Card.Title>{card.charityName}</Card.Title>
            <Card.Text>{card.eventDescription}</Card.Text>
            <Row className="pt-2 pb-2">
              <Col>
                <Card.Text>
                  Amount: {getFormattedAmount(card.amountRequested)}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  Duration:{" "}
                  {card.durationInYears === 0
                    ? "One-Off"
                    : getFormattedDuration(card.durationInYears)}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Link>
  ));
}

export default RequestDisplayCard;
