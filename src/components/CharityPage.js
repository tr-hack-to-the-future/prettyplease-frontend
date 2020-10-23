import React, { useEffect, useState } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";

import axios from 'axios';

function CharityPage({ sponsor }) {
  let charityid = "CHAZ1";

useEffect(
  axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charityoffers/"+ charityid)
  .then(response => console.log(response))
  .catch(error => console.log(error))

)

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
