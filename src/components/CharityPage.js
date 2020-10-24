import React, { useEffect, useState, useContext } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";

import axios from "axios";

function CharityPage() {
  let charityid = "CHAZ1";
  let [sponsorOffers, setSponsorOffers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charityoffers/" +
          charityid
      )
      .then((response) =>
        setSponsorOffers(
          response.data.filter((offer) => offer.requestStatus === "OPEN")
        )
      )
      .catch((error) => console.log(error));
  }, []);

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
