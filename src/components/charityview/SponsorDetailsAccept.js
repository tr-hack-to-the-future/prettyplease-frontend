import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Modal } from "react-bootstrap";
import "./charityview.css";
import { useCharityOffer } from "./charityOffersContext";

import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

function SponsorDetailsAccept() {
  let { id } = useParams();
  let { sponsorOffers } = useCharityOffer();
  let { history } = useHistory();
  let [dispSponsor, setdispSponsor] = useState();

  dispSponsor = sponsorOffers[id - 1];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Link href="">
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Link>
          <Link href="">
            <Button
              variant="outline-primary ml-5"
              size="lg"
              onClick={handleShow}
            >
              Accept
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Accepted Sponsor </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                You have accepted the Sponsor offer from{" "}
                {dispSponsor.sponsorName}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Link>
        </Row>
      </Router>
      <div class="row justify-content-center mt-5"></div>
    </Container>
  );
}

export default SponsorDetailsAccept;
