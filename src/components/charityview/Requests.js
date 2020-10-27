import React, { useEffect, useState, useContext } from "react";
import "./charityview.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth } from "../Firebase/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { getFormattedAmount, getFormattedDuration } from "../requestformatter";
import { useHistory } from "react-router-dom";

export default function Requests() {
  let { sponsorOffers, getSponsorOffers } = useAuth();

  const history = useHistory();
  useEffect(() => {
    getSponsorOffers().then(console.log(sponsorOffers));
  }, []);

  console.log(sponsorOffers);
  return sponsorOffers.map((card, index) => (
    <div className="padding">
      <Container>
        <Row className="justify-content-md-center mt-4 mb-4">
          Your Fund Requests
        </Row>
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
                    Duration: {getFormattedDuration(card.durationInYears)}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="pt-2 pb-2 ml-auto">
                <Card.Text>Request Status: {card.requestStatus} </Card.Text>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  ));
}
