import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OfferPendingDisplayCard from "../OfferPendingDisplayCard/OfferPendingDisplayCard";
import { useAuth } from "../Firebase/AuthContext";
import "./SponsorPagePending.css";
import { getFormattedPlural } from "../RequestFormatter";

function SponsorPagePending() {
  // fetch the sponsor offers
  let { offers, getOffers } = useAuth();
  useEffect(() => {
    getOffers();
  }, []);

  const offersPending = offers.filter(
    (offer) => offer.offerStatus === "PENDING"
  );

  return (
    <div className="SponsorPagePending">
      <Container>
        <Row className="justify-content-md-center mt-4">
          <h5>
            You have {offersPending.length} pending sponsorship{" "}
            {getFormattedPlural("offer", offersPending.length)}
          </h5>
        </Row>

        <Row className="card-SponsorPagePending">
          <Card>
            <OfferPendingDisplayCard cardData={offersPending} />
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default SponsorPagePending;
