import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';
import './Styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function FundRequest() {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", activePage: false },
        { itemName: "Raise Funds", activePage: true }

    ]);
    const [showProfile, setshowProfile] = useState(true);

    const [amount, setAmount]= useState("");
    const [description, setDescription]= useState("");
    const [duration, setDuration]= useState("");
    const [incentive, setIncentive]= useState("");


    const handlerAmount = (event) => {
       setAmount(event.target.value);
       console.log (amount);
        
    }
    const handlerDescription = (event) => {
        setDescription(event.target.value);

     }
     const handlerIncentive = (event) => {
        setIncentive(event.target.value);
     }

     const handlerDurationOneOff = (event) => {
       setDuration(event.target.value);
       console.log ("The duration has been changed");
       console.log (duration.toString());
     }

    const handlerRegister = (event) => {

        const charityRequest= {
            amount: amount ,
            description: description,
            incentive: incentive,
            duration: duration
        }
        console.log (charityRequest);
        // const newcharityRequest = [...charityRequest];
        setAmount("");
        setDescription("");
        setIncentive("");
        handlerDurationOneOff("");
    }


    return (
        <div className="FundRequest">
            <PPNavbar NavItems={navitems} showProfile={showProfile} />

            <Container className="container-FundRequest">
                {/* Title */}
                <Row className="page-heading">
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                        <h3>Let's get started!</h3>
                        <h6>Tell us what you're raising money for</h6>

                    </Col>
                </Row>

                {/* Fund Request form */}
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            {/* Amount Fund request field*/}
                            <Form.Group controlId="amountRequest">
                                <Form.Label>Amount:</Form.Label>
                                <Form.Control 
                                type="amountRequest" 
                                placeholder="£1,000"
                                onChange={ handlerAmount } 
                                value= {amount} />
                            </Form.Group>

                            {/* Description Fund request field*/}
                            <Form.Group controlId="descriptionRequest">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control as="textarea" rows="3" 
                                onChange={ handlerDescription } 
                                value= {description} 
                                />
                            </Form.Group>

                            {/* Select duration agreement field*/}
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Duration:
                                    </Form.Label>
                                    <Col sm={10}>
                                        {/* Duration one-off*/}
                                        <Form.Check
                                            type="radio"
                                            label="One-Off"
                                            name="radioDurationOneOff"
                                            id="radioDurationOneOff"
                                            onChange={ handlerDurationOneOff}
                                            // checked={true}
                                        />

                                         {/* Duration x months*/}
                                        <Form inline className="radioDurationMonths">
                                            <Form.Check
                                                type="radio"
                                                label=""
                                                name="radioDurationMonths"
                                                id="radioDurationMonths"
                                            />

                                            <Form.Label className="radioDurationMonths" htmlFor="durationMonths" srOnly>
                                                Name
                                            </Form.Label>
                                            <Form.Control size="sm"
                                                className="mb-2 mr-sm-2"
                                                id="durationMonths"
                                                placeholder="18 months"
                                            />
                                        </Form>

                                    </Col>
                                </Form.Group>
                            </fieldset>

                         {/* Incentive Fund request field*/}
                            <Form.Group controlId="incentiveRequest">
                                <Form.Label>Incentive:</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Write here the incentive you offer (sponsor branding, vouchers, sampling opportunities,...)" 
                                onChange={ handlerIncentive} 
                                value= {incentive} 
                                />
                            </Form.Group>

                        </Form>


                    </Col>
                </Row>

            {/* Button register*/}
                <Row>

                    <Col md={{ span: 2, offset: 6}}>
                        <Button onClick= { handlerRegister} variant="outline-primary">Register</Button>
                    </Col>
                </Row>


            </Container>
        </div>

    );
}

export default FundRequest;