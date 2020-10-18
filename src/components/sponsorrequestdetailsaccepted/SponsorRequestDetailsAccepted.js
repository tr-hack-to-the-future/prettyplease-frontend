import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, useHistory, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import "./SponsorRequestDetailsAccepted.css";


function SponsorRequestDetailsAccepted({ request }) {

    const history = useHistory();
    const { id } = useParams();
    const dispRequest = request[id - 1];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        setShow(false);
        history.push("/ForSponsorsAccepted");
    }


    return (
        <Container className="SponsorRequestDetailsAccepted">
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
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    Amount: {getFormattedAmount(dispRequest.amount)}
                </Col>
                <Col className="text-center">
                    Duration: {getFormattedDuration(dispRequest.duration)}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <h4>Sponsorship Accepted</h4>
            </Row>
            <div className="row justify-content-center mt-5 lead">
                {dispRequest.description}
            </div>
            <div className="row justify-content-center mt-5 ">
                {dispRequest.incentive}
            </div>

            <Router>
                <Row className=" justify-content-center mt-5 ">
                    <Link to="/#">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Link>
                </Row>
            </Router>
            <div className="row justify-content-center mt-5"></div>
        </Container>
    );
}


export default SponsorRequestDetailsAccepted;

