import React, { useEffect } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { useAuth } from "./Firebase/AuthContext";

import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";

function CharityPage() {
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
          <h3>
            {openOffers.length === 0
              ? "We will update here as soon as you receive offers!"
              : openOffers.length === 1
              ? "You have received an offer"
              : "You have received " + openOffers.length + " offers"}
          </h3>
        </Row>

        <Row className="justify-content-md-center mt-4">
          <Card>
            <DisplayCard sponsor={openOffers}></DisplayCard>
          </Card>
        </Row>
      </div>
    </Container>
  );
}

export default CharityPage;
