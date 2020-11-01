import React from "react";
import Container from "react-bootstrap/Container";
import "./AboutUs.css";
import Row from "react-bootstrap/Row";

function AboutUs() {
  return (
    <div>
      <Container className="container-AboutUs">
      <Row className="justify-content-md-center mt-4">
          <h2>About Us </h2>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <h4>At Pretty Please  asking is not a taboo we start from the principle that if you don't ask you don't get.</h4>
        </Row>

        <Row className="body-AboutUs">
          <p>Many  companies would rather support a long term project and work sustainably towards real and tangible changes in communities. Some charities may never get sponsors attention because they don’t have enough funds to market themselves,  while sponsors may want to get the chance to support smaller initiatives or grassroots movements, rather than well known and generally well supported  charities. </p>
          <p>Pretty Please offers a secure  platform for charities to attract sponsors potentially  matching their values or checking their previous  history of supporting initiatives</p>
        </Row>
      </Container>
    </div>
  );
}
export default AboutUs;
