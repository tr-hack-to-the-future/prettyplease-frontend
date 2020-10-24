import React, { useEffect, useState, useContext } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";
import {useCharityOffer} from "./charityview/charityOffersContext";

import axios from "axios";

function CharityPage() {
  let {sponsorOffers} = useCharityOffer();
 

  return (
    <div className="ReviewAccept">
      <Container>
        <Row className="justify-content-md-center mt-4">
          <p>
            You have received {sponsorOffers.length}{" "}
            {sponsorOffers.length > 1 ? "offers" : "offer"} for your request
          </p>
        </Row>
        <DisplayCard sponsor={sponsorOffers}></DisplayCard>
      </Container>
    </div>
  );
}

export default CharityPage;
