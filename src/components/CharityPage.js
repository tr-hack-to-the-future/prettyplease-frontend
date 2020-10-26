import React, { useEffect, useState, useContext } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DisplayCard from "./charityview/DisplayCard";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "./Firebase/AuthContext";


function CharityPage() {
  
  let { sponsorOffers,getSponsorOffers } = useAuth();
  let location = useLocation();
try{
  getSponsorOffers()
}catch(e){
  console.log(e)
}
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
