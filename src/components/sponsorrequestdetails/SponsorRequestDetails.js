import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, useHistory, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import "./SponsorRequestDetails.css";

function SponsorRequestDetails({ request }) {

    const history = useHistory();
    const { id } = useParams();
    const dispRequest = request[id - 1];

    // const acceptButtonVisibility = dispRequest.requestStatus === 'OPEN' ? 'visible' : 'invisible';

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        setShow(false);
        history.push("/ForSponsorsAccepted");
    }

    return (
        <Container className="SponsorRequestDetails">
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{dispRequest.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={dispRequest.charityImageUrl}
                    width="200"
                    height="200"
                    alt={dispRequest.charityName}
                />
            </div>
            <Row className="mt-3 justify-content-md-center">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <strong>What We Do</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{dispRequest.charityDescription}</Card.Body>
                        </Accordion.Collapse>                
                    </Card>
                </Accordion>
            </Row>
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    Amount: {getFormattedAmount(dispRequest.amountRequested)}
                </Col>
                <Col className="text-center">
                    Duration: {getFormattedDuration(dispRequest.durationInYears)}
                </Col>
            </Row>
            <div className="row justify-content-center mt-5 lead">
                {dispRequest.eventDescription}
            </div>
            <div className="row justify-content-center mt-5 ">
                {dispRequest.incentive}
            </div>
            <Router>
                <Row className=" justify-content-center mt-5 ">
                    {/* <Link to="/#"> */}
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => history.goBack()}>
                            Back
                        </Button>
                    {/* </Link> */}
                    {/* <Link to="/#" className="{acceptButtonVisibility}"> */}
                        {/* <Button variant="outline-primary ml-5" size="lg" onClick={handleClick}>
                            Accept
                        </Button> */}

                        <Button variant="outline-primary ml-5" size="lg" onClick={handleShow}>
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
                    {/* </Link> */}
                </Row>
            </Router>
            <div className="row justify-content-center mt-5"></div>
        </Container>
    );
}


export default SponsorRequestDetails;

