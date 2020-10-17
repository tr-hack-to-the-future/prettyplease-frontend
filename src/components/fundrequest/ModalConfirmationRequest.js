import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmationRequest(props) {
    // Variable to control the modal
    const [modalShow, setModalShow] = React.useState(false);

    function handlerRegister (){


        console.log(props.charitydetails);

    };

    return (
        <aside>         
            <Container >

                        <Modal
                            show={modalShow}
                                onHide={() => setModalShow(false)}
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            >
                            <Modal.Header closeButton>
                                <Modal.Title  className="justify-content-md-center mt-4" id="contained-modal-title-vcenter ">
                                Confirmation request
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>Please, review the data of request. Press submit if you agree or back if you need to edit again:</h6>
                                <container>
                                <Row>
                                    <Col xs={6} md={2}>
                                        Amount:
                                    </Col>
                                    <Col xs={6} md={10}>
                                       <p>£ {props.charitydetails.amount} </p> 
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
                                         {props.charitydetails.duration}
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
                                </container>

                            </Modal.Body>
                            <Modal.Footer>
                                    <Button onClick={handlerRegister}>Submit</Button> 
                                 <Button onClick={props.onHide}>Close</Button> 
                            </Modal.Footer>
                            </Modal> 


            </Container>
        </aside>
    );
}

export default ModalConfirmationRequest;