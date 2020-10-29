import React from "react";
import Card from "react-bootstrap/Card";
import "./SponsorPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RequestDisplayCard from "../RequestDisplayCard/RequestDisplayCard";
import { useEffect } from "react";
import { getFormattedPlural } from "../RequestFormatter";
import { useAuth } from "../Firebase/AuthContext";

function SponsorPage() {
  let { fundingRequests, getSponsorRequests } = useAuth();
  useEffect(() => {
    getSponsorRequests();
  }, []);

  const requests = fundingRequests.filter(
    (request) => request.requestStatus === "OPEN"
  );

  return (
    <div className="SponsorPage">
      <Container>
        <Row className="justify-content-md-center mt-4">
          <h5>
            There are {requests.length} sponsorship{" "}
            {getFormattedPlural("request", requests.length)} available
          </h5>
        </Row>

        <Row>
          <Card>
            <RequestDisplayCard key={requests.requestId} cardData={requests} />
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default SponsorPage;
