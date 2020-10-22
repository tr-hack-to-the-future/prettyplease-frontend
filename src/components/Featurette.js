import React from "react";
import "./Featurette.css";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";

export default function() {
  return (
    <Row>
      <container className="featuretteContainer">
        <h2 className="greasyStatement">let generosity be a constant</h2>
        <p>
          At Pretty P***** asking is not a taboo. We start from the principle
          that{" "}
          <span className="boldStatement">if you don't ask you don't get</span>.
          You are a charity:connect with the most ethical organisation globally.
          You are a sponsor: you don't{" "}
          <span role="img" clasName="emo" aria-label="shit">
            💩
          </span>{" "}
          where your mouth is, wear your{" "}
          <span role="img" className="emo" aria-label="shit">
            ❤️
          </span>{" "}
          on your sleeve{" "}
        </p>
        <container>
          <Nav.Link className="FeaturetteButton" href="/prettyplease-frontend/#/NewFund">
            Fund Request
          </Nav.Link>
        </container>
      </container>
    </Row>
  );
}
