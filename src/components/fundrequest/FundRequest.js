import React, { useState } from 'react';
import './FundRequest.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import ModalConfirmationRequest from './ModalConfirmationRequest';
import UserContext from '../charityview/charityOffersContext'

function FundRequest() {
    // Variable to control the modal
    const [modalShow, setModalShow] = React.useState(false);
    //   const currentUser = useContext(UserContext);

    const [amountRequested, setAmountRequested] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [isSingleEvent, setIsSingleEvent] = useState("");
    const [durationInYears, setDurationInYears] = useState(0);
    const [incentive, setIncentive] = useState("");

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
                                        onChange={(event) => setAmountRequested(Number(event.target.value))}
                                        value={amountRequested}
                                    />
                                </InputGroup>
                            </Form.Group>

                            {/* Description Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-primary">Description:</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    required
                                    onChange={(event) => setEventDescription(event.target.value)}
                                    value={eventDescription}
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
                                                onChange={(event) => setIsSingleEvent(event.target.value)}
                                            />
                                        </Row>

                                        {/* Radio button Customise Duration. If the user press this option, the duration field is taken*/}
                                        <Row>
                                            {/* <Form inline>  */}
                                            <div className="form-inline">
                                                <Form.Check
                                                    type="radio"
                                                    aria-label="Customise Duration"
                                                    name="formHorizontalRadios"
                                                    id="radioDurationCustomiseDuration"
                                                    value={false}
                                                    onChange={(event) => setIsSingleEvent(event.target.value)}
                                                />
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="1"
                                                        onChange={(event) => setDurationInYears(Number(event.target.value))}
                                                        vale={durationInYears}
                                                    />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>years</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
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

                {/* Button submit. Call a customize Modal to review the form*/}
                <Row>
                    <Col md={{ span: 2, offset: 8 }}>
                        <Button onClick={() => setModalShow(true)} variant="outline-primary" type="submit">Submit</Button>
                        <ModalConfirmationRequest show={modalShow} onHide={() => setModalShow(false)}
                        charitydetails={{
                            charityId: "CHAZ10",
                            eventDescription: eventDescription,
                            incentive: incentive,
                            amountRequested: amountRequested,
                            amountAgreed: amountRequested,
                            isSingleEvent: isSingleEvent,
                            durationInYears: durationInYears,
                            agreedDurationInYears: durationInYears,
                            requestStatus: "OPEN"
                        }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FundRequest;