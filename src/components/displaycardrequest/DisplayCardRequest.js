import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function DisplayCardRequest({ cardData }) {

    const logo = "./charity-logo-blue.png";
    return (
        <Row
            className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Col className="col-auto flex-column">
                <img src={logo} width="200" height="200" alt="charity logo" />
            </Col>
            <Col className="col p-4 d-flex flex-column position-static">
            <Card.Body>
                <a href="Charity1.html" className="stretched-link">
                    <Card.Title>{cardData.charityName}</Card.Title>
                    <Card.Text >{cardData.description}</Card.Text>
                </a>
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
                </Card.Body>
            </Col>
        </Row>
    );
}

export default DisplayCardRequest;