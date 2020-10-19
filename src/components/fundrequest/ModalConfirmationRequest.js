import React, { Component, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Link, Redirect} from "react-router-dom";
import ConfirmationRequestPage from './ConfirmationRequestPage';

function ModalConfirmationRequest(props) {
    // const handlerSubmit = () => {
    //     console.log(props.charitydetails)
    //     <ConfirmationRequestPage />
    // };

function handlerSubmit (){
    console.log(props.charitydetails);

    // return(
    //     <Redirect to={{
    //         pathname: "/ConfirmationRequestPage"
    //       }}/>
    // )
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
                    <Col xs={6} md={2}>
                        Amount:
                                    </Col>
                    <Col xs={6} md={10}>
                        £ {props.charitydetails.amount}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        Description:
                                    </Col>
                    <Col xs={6} md={10}>
                        {props.charitydetails.description}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        Duration:
                                    </Col>
                    <Col xs={6} md={10}>
                        {(props.charitydetails.isSingleEvent === "true" ? 'One-Off' : props.charitydetails.duration + '  years')}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        Incentive:
                                    </Col>
                    <Col xs={6} md={10}>
                        {props.charitydetails.incentive}
                    </Col>
                </Row>
            </Modal.Body>
         
            <Modal.Footer>
                <Router>
                    <Link to="/ConfirmationRequestPage" />
                {/* <Link className="btn btn-primary" type="button" strict to={"/ConfirmationRequestPage"}>Submit</Link> */}
                        <Button onClick={handlerSubmit}>Submit</Button>
                </Router>
                    <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        
        </Modal>

    );
}

export default ModalConfirmationRequest;