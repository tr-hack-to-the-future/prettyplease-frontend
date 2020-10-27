import React, { useEffect, useState, useContext } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth } from "./Firebase/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DisplayCard from "./charityview/DisplayCard";
import { getFormattedAmount, getFormattedDuration } from "./requestformatter";
import { useHistory } from "react-router-dom";

function CharityPage() {
  const history = useHistory();
  let { sponsorOffers, getSponsorOffers } = useAuth();
  let openOffers = sponsorOffers.filter(
    (offers) => offers.requestStatus === "OPEN"
  );
  useEffect(() => {
    getSponsorOffers().then(console.log(sponsorOffers));
  }, []);

  return (
    <Container>
      <div className="ReviewAccept">
        <Row className="justify-content-md-center mt-4">
          <p>
            {openOffers.length > 1
              ? "You have received {openOffers.length} offers"
              : "We will update here as soon as you receive offers!"}
          </p>
        </Row>

        <Row>
          <DisplayCard sponsor={openOffers}></DisplayCard>
        </Row>
      </div>
    </Container>
  );
}

export default CharityPage;
