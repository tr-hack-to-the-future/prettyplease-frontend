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

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [durationText, setDurationText] = useState("");
    const [incentive, setIncentive] = useState("");
    const [validated, setValidated] = useState(false);
    


    const handlerAmount = (event) => {

        setAmount(Number(event.target.value));

    }
    const handlerDescription = (event) => {
        setDescription(event.target.value);

    }
    const handlerIncentive = (event) => {
        setIncentive(event.target.value);
    }

    const handlerDurationText = (event) => {
   
        setDuration(Number(event.target.value));

    }

    const handlerDuration = (event) => {

        setDuration(Number(event.target.value));

    }

   
      
    const handlerRegister = (event) => {

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          console.log("Entro en error de validacion");
        event.preventDefault();
        event.stopPropagation();
      }else{
  
        console.log("Validacion OK");
            setValidated(true);
            const charityRequest = {
                amount: amount,
                description: description,
                incentive: incentive,
                duration: duration
                    }
            console.log(charityRequest);
            // setAmount("");
            // setDescription("");
            // setIncentive("");
            // setDuration("off");
            // setDurationText("");

        }
    };


    // const handlerRegister = (event) => {

    //     const charityRequest = {
    //         amount: amount,
    //         description: description,
    //         incentive: incentive,
    //         duration: duration
    //     }
    //     console.log(charityRequest);
    //     setAmount("");
    //     setDescription("");
    //     setIncentive("");
    //     setDuration("off");
    //     setDurationText("");
    // }

    // const handleronSubmit= (event) =>{
    //     event.preventDefault();
    //     console.log(this.state);
    // }


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
                    <Form noValidate validated={validated} onSubmit={handlerRegister}>
                        {/* <Form onSubmit={handleronSubmit}> */}
                            {/* Amount Fund request field*/}
                            
                            <Form.Group controlId="amountRequest">
                                <Form.Label>Amount:</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="£1,000"
                                    onChange={handlerAmount}
                                    value={amount} />
                            </Form.Group>
                            <Form.Control.Feedback type="invalid">
                                Please introduce an amount.
                            </Form.Control.Feedback>

                            {/* Description Fund request field*/}
                            <Form.Group controlId="descriptionRequest">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    required
                                    onChange={handlerDescription}
                                    value={description}
                                />
                            </Form.Group>
                            <Form.Control.Feedback type="invalid">
                                Please introduce a description of the request.
                            </Form.Control.Feedback>

                            {/* Select duration agreement field*/}
                            <fieldset>
                                <Form.Group as={Row}>
                                
                                    <Form.Label as="legend" column sm={2}>
                                        Duration:
                                    </Form.Label>
                               
                                    <Col sm={6}>
                                        {/* Duration one-off*/}
                                        <Form.Check
                                            type="radio"
                                            label="One-Off"
                                            name="radioDurationOneOff"
                                            id="radioDurationOneOff"
                                            value= "0"
                                            // checked={true}
                                            onChange={handlerDuration}

                                        />

                                        {/* Duration x months*/}
                                        <Form inline className="radioDurationMonths">
                                            <Form.Check
                                                type="radio"
                                                label=""
                                                name="radioDurationMonths"
                                                id="radioDurationMonths"
                                                value="12"
                                                onChange={handlerDuration}
                                            />

                                            <Form.Label className="radioDurationMonths" htmlFor="durationMonths" srOnly>

                                            </Form.Label>
                                            
                                            <Form.Control size="sm"
                                                type="number"
                                                className="mb-2 mr-sm-2"
                                                id="durationMonths"
                                                placeholder="12"
                                                onChange={handlerDurationText}
                                                value={durationText}
                                            />

                                            <Form.Label as="legend" column sm={2}>
                                                months
                                            </Form.Label>
                                        </Form>

                                    </Col>

                                </Form.Group>
                            </fieldset>

                            {/* Incentive Fund request field*/}
                            <Form.Group controlId="incentiveRequest">
                                <Form.Label>Incentive:</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Write here the incentive you offer (sponsor branding, vouchers, sampling opportunities,...)"
                                    required
                                    onChange={handlerIncentive}
                                    value={incentive}
                                />
                            </Form.Group>
                            <Form.Control.Feedback type="invalid">
                                Please introduce an incentive of the request.
                            </Form.Control.Feedback>

                        </Form>


                    </Col>
                </Row>

                {/* Button register*/}
                <Row>

                    <Col md={{ span: 2, offset: 8 }}>
                        <Button onClick={handlerRegister} variant="outline-primary" type="submit">Submit</Button>
                    </Col>
                </Row>


            </Container>
        </div>

    );
}

export default FundRequest;