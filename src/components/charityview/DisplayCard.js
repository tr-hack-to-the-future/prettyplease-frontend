import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function DisplayCard({ sponsor }) {
  return sponsor.map((ch, index) => (
    <Link to={`/ForCharities/${index + 1}`}>
      <Card>
        <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <Col className="col-auto flex-column">
            <img
              src={ch.sponsorImageUrl}
              width="200"
              height="200"
              alt={ch.sponsorName}
            />
          </Col>
          <Col className="col p-4 d-flex flex-column position-static">
            <a href="Sponsor1.html" className="stretched-link">
              <p className="card-text mb-auto">
                {ch.sponsorName} has offered to sponsor for : <br />
                {ch.eventDescription}
              </p>
              <strong className="d-inline-block mb-2 text-primary">
                {ch.sponsorName}
              </strong>
              <p className="card-text mb-auto">{ch.sponsorDescription}</p>
            </a>
          </Col>
        </Row>
      </Card>
    </Link>
  ));
}
