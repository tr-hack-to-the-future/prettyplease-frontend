import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OfferAcceptedDisplayCard from "../OfferAcceptedDisplayCard/OfferAcceptedDisplayCard";
import { useAuth } from "../Firebase/AuthContext";
import "./SponsorPageAccepted.css";
import { getFormattedPlural } from "../requestformatter";

function SponsorPageAccepted() {

  let { offers, getOffers } = useAuth();
  useEffect(() => {
    getOffers();
  }, []);
  const offersAccepted = offers.filter(
    (offer) => offer.offerStatus === "ACCEPTED"
  );

  return (
    <div className="SponsorPageAccepted">
      <Container>
        <Row className="justify-content-md-center mt-4">
          <h5>
            You have {offersAccepted.length} accepted sponsorship{" "}
            {getFormattedPlural("offer", offersAccepted.length)}
          </h5>
        </Row>

        <Row className="card-SponsorPageAccepted">
          <Card>
            <OfferAcceptedDisplayCard cardData={offersAccepted} />
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default SponsorPageAccepted;
