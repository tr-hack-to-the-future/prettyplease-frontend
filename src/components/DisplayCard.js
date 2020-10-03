import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function DisplayCard({ charity }) {
  return charity.map((ch) => (
    <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <Col className="col-auto flex-column">
        <img
          src={ch.sponsorImg}
          width="200"
          height="200"
          alt={ch.sponsorName}
        />
      </Col>
      <Col className="col p-4 d-flex flex-column position-static">
        <a href="Sponsor1.html" class="stretched-link">
          <strong className="d-inline-block mb-2 text-primary">
            {ch.sponsorName}
          </strong>
          <p className="card-text mb-auto">{ch.sponsorDesc}</p>
        </a>
      </Col>
    </Row>
  ));
}
