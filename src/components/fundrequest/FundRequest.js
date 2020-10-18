import React, { Component, useState } from 'react';
import './FundRequest.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal';
import ModalConfirmationRequest from './ModalConfirmationRequest';

function FundRequest() {
    // Variable to control the modal
    // const [smShow, setSmShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [isSingleEvent, setIsSingleEvent] = useState("");
    const [duration, setDuration] = useState(0);
    const [incentive, setIncentive] = useState("");

    // const handlerAmount = (event) => {
    //     setAmount(Number(event.target.value));
    // }

    // const handlerDescription = (event) => {
    //     setDescription(event.target.value);
    // }

    // const handlerIncentive = (event) => {
    //     setIncentive(event.target.value);
    // }

    // const handlerDuration = (event) => {
    //     setDuration(Number(event.target.value));
    // }

    // const handlerIsSingleEvent = (event) => {
    //     setIsSingleEvent(event.target.value);
    // }

    // const handlerRegister = (event) => {
    //     const charityRequest = {
    //         amount: amount,
    //         description: description,
    //         incentive: incentive,
    //         isSingleEvent:isSingleEvent,
    //         duration: duration,
    //     }

    //     console.log(charityRequest);
    //     return charityRequest;

        
    //     setModalShow (true);

        
        
    //     setSmShow(true);
    //     setAmount("");
    //     setDescription("");
    //     setIncentive("");
    //     setIsSingleEvent("");
    //     setDuration(0);
    // };

//    function handlerRegister (){
//          const charityRequest = {
//              amount: amount,
//              description: description,
//              incentive: incentive,
//             isSingleEvent:isSingleEvent,
//              duration: duration,
//          }

//          console.log(charityRequest);
//          return charityRequest;

        
//         setModalShow (true);

        
        
//         setSmShow(true);
//         setAmount("");
//         setDescription("");
//         setIncentive("");
//         setIsSingleEvent("");
//         setDuration(0);
//      };

    return (
        <div className="FundRequest">
            
            <Container className="container-FundRequest">
                
                {/* Title */}
                <Row className="page-heading">
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                        <h2>Let's get started!</h2>
                        <h5>Tell us what you're raising money for</h5>

                    </Col>
                </Row>

                {/* Fund Request form */}       
                <Form.Row >
                    <Col md={{ span: 6, offset: 3 }}>
                    <Form > 
                        {/* <Form onSubmit={handlerRegister}> */}
                            
                            {/* Amount Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-primary">Amount:</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>£</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    required
                                    type="number"
                                    placeholder="1,000"
                                    onChange={(event)=>setAmount(Number(event.target.value))}
                                    value={amount} />
                                   
                                 
                                </InputGroup>
                            </Form.Group>

                            {/* <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-primary">Amount:</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="£1,000"
                                    onChange={(event)=>setAmount(Number(event.target.value))}
                                    value={amount} />
                            </Form.Group> */}

                            {/* Description Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-primary">Description:</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    required
                                    onChange={(event) =>setDescription(event.target.value)}
                                    value={description}
                                />
                            </Form.Group>

                          
                            {/* Duration radio buttons */}
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label className="text-primary" as="legend" column sm={2}>
                                        Duration:
                                        </Form.Label>
                                    <Col sm={10}>

                                        {/* Radio button Duration One-Off */}  
                                        <Row>
                                            <Form.Check
                                                type="radio"
                                                label="One-Off"
                                                name="formHorizontalRadios"
                                                id="radioDurationOneOff"
                                                value={true}
                                                // value="0"
                                                onChange={(event) => setIsSingleEvent(event.target.value)}
                                            />
                                        </Row>

                                        {/* Radio button Customise Duration. If the user press this option, the duration field is taken*/}  
                                        <Row>
                                        <div className="form-inline">
                                            <Form.Check 
                                                
                                                type="radio"
                                                aria-label="Customise Duration"
                                                name="formHorizontalRadios"
                                                id="radioDurationCustomiseDuration"
                                                value={false}
                                                // value="1"
                                                onChange={(event) => setIsSingleEvent(event.target.value)}
                                            />

                                            {/* <Form inline>  */}
                                                <InputGroup className="mb-3">
                                                    {/* <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                                        CustomiseDuration
                                                    </Form.Label> */}
                                                    <Form.Control 
                                                        
                                                        // size="sm"
                                                        type="number"
                                                        // className="mb-2 mr-sm-2"
                                                        // id="inlineFormInputName2"
                                                        placeholder="1"
                                                        onChange={(event) => setDuration(Number(event.target.value))}
                                                        vale={duration}
                                                    />
                                                    <InputGroup.Append>
                                                    <InputGroup.Text>years</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            {/* Form inline to show the radio button, textbox and label in the same line */}
                                            {/* <Form inline>  */}

                                                {/* Customize duration textbox */}
                                                {/* <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                                    CustomiseDuration
                                                </Form.Label>
                                                <Form.Control
                                                    size="sm"
                                                    type="number"
                                                    className="mb-2 mr-sm-2"
                                                    id="inlineFormInputName2"
                                                    placeholder="1"
                                                    onChange={(event) => setDuration(Number(event.target.value))}
                                                    vale={duration}
                                                /> */}

                                                {/* Label years */}
                                                {/* <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                                    years
                                                </Form.Label> */}

                                            {/* End of the Form inline */}
                                            {/* </Form> */}
                                            </div>
                                        </Row>

                                    </Col>

                                {/* End of the radio button section */}
                                </Form.Group>
                            </fieldset>

                            {/* Incentive Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-primary">Incentive:</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Write here the incentive you offer (sponsor branding, vouchers, sampling opportunities,...)"
                                    required
                                    onChange={(event) => setIncentive(event.target.value)}
                                    value={incentive}
                                />
                            </Form.Group>


                        {/* End of the form */}
                        </Form>


                    </Col>
                </Form.Row>
 
                {/* Button register*/}
                <Row>
                    <Col md={{ span: 2, offset: 8 }}>
                        {/* <Button onClick={handlerRegister} variant="outline-primary" type="submit">Submit</Button> */}
                        <Button onClick={() => setModalShow(true)} variant="outline-primary" type="submit">Submit</Button>
                        <ModalConfirmationRequest show={modalShow} onHide={() => setModalShow(false)} charitydetails={{
                                amount: amount,
                                description: description,
                                incentive: incentive,
                                isSingleEvent:isSingleEvent,
                                duration: duration }} />
                        
                        {/* <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        Congratulations!
                                    </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Your request has been saved</Modal.Body>
                                </Modal> */}
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default FundRequest;