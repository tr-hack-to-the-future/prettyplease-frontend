import React, { Component, useState } from 'react';
import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import { useHistory } from "react-router-dom";

function ModalConfirmationRequest(props) {
    const history = useHistory();
    const handleClose = () => props.onHide();

    // When press submit button, the data of the form is sent to the backend. Close the Modal and go to page Confirmation Request Page
    const handlerSubmit = () => {

        console.log(props.charitydetails);

        axios.post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/requests", props.charitydetails)
            .then(response => {
                console.log(response)
                handleClose();   // Call the funtion onHide to close the Modal
                history.push("/ConfirmationRequestPage");
            })
            .catch(error => {
                console.log(error)
                handleClose();   // Call the funtion onHide to close the Modal
                history.push("/FailRequestPage");
            })
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="justify-content-md-center mt-4" id="contained-modal-title-vcenter ">
                    Review request
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Press SUBMIT to continue or CLOSE to edit the request:</h6>
                <Row>
                    <Col xs={4} md={2}>
                        Amount:
                    </Col>
                    <Col xs={6} md={10}>
                        {/* Formattedd Amount to show the currency */}
                        {getFormattedAmount(props.charitydetails.amountRequested)}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={2}>
                        Description:
                                    </Col>
                    <Col xs={6} md={10}>
                        {props.charitydetails.eventDescription}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={2}>
                        Duration:
                    </Col>
                    <Col xs={6} md={10}>
                        {/* Formattedd duration to show 1 year or x years */}
                        {(props.charitydetails.isSingleEvent === "true" ? 'One-Off' : getFormattedDuration(props.charitydetails.durationInYears))}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={2}>
                        Incentive:
                    </Col>
                    <Col xs={6} md={10}>
                        {props.charitydetails.incentive}
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handlerSubmit}>Submit</Button>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalConfirmationRequest;