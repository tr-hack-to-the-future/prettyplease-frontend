import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function DisplayCardRequest({ cardData }) {

    return (
        <Row
            className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Col className="col-auto flex-column">
                <img
                    src={cardData.image}
                    width="200"
                    height="200"
                    alt={cardData.charityName}
                />
            </Col>
            <Col className="col p-4 d-flex flex-column position-static">


                <Card.Body>

                    {/* <a className="stretched-link"> */}
                    <Card.Title>{cardData.charityName}</Card.Title>
                    <Card.Text >{cardData.description}</Card.Text>
                    {/* </a> */}
                    <Row className="pt-2 pb-2">
                        <Col>
                            <Card.Text>
                                Amount: {cardData.amount}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Duration: {cardData.duration}
                            </Card.Text>

                        </Col>
                    </Row>
                        <Link to="/DisplayRequest">
                            <Button>Show Request</Button>
                        </Link>
                </Card.Body>
            </Col>
        </Row>
    );
}

export default DisplayCardRequest;