import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SponsorDetailsAccept from "./SponsorDetailsAccept";



export default function DisplayCard({sponsor}) {

  
 
  return sponsor.map((ch, index) => (
    
    <Link to={`/ForCharities/${index + 1}`}>
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
          <a href="Sponsor1.html" class="stretched-link">
            <strong className="d-inline-block mb-2 text-primary">
              {ch.sponsorName}
            </strong>
            <p className="card-text mb-auto">{ch.sponsorDescription}</p>
          </a>
        </Col>
      </Row>
    </Link>

  ));
}

