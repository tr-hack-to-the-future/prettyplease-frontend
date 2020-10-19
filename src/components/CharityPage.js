import React, { Component, useState } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";

function CharityPage({ sponsor }) {
  return (
    <div className="ReviewAccept">
      <Container>
        <Row className="justify-content-md-center mt-4">
          <p>You have received {sponsor.length} offers for your request</p>
        </Row>
        <DisplayCard sponsor={sponsor}></DisplayCard>
      </Container>
    </div>
  );
}

export default CharityPage;
