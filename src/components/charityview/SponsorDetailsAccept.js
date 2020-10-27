import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Modal } from "react-bootstrap";
import "./charityview.css";
import { useAuth } from "../Firebase/AuthContext";

import Button from "react-bootstrap/Button";
import {
  HashRouter as Router,
  Link,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";

function SponsorDetailsAccept() {
  let { id } = useParams();
 let { sponsorOffers } = useAuth();
  let history = useHistory();
  let dispSponsor=sponsorOffers.filter((offer) => offer.requestStatus === "OPEN")[id - 1];
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    //console.log(location);
    history.goBack();
  };

  return (
    <Container className="padding">
      <Row className="row justify-content-center mt-5 mb-4 text-primary">
        <h3>{dispSponsor.sponsorName}</h3>
      </Row>

      <div className="rounded mx-auto d-block  text-center">
        <img
          src={dispSponsor.sponsorImageUrl}
          width="200"
          height="200"
          alt={dispSponsor.sponsorName}
        />
      </div>
      <div className="row justify-content-center mt-5 ">
        <p>{dispSponsor.sponsorDescription}</p>
      </div>
      <Router>
        <Row className=" justify-content-center mt-5 ">
          <Link to="/#">
            <Button variant="outline-primary" size="lg" onClick={handleClick}>
              Back
            </Button>
          </Link>

          <Button variant="outline-primary ml-5" size="lg" onClick={handleShow}>
            Accept
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Accepted Sponsor </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have accepted the Sponsor offer from {dispSponsor.sponsorName}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Router>
      <div class="row justify-content-center mt-5"></div>
    </Container>
  );
}

export default SponsorDetailsAccept;
