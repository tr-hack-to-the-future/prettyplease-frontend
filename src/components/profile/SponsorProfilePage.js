import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileTextDescription from "./ProfileTextDescription";

function SponsorProfilePage({ sponsorData, changeProfile }) {

  return (
    <div>
    <Container>
      <Row className="justify-content-md-center profile">
        <Col xs={{ span: 12, offset: 6 }} md={{ span: 6, offset: 5 }}>
          <h1>Profile</h1>
        </Col>
      </Row>
      <ProfileTextDescription
        detailsProfile={sponsorData}
        changeProfile={changeProfile}
      />
    </Container>
    </div>
  );
}

export default SponsorProfilePage;
