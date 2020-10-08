import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter as Router, useHistory, useParams, Link } from 'react-router-dom';

function RequestDetailsAccept({ request }) {

    let history = useHistory();
    let { id } = useParams();
    let dispRequest = request[id - 1];

    const amount = "£" + dispRequest.amount;
    const duration = dispRequest.duration === "1" ? dispRequest.duration + " year" : dispRequest.duration + " years" ;

    return (
        <Container>
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{dispRequest.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={dispRequest.image}
                    width="200"
                    height="200"
                    alt={dispRequest.charityName}
                />
            </div>

            {/* <Row className="pt-2 pb-2"> */}
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    {/* <div className="row justify-content-center mt-5 "> */}
                    Amount: {amount}
                </Col>
                <Col className="text-center">
                    Duration: {duration}
                </Col>
            </Row>

            <div className="row justify-content-center mt-5 ">
                <p>{dispRequest.incentive}</p>
            </div>

            <Router>
                <Row className=" justify-content-center mt-5 ">
                    <Link href="">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Link>
                    <Link href="">
                        <Button variant="outline-primary ml-5" size="lg">
                            Accept
                        </Button>
                    </Link>
                </Row>
            </Router>
        </Container>
    );
}


export default RequestDetailsAccept;