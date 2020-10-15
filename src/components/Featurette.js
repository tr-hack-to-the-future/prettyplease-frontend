import React from "react";
import "./Featurette.css";
import { Row, Col } from "react-bootstrap";

export default function() {
  return (
    <Row>
      <container className="featuretteContainer">
        <big className="boldStatement">We are about bold statements</big>
        <p>
          At Pretty P***** asking is not a taboo. We start from the principle
          that{" "}
          <span className="boldStatement">if you don't ask you don't get</span>.
          In our pandemic new reality, let generosity be a constant. You are a
          charity: Let companies wear your badge of honour, connect with the
          most ethical organisation globally you are a sponsor: you don't{" "}
          <span role="img" clasName="icon" aria-label="shit">
            💩
          </span>{" "}
          where your mouth is, wear your{" "}
          <span role="img" aria-label="shit">
            ❤️
          </span>{" "}
          on your sleeve{" "}
        </p>
      </container>
    </Row>
  );
}
