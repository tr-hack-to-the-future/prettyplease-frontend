import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

function SponsorDetailsAccept({ sponsor }) {
  let history = useHistory();
  let { id } = useParams();
  let dispSponsor = sponsor[id - 1];
  return (
    <Container>
      <Row className="row justify-content-center mt-5 mb-4 text-primary">
        <h3>{dispSponsor.sponsorName}</h3>
      </Row>

      <div className="rounded mx-auto d-block  text-center">
        <img
          src={dispSponsor.sponsorImg}
          width="200"
          height="200"
          alt={dispSponsor.sponsorName}
        />
      </div>
      <div className="row justify-content-center mt-5 ">
        <p>{dispSponsor.sponsorDesc}</p>
      </div>
      <Router>
        <Row className=" justify-content-center mt-5 ">
          <Link href="">
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Link>
          <Link href="">
            <Button variant="outline-primary ml-5" size="lg">
              Accept
            </Button>
          </Link>
        </Row>
      </Router>
      <div class="row justify-content-center mt-5"></div>
    </Container>
  );
}

export default SponsorDetailsAccept;
