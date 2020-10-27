import React, { useEffect, useState, useContext } from "react";
import "./CharityPage.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { useAuth } from "./Firebase/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DisplayCard from "./charityview/DisplayCard";
import { getFormattedAmount, getFormattedDuration } from "./requestformatter";
import { useHistory } from 'react-router-dom';

/* 
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
} */

function CharityPage() {
  
  const history = useHistory();
  let { sponsorOffers, getSponsorOffers } = useAuth();
  let openOffers = sponsorOffers.filter((offers)=>offers.requestStatus==="OPEN")
  useEffect(() => {
    getSponsorOffers().then(console.log(sponsorOffers));
  }, []);
  const handleRequests = () => {
    history.push("/ForCharities/Requests");
  }
  const handleAccepted = () => {
    history.push("/ForCharities/Accepted");
  }
  return (
    <Container>
    <div className="ReviewAccept">
      <Row className="justify-content-md-center mt-4">
        <Col>
          <Button variant="outline-primary ml-5" size="md" disabled>
            Review Offers 
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-primary ml-5"
            size="md"
            onClick={handleRequests}
          >
            Fund Requests
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-primary ml-5"
            size="md"
            onClick={handleAccepted}
          >
            Accepted Offers
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
      <p>
          You have received {openOffers.length}{" "}
          {openOffers.length > 1 ? "offers" : "offer"} for your request
        </p>
        </Row>

        <Row>
         
          <DisplayCard sponsor={openOffers}></DisplayCard>
       

        </Row>

    </div>
    </Container>
  );
}


export default CharityPage;
