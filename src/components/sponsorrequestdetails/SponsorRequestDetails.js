import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import axios from 'axios';
import {useAuth} from '../Firebase/AuthContext'

import "./SponsorRequestDetails.css";

function SponsorRequestDetails() {

    const history = useHistory();
    const { id } = useParams();
    let { fundingRequests, getSponsorRequests } = useAuth();
    try {
      getSponsorRequests();
    } catch (e) {
      console.log(e)
    }
    const [request] = fundingRequests.filter(r => r.requestId === id);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {
        setShow(false);
        history.push("/ForSponsorsPending");
    }

    const currentUser = {
        //   uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
        uid: "CyQ1Hku3lZb9NMni5BF1eWis18d2", // sponsor IOI@gmail.com
            userType: "sponsor"
         }    

    // TODO Temporary Stub method
    const postOffer = (newOffer) => {
        return new Promise((resolve, reject) => {
            console.log("in postOffer: " + newOffer);
            alert(newOffer.sponsorId);
            resolve(newOffer.sponsorId);
            // resolve("b19dcdc9-1547-11eb-9ed1-0a7222284ed8");
            // reject();
        });
    }

    const addOffer = () => {
        // show the modal
        handleShow();
        // create a new offer from the dispRequest
        // const newperson = {...dispRequest, status: "ACCEPTED"};
        // TODO fetch sponsorId from currentUser context
        // const userId = "b19dcdc9-1547-11eb-9ed1-0a7222284ed8";

        const newOffer = {
            // TODO sponsor ID has to come from the user context
            sponsorId: currentUser.uid,
            requestId: request.requestId,
            offerStatus: "PENDING",
            offerAmount: request.amountRequested,
            isSingleEvent: request.isSingleEvent,
            offerDurationInYears: request.durationInYears
        };
console.log("\n____________________________________> " + JSON.stringify(newOffer));
        // Stub out the POST
        // POST the new offer (update the SponsorOffer table)
        // GET the sponsor requests back
        // navigate to another page (Pending or Requests?)
        // postOffer(newOffer)
            axios.post("https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/offers", newOffer)
            .then(response => axios.get("https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/sponsorrequests/" + response))
            // .then ( response => setRequests(response.data))
            .catch(error => console.log(error));

        // axios
        // .post("https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/offers", newOffer)
        // .then (response => console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> OFFERID= " + response))
        // .then ( () => axios.get("https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/requests"))
        // // .then ( response => setRequests(response.data))
        //     // .then(() => axios.get("https://dxmg4z4kvl.execute-api.eu-west-2.amazonaws.com/dev/tasks?userId=47801de2-98b0-4bce-a7ed-a"))
        //     // .then(response => setTasks(response.data))
        // .catch(error => console.log(error))
    }


    return (
        <Container className="SponsorRequestDetails">
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{request.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={request.charityImageUrl}
                    width="200"
                    height="200"
                    alt={request.charityName}
                />
            </div>
            <Row className="mt-3 justify-content-md-center">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <strong>What We Do</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{request.charityDescription}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    Amount: {getFormattedAmount(request.amountRequested)}
                </Col>
                <Col className="text-center">     
                    Duration: {request.durationInYears=== 0 ? 'One-Off':getFormattedDuration(request.durationInYears)}
                </Col>
            </Row>
            <Row className="row justify-content-center mt-5 lead">
                {request.eventDescription}
            </Row>
            <Row className="row justify-content-center mt-2">
                {request.incentive}
            </Row>
            <Row className=" justify-content-center mt-5 ">
                <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => history.goBack()}>
                    Back
                    </Button>
                <Button variant="outline-primary ml-5" size="lg" onClick={addOffer}>
                    Apply
                        </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Sponsorship Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for applying to sponsor our charity.
                            </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-primary" onClick={handleClick}>
                            {/* <Button variant="outline-primary" onClick={handleClose}> */}
                                    Close
                                </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
            <div className="row justify-content-center mt-5"></div>
        </Container>
    );
}


export default SponsorRequestDetails;

