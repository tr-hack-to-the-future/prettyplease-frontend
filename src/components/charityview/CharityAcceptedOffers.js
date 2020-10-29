import React, { useEffect, useState, useContext } from "react";
import "./charityview.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth } from "../Firebase/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { getFormattedAmount, getFormattedDuration } from "../requestformatter";
import { useHistory } from "react-router-dom";

export default function CharityAcceptedOffers() {
  let { sponsorOffers, getSponsorOffers } = useAuth();
  // let [acceptedOffers, setAcceptedOffers] = useState(null);

  useEffect(() => {
    getSponsorOffers().then(console.log(sponsorOffers));
  }, []);

  return (
    <Container>
      <div className="padding">
        <Row className="justify-content-md-center mt-4">
          <h3>Accepted Offers</h3>
        </Row>
        {sponsorOffers
          .filter(
            (request) =>
              request.requestStatus === "ACCEPTED" &&
              request.offerStatus === "ACCEPTED"
          )
          .map((card, index) => (
            <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="col-auto flex-column">
                <img
                  src={card.sponsorImageUrl}
                  width="250"
                  height="250"
                  alt={card.sponsorName}
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
                        Duration: {(card.durationInYears)?getFormattedDuration(card.durationInYears):"One-off Event"}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Card.Title>Your sponsor is {card.sponsorName}</Card.Title>
                  <Card.Text>
                    Sponsor Details : <br />
                    {card.sponsorDescription}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          ))}
      </div>
    </Container>
  );
}
