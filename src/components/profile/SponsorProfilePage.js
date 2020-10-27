import React, { Component, useState, useEffect } from 'react';
import axios from "axios";

import { useAuth } from "../Firebase/AuthContext";
import ProfileTextDescription from './ProfileTextDescription';

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SponsorProfilePage() {

  const [detailsSponsor, setdetailsSponsor] = useState([]);
  const { currentUserID } = useAuth();

  useEffect(() => {
    axios
      .get(
        "https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/sponsors/"+currentUserID
      )
      .then(response => {
        setdetailsSponsor(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const changeSponsorProfile = (name, description) => {
    const newProfile = {
      nameProfile: name,
      descriptionProfile: description
    };

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedSponsorProfile = [...detailsSponsor, newProfile];

    setdetailsSponsor(updatedSponsorProfile);
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center profile">
          <Col xs={{ span: 12, offset: 6 }} md={{ span: 6, offset: 5 }}>
            <h1>Profile</h1>
          </Col>
        </Row>
        <ProfileTextDescription
          detailsProfile={detailsSponsor}
          changeProfile={changeSponsorProfile}
        />
      </Container>
    </div>
  );
}

export default SponsorProfilePage;
